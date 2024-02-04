"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);
var _rules = require('../database/rules');
var _User = require('../database/models/User'); var _User2 = _interopRequireDefault(_User);

class AuthenticateRoutes {
  

  constructor() {
    this.router = _express.Router.call(void 0, );
    this.routes();
  }

   routes() {
    this.router.post("/signin", async (req, res) => {
      const { username, password } = req.body;

      if (!username || !password) {
        req.flash("info", "Por favor, preencha todos os campos! Type: warning");
        return res.redirect("/signin");
      }

      const userAuth = await _connection2.default.execute(
        `SELECT * FROM Users WHERE username = "${username}"`
      );

      if (!userAuth[0]) {
        req.flash("info", "Usuário não encontrado! Type: info");
        return res.redirect("/signin");
      }

      if (!(await _bcryptjs2.default.compare(password, userAuth[0].password))) {
        req.flash("info", "Senha incorreta! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(userAuth[0]);
      
      user.setNewAccess(req);
      await user.update();
      
      const token = _jsonwebtoken2.default.sign({ id: user.id }, "secret", {
        expiresIn: 1800,
      }); // 30 minutes
      
      req.session.token = token;
      req.session.user = user;
      
      return res.redirect("/");
    });

    this.router.get(
      "/logout",
      _rules.rules.auth,
      async (req, res) => {
        if (!req.session.user) {
          req.flash("info", "Você precisa estar logado para acessar esta página! Type: info");
          return res.redirect("/signin");
        }

        const user = new (0, _User2.default)(req.session.user);

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

    this.router.post("/signup", async (req, res) => {
      const { name, email, password, username, role } = req.body;

      if (!name || !email || !password || !username) {
        req.flash("info", "Please, fill all the fields.");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)({
        name,
        email,
        username,
        role,
        password: await _bcryptjs2.default.hash(password, 10),
      });
      user.save();
      user.setNewAccess(req);

      try {
        await _connection2.default.execute(
          `UPDATE Users SET accesses = '${JSON.stringify(
            user.accesses
          )}' WHERE id = '${user.id}'`
        );
      } catch (err) {
        req.flash("info", "Erro ao criar usuário! Type: error");
        return res.redirect("/signin");
      }

      const token = _jsonwebtoken2.default.sign({ id: user.id }, "secret", {
        expiresIn: 1800,
      }); // 30 minutes

      req.session.token = token;
      req.session.user = user;

      req.flash("info", "Usuário criado com sucesso! Type: success");
      return res.redirect("/");
    });
  }
}

exports. default = new AuthenticateRoutes().router;
