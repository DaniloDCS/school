import db from "./connection";
import { Request, Response, NextFunction } from "express";
import User from "./models/User";
import { verify } from "jsonwebtoken";

export const rules = {
  auth: async (req: Request, res: Response, next: NextFunction) => {    
    if (req.session.token) {
      try {
        const TOKEN = verify(req.session.token, "secret");

        const userAuth = await db.execute(
          `SELECT * FROM Users WHERE id = "${TOKEN["id"]}"`
        );
  
        if (!userAuth) {
          req.flash("info", "User not found. Type: info");
          return res.redirect("/signin");
        }
  
        req.session.user = new User(userAuth[0]);
        return next();
      } catch (error) {
        req.flash("info", "Sua sessão expirou! Faça login novamente. Type: warning");
        return res.redirect("/signin");
      }
    } else {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }
  },
  admin: async (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.user) {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }

    const user = new User(req.session.user);

    if (user.getRole() != 0) {
      req.flash("info", "You don't have permission to access this page.");
      return res.redirect("/");
    }

    next();
  },
  principal: async (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.user) {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }

    const user = new User(req.session.user);

    if (user.getRole() != 3 && user.getRole() != 8 && user.getRole() != 0) {
      req.flash("info", "You don't have permission to access this page.");
      return res.redirect("/");
    }

    next();
  },
  coordinator: async (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.user) {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }

    const user = new User(req.session.user);

    if (
      user.getRole() != 4 &&
      user.getRole() != 7 &&
      user.getRole() != 3 &&
      user.getRole() != 0
    ) {
      req.flash("info", "You don't have permission to access this page.");
      return res.redirect("/");
    }

    next();
  },
  librarian: async (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.user) {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }

    const user = new User(req.session.user);

    if (user.getRole() != 5 && user.getRole() != 0) {
      req.flash("info", "You don't have permission to access this page.");
      return res.redirect("/");
    }

    next();
  },
  student: async (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.user) {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }

    const user = new User(req.session.user);

    if (user.getRole() != 1 && user.getRole() != 0) {
      req.flash("info", "You don't have permission to access this page.");
      return res.redirect("/");
    }

    next();
  },
  teacher: async (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.user) {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }

    const user = new User(req.session.user);

    if (
      user.getRole() != 2 &&
      user.getRole() != 7 &&
      user.getRole() != 8 &&
      user.getRole() != 0
    ) {
      req.flash("info", "You don't have permission to access this page.");
      return res.redirect("/");
    }

    next();
  },
};
