import { Router, Request, Response } from "express";
import User from "../database/models/User";
import db from "../database/connection";
import { rules } from "../database/rules";
import { Schedule } from "../database/models/Schedule";

class GeneralRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get("/signin", async (req: Request, res: Response) => {
      const info: { message: string | null, type: string | null } = { message: null, type: null };
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

    this.router.get("/", rules.auth, async (req: Request, res: Response) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new User(req.session.user);

      const query = await db.execute(`
        SELECT Courses.name, Courses.avatar, Courses.status, CoursesUsers.id, CoursesUsers.courseId, CoursesUsers.userId  
        FROM CoursesUsers 
        INNER JOIN Courses ON CoursesUsers.courseId = Courses.id
        WHERE CoursesUsers.userId = '${user.getId()}'`
      );

      const courses = query;

      const query2 = await db.execute(`
        SELECT * FROM Courses WHERE coordinatorId = '${user.getId()}'`
      );

      const myCourses = query2;

      const query3 = await db.execute(`
        SELECT Schools.id, Schools.name, Schools.avatar, Schools.status, SchoolsUsers.id, SchoolsUsers.schoolId, SchoolsUsers.userId
        FROM SchoolsUsers
        INNER JOIN Schools ON SchoolsUsers.schoolId = Schools.id
        WHERE SchoolsUsers.userId = '${user.getId()}'`
      );

      const schools = query3;

      const query4 = await db.execute(`
        SELECT * FROM Schools WHERE principalId = '${user.getId()}'`
      );

      const principalSchools = query4;

      const query5 = await db.execute(`
        SELECT Schools.id, Schools.name, Schools.avatar, Schools.status, Courses.id, Courses.name, Courses.avatar, Courses.status
        FROM Courses
        INNER JOIN Schools ON Courses.schoolId = Schools.id
        WHERE Courses.coordinatorId = '${user.getId()}'`
      );

      const coordinatorSchools = query5;

      const query6 = await db.execute(`
        SELECT Disciplines.id, Disciplines.name, Disciplines.status, DisciplinesTeachers.id, DisciplinesTeachers.disciplineId, DisciplinesTeachers.userId
        FROM DisciplinesTeachers
        INNER JOIN Disciplines ON DisciplinesTeachers.disciplineId = Disciplines.id
        WHERE DisciplinesTeachers.userId = '${user.getId()}'`
      );

      const teacherClasses = query6;

      const query7 = await db.execute(`
        SELECT Disciplines.id, Disciplines.name, Disciplines.status, DisciplinesStudents.id, DisciplinesStudents.disciplineId, DisciplinesStudents.userId
        FROM DisciplinesStudents
        INNER JOIN Disciplines ON DisciplinesStudents.disciplineId = Disciplines.id
        WHERE DisciplinesStudents.userId = '${user.getId()}'`
      );  

      const studentsClasses = query7;

      const query8 = await db.execute(`SELECT * FROM Schedule WHERE userId = '${user.getId()}'`);
      let events: Schedule = new Schedule({ userId: user.getId() });

      if (!query8[0]) await events.save();
      else events = new Schedule(query8[0]);
      events.setEvents(events.getEvents());

      const query9 = await db.execute(`SELECT * FROM UserRole`);
      const roles = query9;

      const query10 = await db.execute(`
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

      const info: { message: string | null, type: string | null } = { message: null, type: null };
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

    this.router.post("/user/theme-update", rules.auth, async (req: Request, res: Response) => {
      const { theme } = req.body;

      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new User(req.session.user);
      user.setTheme(theme);

      try {
        await db.execute(
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
      rules.auth,
      async (req: Request, res: Response) => {
        if (!req.session.user) {
          req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
          return res.redirect("/signin");
        }

        const user = new User(req.session.user);
        user.setEndAccess();

        try {
          await db.execute(
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

    this.router.get("/signup", async (req: Request, res: Response) => {
      const info: { message: string | null; type: string | null } = {
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

    this.router.get("/me", rules.auth, async (req: Request, res: Response) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new User(req.session.user);
      user.setPassword("********");

      return res.render("pages/me", {
        title: user.getName(),
        user,
      });
    });

    this.router.post(
      "/search/user/",
      rules.auth,
      async (req: Request, res: Response) => {
        const { data } = req.body;

        const usersSearch = await db.execute(
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

    this.router.get("/u/:username", async (req: Request, res: Response) => {
      const username = req.params.username;

      const userSearch = await db.execute(
        `SELECT * FROM Users WHERE username = '${username}'`
      );

      if (userSearch[0].length === 0) {
        return res.render("pages/404", {
          title: "404 - Not Found",
        });
      }

      const user = new User(userSearch[0]);
      user.setPassword("********");

      return res.render("pages/user", {
        title: user.getName(),
        user,
      });
    });
  }
}

export default new GeneralRoutes().router;
