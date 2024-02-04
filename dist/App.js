"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _expressflash = require('express-flash'); var _expressflash2 = _interopRequireDefault(_expressflash);
var _expresssession = require('express-session'); var _expresssession2 = _interopRequireDefault(_expresssession);
var _socketio = require('socket.io');
var _http = require('http'); var _http2 = _interopRequireDefault(_http);
var _connectsqlite3 = require('connect-sqlite3'); var _connectsqlite32 = _interopRequireDefault(_connectsqlite3);

var _passport = require('passport'); var _passport2 = _interopRequireDefault(_passport);




var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);









class App {
  
  
  

  constructor() {
    this.express = _express2.default.call(void 0, );
    this.server = _http.createServer.call(void 0, this.express);
    this.io = new (0, _socketio.Server)(this.server);

    this.middlewares();
    this.routes();
    this.socket();
  }

   middlewares() {
    this.express.use(_express2.default.json());
    this.express.use(_cors2.default.call(void 0, ));
    this.express.use(_express2.default.urlencoded({ extended: true }));
    this.express.set("view engine", "pug");
    this.express.use("/public/", _express2.default.static("public/"));
    this.express.use("/flaticon/", _express2.default.static("node_modules/@flaticon/flaticon-uicons/"));
    this.express.use( "/io/", _express2.default.static("node_modules/socket.io/client-dist/") );
    this.express.use(_expressflash2.default.call(void 0, ));

    const SQLiteStoreInstance = _connectsqlite32.default.call(void 0, _expresssession2.default);

    this.express.use(
      _expresssession2.default.call(void 0, {
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
    this.express.use(_passport2.default.initialize());
    this.express.use(_passport2.default.session());
  }

   routes() {
    this.express.use(_routes2.default);

    this.express.use((req, res) => {
      res.status(404).render("pages/404", {
        title: "Page not found",
      });
    });

    this.express.use((err, req, res) => {
      res.status(500).render("pages/500", {
        title: "Internal server error",
      });
    });

    // Verifique a hora da última atividade em cada solicitação
    this.express.use((req, res, next) => {
      let token = req.session.token;
      let lastActivity =
        typeof req.session.lastActivity === "number"
          ? req.session.lastActivity
          : new Date(_nullishCoalesce(req.session.lastActivity, () => ( ""))).getTime();

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
    this.express.use((req, res, next) => {
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

   socket() {
    let users = [];
    
    let usersChats = [];

    let documentsUsers


 = [];

    let usersGroup


 = [];

    let usersCall


 = [];

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
        const id = _optionalChain([users, 'access', _ => _.find, 'call', _2 => _2((u) => u.userId === data.userId), 'optionalAccess', _3 => _3.socketId]);
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
        const to = users.find((u) => u.userId === data.to);
        const from = users.find((u) => u.userId === data.from);

        socket.to(to.socketId).emit("message-chat", data);
        
        // notificar o usuario se ele não estiver no chat
        if (!usersChats.some((u) => u.chatId === data.chatId)) socket.to(to.socketId).emit("notification", { type: "chat", chatId: data.chatId, from: from.infos });
      });

      socket.on("typing-chat", (data) => {
        const to = users.find((u) => u.userId === data.to);
        const from = users.find((u) => u.userId === data.from);

        socket.to(to.socketId).emit("typing-chat", data);
      });

      socket.on("join-chat", (data) => {
    
        if (usersChats.some((u) => u.chatId === data.chatId)) {
          if (
            !_optionalChain([usersChats
, 'access', _4 => _4.find, 'call', _5 => _5((u) => u.chatId === data.chatId)
, 'optionalAccess', _6 => _6.users, 'access', _7 => _7.includes, 'call', _8 => _8(data.userId)])
          ) {
            _optionalChain([usersChats
, 'access', _9 => _9.find, 'call', _10 => _10((u) => u.chatId === data.chatId)
, 'optionalAccess', _11 => _11.users, 'access', _12 => _12.push, 'call', _13 => _13(data.userId)]);
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
        _optionalChain([usersChats
, 'access', _14 => _14.find, 'call', _15 => _15((u) => u.chatId === data.chatId)
, 'optionalAccess', _16 => _16.users, 'access', _17 => _17.splice, 'call', _18 => _18(
            _optionalChain([usersChats
, 'access', _19 => _19.find, 'call', _20 => _20((u) => u.chatId === data.chatId)
, 'optionalAccess', _21 => _21.users, 'access', _22 => _22.indexOf, 'call', _23 => _23(data.userId)]),
            1
          )]);
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
            !_optionalChain([usersGroup
, 'access', _24 => _24.find, 'call', _25 => _25((u) => u.groupId === data.groupId)
, 'optionalAccess', _26 => _26.users, 'access', _27 => _27.some, 'call', _28 => _28((u) => u.userId === data.userId)])
          ) {
            _optionalChain([usersGroup
, 'access', _29 => _29.find, 'call', _30 => _30((u) => u.groupId === data.groupId)
, 'optionalAccess', _31 => _31.users, 'access', _32 => _32.push, 'call', _33 => _33({
                userId: data.userId,
                name: data.name,
                avatar: data.avatar,
              })]);
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

        _optionalChain([usersGroup
, 'access', _34 => _34.find, 'call', _35 => _35((u) => u.groupId === data.groupId)
, 'optionalAccess', _36 => _36.users, 'access', _37 => _37.splice, 'call', _38 => _38(
            _optionalChain([usersGroup
, 'access', _39 => _39.find, 'call', _40 => _40((u) => u.groupId === data.groupId)
, 'optionalAccess', _41 => _41.users, 'access', _42 => _42.findIndex, 'call', _43 => _43((u) => u.userId === data.userId)]),
            1
          )]);

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
            !_optionalChain([usersCall
, 'access', _44 => _44.find, 'call', _45 => _45((u) => u.callId === data.callId)
, 'optionalAccess', _46 => _46.users, 'access', _47 => _47.some, 'call', _48 => _48((u) => u.userId === data.userId)])
          ) {
            _optionalChain([usersCall
, 'access', _49 => _49.find, 'call', _50 => _50((u) => u.callId === data.callId)
, 'optionalAccess', _51 => _51.users, 'access', _52 => _52.push, 'call', _53 => _53({
                userId: data.userId,
                name: data.name,
                avatar: data.avatar,
              })]);
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

        _optionalChain([usersCall
, 'access', _54 => _54.find, 'call', _55 => _55((u) => u.callId === data.callId)
, 'optionalAccess', _56 => _56.users, 'access', _57 => _57.splice, 'call', _58 => _58(
            _optionalChain([usersCall
, 'access', _59 => _59.find, 'call', _60 => _60((u) => u.callId === data.callId)
, 'optionalAccess', _61 => _61.users, 'access', _62 => _62.findIndex, 'call', _63 => _63((u) => u.userId === data.userId)]),
            1
          )]);

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
            !_optionalChain([documentsUsers
, 'access', _64 => _64.find, 'call', _65 => _65((u) => u.documentId === data.documentId)
, 'optionalAccess', _66 => _66.users, 'access', _67 => _67.some, 'call', _68 => _68((u) => u.userId === data.userId)])
          ) {
            _optionalChain([documentsUsers
, 'access', _69 => _69.find, 'call', _70 => _70((u) => u.documentId === data.documentId)
, 'optionalAccess', _71 => _71.users, 'access', _72 => _72.push, 'call', _73 => _73({
                userId: data.userId,
                name: data.name,
                avatar: data.avatar,
              })]);
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

        _optionalChain([documentsUsers
, 'access', _74 => _74.find, 'call', _75 => _75((u) => u.documentId === data.documentId)
, 'optionalAccess', _76 => _76.users, 'access', _77 => _77.splice, 'call', _78 => _78(
            _optionalChain([documentsUsers
, 'access', _79 => _79.find, 'call', _80 => _80((u) => u.documentId === data.documentId)
, 'optionalAccess', _81 => _81.users, 'access', _82 => _82.findIndex, 'call', _83 => _83((u) => u.userId === data.userId)]),
            1
          )]);

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

exports. default = App;
