"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _User = require('../database/models/User'); var _User2 = _interopRequireDefault(_User);
var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);
var _rules = require('../database/rules');
var _Schedule = require('../database/models/Schedule');

class GeneralRoutes {
  

  constructor() {
    this.router = _express.Router.call(void 0, );
    this.routes();
  }

   routes() {
    this.router.get("/signin", async (req, res) => {
      const info = { message: null, type: null };
      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("pages/signin", {
        title: "Sign In",
        info,
      });
    });

    this.router.get("/", _rules.rules.auth, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const query = await _connection2.default.execute(`
        SELECT Courses.name, Courses.avatar, Courses.status, CoursesUsers.id, CoursesUsers.courseId, CoursesUsers.userId  
        FROM CoursesUsers 
        INNER JOIN Courses ON CoursesUsers.courseId = Courses.id
        WHERE CoursesUsers.userId = '${user.getId()}'`
      );

      const courses = query;

      const query2 = await _connection2.default.execute(`
        SELECT * FROM Courses WHERE coordinatorId = '${user.getId()}'`
      );

      const myCourses = query2;

      const query3 = await _connection2.default.execute(`
        SELECT Schools.id, Schools.name, Schools.avatar, Schools.status, SchoolsUsers.id, SchoolsUsers.schoolId, SchoolsUsers.userId
        FROM SchoolsUsers
        INNER JOIN Schools ON SchoolsUsers.schoolId = Schools.id
        WHERE SchoolsUsers.userId = '${user.getId()}'`
      );

      const schools = query3;

      const query4 = await _connection2.default.execute(`
        SELECT * FROM Schools WHERE principalId = '${user.getId()}'`
      );

      const principalSchools = query4;

      const query5 = await _connection2.default.execute(`
        SELECT Schools.id, Schools.name, Schools.avatar, Schools.status, Courses.id, Courses.name, Courses.avatar, Courses.status
        FROM Courses
        INNER JOIN Schools ON Courses.schoolId = Schools.id
        WHERE Courses.coordinatorId = '${user.getId()}'`
      );

      const coordinatorSchools = query5;

      const query6 = await _connection2.default.execute(`
        SELECT Disciplines.id, Disciplines.name, Disciplines.status, DisciplinesTeachers.id, DisciplinesTeachers.disciplineId, DisciplinesTeachers.userId
        FROM DisciplinesTeachers
        INNER JOIN Disciplines ON DisciplinesTeachers.disciplineId = Disciplines.id
        WHERE DisciplinesTeachers.userId = '${user.getId()}'`
      );

      const teacherClasses = query6;

      const query7 = await _connection2.default.execute(`
        SELECT Disciplines.id, Disciplines.name, Disciplines.status, DisciplinesStudents.id, DisciplinesStudents.disciplineId, DisciplinesStudents.userId
        FROM DisciplinesStudents
        INNER JOIN Disciplines ON DisciplinesStudents.disciplineId = Disciplines.id
        WHERE DisciplinesStudents.userId = '${user.getId()}'`
      );  

      const studentsClasses = query7;

      const query8 = await _connection2.default.execute(`SELECT * FROM Schedule WHERE userId = '${user.getId()}'`);
      let events = new (0, _Schedule.Schedule)({ userId: user.getId() });

      if (!query8[0]) await events.save();
      else events = new (0, _Schedule.Schedule)(query8[0]);
      events.setEvents(events.getEvents());

      const query9 = await _connection2.default.execute(`SELECT * FROM UserRole`);
      const roles = query9;

      const query10 = await _connection2.default.execute(`
        SELECT 
          UsersEmails.id, UsersEmails.emailId, UsersEmails.userId, 
          Emails.subject, Emails.content, Emails.fromId, Emails.toId, Emails.createdAt, Emails.toRead,
          Users.name, Users.username, Users.email, Users.avatar
        FROM 
          UsersEmails 
        INNER JOIN Emails ON UsersEmails.emailId = Emails.id 
        INNER JOIN Users ON Emails.fromId = Users.id 
        WHERE Emails.toId = '${user.getId()}' AND UsersEmails.userId = '${user.getId()}'
        ORDER BY UsersEmails.createdAt DESC`);

      const emails = query10;

      const info = { message: null, type: null };
      const str = req.flash("info").toString();

      if (str !== "") {
        const index = str.indexOf("Type:");
        info.message = str.substring(0, index);
        info.type = str.substring(index + 6, str.length);
      }

      return res.render("pages/dashboard", {
        title: "Dashboard",
        info,
        roles,
        user,
        events,
        courses,
        myCourses,
        schools,
        emails,
        principalSchools,
        coordinatorSchools,
        teacherClasses,
        studentsClasses,
      });
    });

    this.router.post("/user/theme-update", _rules.rules.auth, async (req, res) => {
      const { theme } = req.body;

      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      user.setTheme(theme);

      try {
        await _connection2.default.execute(
          `UPDATE Users SET theme = '${user.getTheme()}' WHERE id = '${user.getId()}'`
        );
      } catch (err) {
        req.flash("info", "Erro ao atualizar o tema! Type: error");
        return res.redirect(req.headers.referer || "/");
      }

      req.flash("info", "Tema atualizado com sucesso! Type: success");
      return res.redirect(req.headers.referer || "/");
    });

    this.router.get(
      "/logout",
      _rules.rules.auth,
      async (req, res) => {
        if (!req.session.user) {
          req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
          return res.redirect("/signin");
        }

        const user = new (0, _User2.default)(req.session.user);
        user.setEndAccess();

        try {
          await _connection2.default.execute(
            `UPDATE Users SET accesses = '${JSON.stringify(
              user.accesses
            )}' WHERE id = '${user.id}'`
          );
        } catch (err) {
          req.flash("info", "Erro ao fazer logout! Type: error");
          return res.redirect("/signin");
        }

        req.session.token = null;
        req.session.user = null;

        req.flash("info", "Você foi desconectado! Type: success");
        return res.redirect("/signin");
      }
    );

    this.router.get("/signup", async (req, res) => {
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

      return res.render("pages/signup", {
        title: "Sign Up",
        info
      });
    });

    this.router.get("/me", _rules.rules.auth, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      user.setPassword("********");

      return res.render("pages/me", {
        title: user.getName(),
        user,
      });
    });

    this.router.post(
      "/search/user/",
      _rules.rules.auth,
      async (req, res) => {
        const { data } = req.body;

        const usersSearch = await _connection2.default.execute(
          `SELECT id, name, username, avatar, email FROM Users WHERE username LIKE '%${data}%' OR email LIKE '%${data}%' LIMIT 10`
        );

        if (usersSearch.length === 0) {
          return res.json({
            message: "User not found.",
            status: 404,
          });
        }
        
        return res.json({
          message: "User found.",
          status: 200,
          users: usersSearch,
        });
      }
    );

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
  }
}

exports. default = new GeneralRoutes().router;
