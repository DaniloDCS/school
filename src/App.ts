import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import flash from "express-flash";
import session from "express-session";
import { Server } from "socket.io";
import http, { createServer } from "http";
import SQLiteStore from "connect-sqlite3";
import path from "path";
import passport from "passport";
import multer from "multer";

import User from "./database/models/User";

import routes from "./routes";

declare module "express-session" {
  interface SessionData {
    user: User | null;
    token: string | null;
    lastActivity: Date | number;
  }
}

class App {
  public express: Application;
  public server: http.Server;
  public io: Server;

  constructor() {
    this.express = express();
    this.server = createServer(this.express);
    this.io = new Server(this.server);

    this.middlewares();
    this.routes();
    this.socket();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.set("view engine", "pug");
    this.express.use("/public/", express.static("public/"));
    this.express.use("/flaticon/", express.static("node_modules/@flaticon/flaticon-uicons/"));
    this.express.use( "/io/", express.static("node_modules/socket.io/client-dist/") );
    this.express.use(flash());

    const SQLiteStoreInstance = SQLiteStore(session);

    this.express.use(
      session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        cookie: {
          secure: false,
          maxAge: 86400000,
          expires: new Date(Date.now() + 86400000),
        },
        // store: new SQLiteStoreInstance({
        //   table: "Sessions",
        //   db: "stuudy.db",
        //   dir: path.resolve(__dirname, "database"),
        // }) as any,
      })
    );
    this.express.use(passport.initialize());
    this.express.use(passport.session());
  }

  private routes(): void {
    this.express.use(routes);

    this.express.use((req: Request, res: Response) => {
      res.status(404).render("pages/404", {
        title: "Page not found",
      });
    });

    this.express.use((err: Error, req: Request, res: Response) => {
      res.status(500).render("pages/500", {
        title: "Internal server error",
      });
    });

    // Verifique a hora da última atividade em cada solicitação
    this.express.use((req: Request, res: Response, next: NextFunction) => {
      let token = req.session.token;
      let lastActivity =
        typeof req.session.lastActivity === "number"
          ? req.session.lastActivity
          : new Date(req.session.lastActivity ?? "").getTime();

      if (token && lastActivity && Date.now() - lastActivity > 30 * 60 * 1000) {
        // 30 minutes
        // O usuário está inativo por muito tempo, invalidar o token
        delete req.session.token;
      } else {
        // Atualize a hora da última atividade
        req.session.lastActivity = Date.now();
      }
      next();
    });

    // para cada solicitação, verifique se o usuário está logado
    this.express.use((req: Request, res: Response, next: NextFunction) => {
      if (req.session.token) {
        // o usuário está logado
        // atualize a hora da última atividade
        req.session.lastActivity = Date.now();
        next();
      } else {
        // o usuário não está logado
        // redirecionar para a página de login
        res.redirect("/signin");
      }
    });
  }

  private socket(): void {
    let users: { socketId: string, userId: string, infos: { id: string, name: string, username: string, avatar: string } }[] = [];
    
    let usersChats: { chatId: number; users: [userId: number] }[] = [];

    let documentsUsers: {
      documentId: number;
      users: [{ userId: number; name: string; avatar: string }];
    }[] = [];

    let usersGroup: {
      groupId: number;
      users: [{ userId: number; name: string; avatar: string }];
    }[] = [];

    let usersCall: {
      callId: number;
      users: [{ userId: number; name: string; avatar: string }];
    }[] = [];

    this.io.on("connection", (socket) => {

      socket.on("join", (data) => { 

        if (!users.some((u) => u.socketId === data.socketId) && data.socketId !== undefined) {          
          if (users.some((u) => u.userId === data.userId)) {
            users.splice(users.findIndex((u) => u.userId === data.userId), 1 );    
          }      
          
          users.push({
            socketId: data.socketId,
            userId: data.userId,
            infos: {
              id: data.id,
              name: data.name,
              username: data.username,
              avatar: data.avatar,
            }
          });
        }
      });
      
      
      socket.on("disconnect", () => {
        users = users.filter((u) => u.userId !== socket.id);
      });

      // notification

      socket.on("notification", (data) => {
        const id: any = users.find((u) => u.userId === data.userId)?.socketId;
        if (id) socket.to(id).emit("notification", data);
      });

      socket.on("notification-all", (data) => {
        socket.broadcast.emit("notification", data);
      });

      socket.on("notification-users", (data) => {
        for (const user of data.users) {
          socket.to(user.id).emit("notification", data);
        }
      });

      // Chat

      socket.on("message-chat", (data) => {
        const to: any = users.find((u) => u.userId === data.to);
        const from: any = users.find((u) => u.userId === data.from);

        socket.to(to.socketId).emit("message-chat", data);
        
        // notificar o usuario se ele não estiver no chat
        if (!usersChats.some((u) => u.chatId === data.chatId)) socket.to(to.socketId).emit("notification", { type: "chat", chatId: data.chatId, from: from.infos });
      });

      socket.on("typing-chat", (data) => {
        const to: any = users.find((u) => u.userId === data.to);
        const from: any = users.find((u) => u.userId === data.from);

        socket.to(to.socketId).emit("typing-chat", data);
      });

      socket.on("join-chat", (data) => {
    
        if (usersChats.some((u) => u.chatId === data.chatId)) {
          if (
            !usersChats
              .find((u) => u.chatId === data.chatId)
              ?.users.includes(data.userId)
          ) {
            usersChats
              .find((u) => u.chatId === data.chatId)
              ?.users.push(data.userId);
          }
        } else {
          usersChats.push({
            chatId: data.chatId,
            users: [data.userId],
          });
        }

        socket.to(data.chatId).emit(
          "join-chat",
          usersChats.find((u) => u.chatId === data.chatId)
        );

        socket.emit(
          "join-chat",
          usersChats.find((u) => u.chatId === data.chatId)
        );
      });

      socket.on("leave-chat", (data) => {
        socket.leave(data.chatId);
        usersChats
          .find((u) => u.chatId === data.chatId)
          ?.users.splice(
            usersChats
              .find((u) => u.chatId === data.chatId)
              ?.users.indexOf(data.userId)!,
            1
          );
        socket.to(data.chatId).emit(
          "leave-chat",
          usersChats.find((u) => u.chatId === data.chatId)
        );
        socket.emit(
          "leave-chat",
          usersChats.find((u) => u.chatId === data.chatId)
        );
      });
      
      socket.on("react-message-chat", (data) => {
        socket.to(data.chatId).emit("react-message-chat", data);  
      });

      // Groups

      socket.on("join-group", (data) => {
        socket.join(data.groupId);
      });

      socket.on("message-group", (data) => {
        socket.to(data.groupId).emit("message-group", data);
      });

      socket.on("react-message-group", (data) => {
        socket.to(data.groupId).emit("react-message-group", data);
      });

      socket.on("typing-group", (data) => {
        socket.to(data.groupId).emit("typing-group", data);
      });

      socket.on("join-group", (data) => {
        socket.join(data.groupId);

        if (usersGroup.some((u) => u.groupId === data.groupId)) {
          if (
            !usersGroup
              .find((u) => u.groupId === data.groupId)
              ?.users.some((u) => u.userId === data.userId)
          ) {
            usersGroup
              .find((u) => u.groupId === data.groupId)
              ?.users.push({
                userId: data.userId,
                name: data.name,
                avatar: data.avatar,
              });
          }
        } else {
          usersGroup.push({
            groupId: data.groupId,
            users: [
              {
                userId: data.userId,
                name: data.name,
                avatar: data.avatar,
              },
            ],
          });
        }

        socket.to(data.groupId).emit(
          "join-group",
          usersGroup.find((u) => u.groupId === data.groupId)
        );
        socket.emit(
          "join-group",
          usersGroup.find((u) => u.groupId === data.groupId)
        );
      });

      socket.on("leave-group", (data) => {
        socket.leave(data.groupId);

        usersGroup
          .find((u) => u.groupId === data.groupId)
          ?.users.splice(
            usersGroup
              .find((u) => u.groupId === data.groupId)
              ?.users.findIndex((u) => u.userId === data.userId)!,
            1
          );

        socket.to(data.groupId).emit(
          "leave-group",
          usersGroup.find((u) => u.groupId === data.groupId)
        );
        socket.emit(
          "leave-group",
          usersGroup.find((u) => u.groupId === data.groupId)
        );
      });

      // Video

      socket.on("join-call", (data) => {
        socket.join(data.callId);

        if (usersCall.some((u) => u.callId === data.callId)) {
          if (
            !usersCall
              .find((u) => u.callId === data.callId)
              ?.users.some((u) => u.userId === data.userId)
          ) {
            usersCall
              .find((u) => u.callId === data.callId)
              ?.users.push({
                userId: data.userId,
                name: data.name,
                avatar: data.avatar,
              });
          }
        } else {
          usersCall.push({
            callId: data.callId,
            users: [
              {
                userId: data.userId,
                name: data.name,
                avatar: data.avatar,
              },
            ],
          });
        }

        socket.to(data.callId).emit(
          "join-call",
          usersCall.find((u) => u.callId === data.callId)
        );
        socket.emit(
          "join-call",
          usersCall.find((u) => u.callId === data.callId)
        );
      });

      socket.on("leave-call", (data) => {
        socket.leave(data.callId);

        usersCall
          .find((u) => u.callId === data.callId)
          ?.users.splice(
            usersCall
              .find((u) => u.callId === data.callId)
              ?.users.findIndex((u) => u.userId === data.userId)!,
            1
          );

        socket.to(data.callId).emit(
          "leave-call",
          usersCall.find((u) => u.callId === data.callId)
        );
        socket.emit(
          "leave-call",
          usersCall.find((u) => u.callId === data.callId)
        );
      });

      socket.on("call", (data) => {
        socket.to(data.callId).emit("call", data);
      });

      // Document

      socket.on("document", (data) => {
        socket.to(data.documentId).emit("document", data);
      });

      socket.on("typing-document", (data) =>
        socket.to(data.documentId).emit("typing-document", data)
      );

      socket.on("join-document", (data) => {
        socket.join(data.documentId);

        // verificar se tem o documento

        if (documentsUsers.some((u) => u.documentId === data.documentId)) {
          // verificar se o usuario ja esta no documento
          if (
            !documentsUsers
              .find((u) => u.documentId === data.documentId)
              ?.users.some((u) => u.userId === data.userId)
          ) {
            documentsUsers
              .find((u) => u.documentId === data.documentId)
              ?.users.push({
                userId: data.userId,
                name: data.name,
                avatar: data.avatar,
              });
          }
        } else {
          documentsUsers.push({
            documentId: data.documentId,
            users: [
              {
                userId: data.userId,
                name: data.name,
                avatar: data.avatar,
              },
            ],
          });
        }

        socket.to(data.documentId).emit(
          "join-document",
          documentsUsers.find((u) => u.documentId === data.documentId)
        );
        socket.emit(
          "join-document",
          documentsUsers.find((u) => u.documentId === data.documentId)
        );
      });

      socket.on("leave-document", (data) => {
        socket.leave(data.documentId);

        documentsUsers
          .find((u) => u.documentId === data.documentId)
          ?.users.splice(
            documentsUsers
              .find((u) => u.documentId === data.documentId)
              ?.users.findIndex((u) => u.userId === data.userId)!,
            1
          );

        socket.to(data.documentId).emit(
          "leave-document",
          documentsUsers.find((u) => u.documentId === data.documentId)
        );
        socket.emit(
          "leave-document",
          documentsUsers.find((u) => u.documentId === data.documentId)
        );
      });
    });
  }
}

export default App;
