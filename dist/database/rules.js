"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _connection = require('./connection'); var _connection2 = _interopRequireDefault(_connection);

var _User = require('./models/User'); var _User2 = _interopRequireDefault(_User);
var _jsonwebtoken = require('jsonwebtoken');

 const rules = {
  auth: async (req, res, next) => {    
    if (req.session.token) {
      try {
        const TOKEN = _jsonwebtoken.verify.call(void 0, req.session.token, "secret");

        const userAuth = await _connection2.default.execute(
          `SELECT * FROM Users WHERE id = "${TOKEN["id"]}"`
        );
  
        if (!userAuth) {
          req.flash("info", "User not found. Type: info");
          return res.redirect("/signin");
        }
  
        req.session.user = new (0, _User2.default)(userAuth[0]);
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
  admin: async (req, res, next) => {
    if (!req.session.user) {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }

    const user = new (0, _User2.default)(req.session.user);

    if (user.getRole() != 0) {
      req.flash("info", "You don't have permission to access this page.");
      return res.redirect("/");
    }

    next();
  },
  principal: async (req, res, next) => {
    if (!req.session.user) {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }

    const user = new (0, _User2.default)(req.session.user);

    if (user.getRole() != 3 && user.getRole() != 8 && user.getRole() != 0) {
      req.flash("info", "You don't have permission to access this page.");
      return res.redirect("/");
    }

    next();
  },
  coordinator: async (req, res, next) => {
    if (!req.session.user) {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }

    const user = new (0, _User2.default)(req.session.user);

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
  librarian: async (req, res, next) => {
    if (!req.session.user) {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }

    const user = new (0, _User2.default)(req.session.user);

    if (user.getRole() != 5 && user.getRole() != 0) {
      req.flash("info", "You don't have permission to access this page.");
      return res.redirect("/");
    }

    next();
  },
  student: async (req, res, next) => {
    if (!req.session.user) {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }

    const user = new (0, _User2.default)(req.session.user);

    if (user.getRole() != 1 && user.getRole() != 0) {
      req.flash("info", "You don't have permission to access this page.");
      return res.redirect("/");
    }

    next();
  },
  teacher: async (req, res, next) => {
    if (!req.session.user) {
      req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
      return res.redirect("/signin");
    }

    const user = new (0, _User2.default)(req.session.user);

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
}; exports.rules = rules;
