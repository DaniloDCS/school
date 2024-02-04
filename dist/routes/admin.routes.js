"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _User = require('../database/models/User'); var _User2 = _interopRequireDefault(_User);
var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

class AdministrationRoutes {
  

  constructor() {
    this.router = _express.Router.call(void 0, );
    this.routes();
  }

   routes() {
    this.router.get("/", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("admin/dashboard", {
        title: "Dashboard",
        info,
        user,
      });
    });

    this.router.get("/users", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const usersSearch = await _connection2.default.execute("SELECT * FROM Users LIMIT 100");
      const users = usersSearch.map((user) => new (0, _User2.default)(user));
      const roles = await _connection2.default.execute(`SELECT * FROM UserRole`);

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("admin/users", {
        title: "Users",
        info,
        users,
        roles,
        user
      });
    });

    this.router.get("/u/:username", async (req, res) => {
      const username = req.params.username;

      const userSearch = await _connection2.default.execute(
        `SELECT * FROM Users WHERE username = '${username}'`
      );

      if (userSearch[0].length === 0) {
        return res.render("pages/404", {
          title: "404 - Not Found",
        });
      }

      const user = new (0, _User2.default)(userSearch[0]);
      user.setPassword("********");

      return res.render("pages/user", {
        title: user.getName(),
        user,
      });
    });

    this.router.get("/user/register", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const roles = await _connection2.default.execute(`SELECT * FROM UserRole`);

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("admin/register", {
        title: "Register",
        info,
        user,
        roles,
      });
    });

    this.router.post("/user/signup", async (req, res) => {
      const { name, email, password, username, role } = req.body;

      if (!name || !email || !password || !username) {
        req.flash("info", "Please, fill all the fields.");
        return res.redirect("/admin/user/register");
      }

      const user = new (0, _User2.default)({
        name,
        email,
        username,
        role,
        password: await _bcryptjs2.default.hash(password, 10),
      });
      user.save();

      req.flash("info", "User created successfully.");
      return res.redirect("/admin/users");
    });

    this.router.post("/user/update", async (req, res) => {
      const { id, name, email, password, username, role, birthday } = req.body;

      if (!id) {
        req.flash("info", "Please, fill all the fields.");
        return res.redirect("/admin/users");
      }

      const select = await _connection2.default.execute(`SELECT * FROM Users WHERE id = "${id}"`);
      const user = new (0, _User2.default)(select[0]);

      if (!user) {
        req.flash("info", "User is not identify!");
        return res.redirect("/admin/users");
      }

      if (name) user.setName(name);
      if (email) user.setEmail(email);
      if (password) user.setPassword(password);
      if (username) user.setUsername(username);
      if (role) user.setRole(role);
      if (birthday) user.setBirthday(birthday);

      await _connection2.default.execute(
        `UPDATE Users SET name = '${user.getName()}', email = '${user.getEmail()}', password = '${user.getPassword()}', username = '${user.getUsername()}', role = '${user.getRole()}', birthday = '${user.getBirthday()}' WHERE id = '${user.getId()}'`
      );

      req.flash("info", "User updated successfully.");
      return res.redirect("/admin/users");
    });

    this.router.get("/tables", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const tables = await _connection2.default.execute(
        `SELECT name FROM sqlite_master WHERE type="table"`
      );

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("admin/tables", {
        title: "Tables",
        info,
        tables,
        user,
      });
    });

    this.router.get("/table/:title", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const { title } = req.params;

      const values = await _connection2.default.execute(`SELECT * FROM ${title} LIMIT 1000`);

      const struc = await _connection2.default.execute(`PRAGMA table_info(${title})`);

      const info = {
        message: null,
        type: null,
      };

      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("admin/table", {
        title,
        values,
        struc,
        info,
        user
      });
    });

    this.router.post(
      "/table/:title/update/:id",
      async (req, res) => {
        const { title, id } = req.params;
        const { column, value } = req.body;

        if (!title || !id || !column || !value) res.json({ message: "Please, fill all the fields.", status: 400 });

        await _connection2.default.execute( `UPDATE ${title} SET ${column} = '${value}' WHERE id = '${id}'` );

        return res.json({ message: "Value updated successfully.", status: 200 });
      }
    );

    this.router.get(
      "/table/:title/delete/:id",
      async (req, res) => {
        const { title, id } = req.params;

        if (!title || !id) {
          req.flash("info", "Please, fill all the fields.");
          return res.redirect("/admin/tables");
        }

        await _connection2.default.execute(`DELETE FROM ${title} WHERE id = '${id}'`);

        req.flash("info", "Value deleted successfully.");
        return res.redirect("/admin/table/" + title);
      }
    );
  }
}

exports. default = new AdministrationRoutes().router;
