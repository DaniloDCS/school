import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import db from "../database/connection";
import { rules } from "../database/rules";
import User from "../database/models/User";

class AuthenticateRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.post("/signin", async (req: Request, res: Response) => {
      const { username, password } = req.body;

      if (!username || !password) {
        req.flash("info", "Por favor, preencha todos os campos! Type: warning");
        return res.redirect("/signin");
      }

      const userAuth = await db.execute(
        `SELECT * FROM Users WHERE username = "${username}"`
      );

      if (!userAuth[0]) {
        req.flash("info", "Usuário não encontrado! Type: info");
        return res.redirect("/signin");
      }

      if (!(await bcrypt.compare(password, userAuth[0].password))) {
        req.flash("info", "Senha incorreta! Type: warning");
        return res.redirect("/signin");
      }

      const user = new User(userAuth[0]);
      
      user.setNewAccess(req);
      await user.update();
      
      const token = jwt.sign({ id: user.id }, "secret", {
        expiresIn: 1800,
      }); // 30 minutes
      
      req.session.token = token;
      req.session.user = user;
      
      return res.redirect("/");
    });

    this.router.get(
      "/logout",
      rules.auth,
      async (req: Request, res: Response) => {
        if (!req.session.user) {
          req.flash("info", "Você precisa estar logado para acessar esta página! Type: info");
          return res.redirect("/signin");
        }

        const user = new User(req.session.user);

        try{
          await user.logout();
        } catch(err) {
          req.flash("info", "Erro ao fazer logout! Type: error");
          return res.redirect("/signin");
        }

        req.session.token = null;
        req.session.user = null;

        req.flash("info", "Você foi desconectado! Type: success");
        return res.redirect("/signin");
      }
    );

    this.router.post("/signup", async (req: Request, res: Response) => {
      const { name, email, password, username, role } = req.body;

      if (!name || !email || !password || !username) {
        req.flash("info", "Please, fill all the fields.");
        return res.redirect("/signin");
      }

      const user = new User({
        name,
        email,
        username,
        role,
        password: await bcrypt.hash(password, 10),
      });
      user.save();
      user.setNewAccess(req);

      try {
        await db.execute(
          `UPDATE Users SET accesses = '${JSON.stringify(
            user.accesses
          )}' WHERE id = '${user.id}'`
        );
      } catch (err) {
        req.flash("info", "Erro ao criar usuário! Type: error");
        return res.redirect("/signin");
      }

      const token = jwt.sign({ id: user.id }, "secret", {
        expiresIn: 1800,
      }); // 30 minutes

      req.session.token = token;
      req.session.user = user;

      req.flash("info", "Usuário criado com sucesso! Type: success");
      return res.redirect("/");
    });
  }
}

export default new AuthenticateRoutes().router;
