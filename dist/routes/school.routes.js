"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _express = require('express');
var _User = require('../database/models/User'); var _User2 = _interopRequireDefault(_User);
var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);
var _rules = require('../database/rules');

var _functions = require('../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );

const { admin, coordinator, principal, student, teacher } = _rules.rules;

var _Course = require('../database/models/School/Course'); var _Course2 = _interopRequireDefault(_Course);
var _Period = require('../database/models/School/Period'); var _Period2 = _interopRequireDefault(_Period);
var _Discipline = require('../database/models/School/Discipline'); var _Discipline2 = _interopRequireDefault(_Discipline);
var _School = require('../database/models/School/School'); var _School2 = _interopRequireDefault(_School);
var _Classroom = require('../database/models/School/Classroom'); var _Classroom2 = _interopRequireDefault(_Classroom);
var _Grade = require('../database/models/School/Grade'); var _Grade2 = _interopRequireDefault(_Grade);
var _Teacher = require('../database/models/School/Teacher'); var _Teacher2 = _interopRequireDefault(_Teacher);
var _Student = require('../database/models/School/Student');
var _Email = require('../database/models/Email');
var _Class = require('../database/models/School/Class'); var _Class2 = _interopRequireDefault(_Class);

class SchoolRoutes {
  

  constructor() {
    this.router = _express.Router.call(void 0, );
    this.School();
    this.Course();
    this.Period();
    this.Classroom();
    this.Discipline();
  }

   School() {
    this.router.get("/s/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`SELECT * FROM Schools WHERE id='${id}' AND principalId='${user.getId()}'`);
      
      if (!query[0]) {
        req.flash("info", "Esta escola não existe. Type: error");
        return res.redirect("/");
      }

      const school = new (0, _School2.default)(query[0]);

      const query2 = await _connection2.default.execute(`SELECT * FROM Courses WHERE schoolId='${id}'`);

      if (!query2) {
        req.flash("info", "Esta escola não existe. Type: error");
        return res.redirect("/");
      }

      const courses = _optionalChain([query2, 'optionalAccess', _ => _.map, 'call', _2 => _2((course) => new (0, _Course2.default)(course))]);

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

      return res.render("school/school", {
        title: school.getName(),
        user,
        info,
        school,
        courses,
      });
    });

    this.router.post("/school/update/:id", principal, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const { id } = req.params;

      if (!id) {
        req.flash("info", "É necessário preencher todos os campos! Type: warning");
        return res.redirect("/");
      }

      const query = await _connection2.default.execute(`SELECT * FROM Schools WHERE id='${id}'`);

      if (!query[0]) {
        req.flash("info", "Essa escola não existe. Type: error");
        return res.redirect("/");
      }

      const school = new (0, _School2.default)(query[0]);

      const { name, avatar, email, phone, status, message, principalId } = req.body;

      if (name) school.setName(name);
      if (avatar) school.setAvatar(avatar);
      if (email) school.setEmail(email);
      if (phone) school.setPhone(phone);
      if (status) school.setStatus(status);
      if (message) school.setMessage(message);
      if (principalId) school.setPrincipalId(principalId);

      await school.update();

      req.flash("info", "Escola atualizada com sucesso! Type: success");
      return res.redirect(`/school/s/${school.getId()}`);
    });

    this.router.post("/create", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const { name, email, phone } = req.body;
      const user = new (0, _User2.default)(req.session.user);

      if (!name || !email || !phone) {
        req.flash("info", "É necessário preencher todos os campos. Type: warning");
        return res.redirect("/");
      }

      const school = new (0, _School2.default)({
        name,
        email,
        phone,
        principalId: user.getId(),
      });

      await school.save();

      await _connection2.default.execute(`INSERT INTO SchoolsUsers (id, schoolId, userId, userRole) VALUES ('${IDgenerator()}', '${school.getId()}', '${user.getId()}', 3)`);

      req.flash("info", "Escola criada com sucesso! Type: success");
      return res.redirect(`/school/s/${school.getId()}`);
    });
  }

   Course() {
    this.router.get("/c/:id", coordinator, async (req, res) => {

      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`SELECT * FROM Courses WHERE id='${id}'`);

      if (!query[0]) {
        req.flash("info", "Este curso não existe. Type: error");
        return res.redirect("/");
      }  

      const course = new (0, _Course2.default)(query[0]);
      
      const query2 = await _connection2.default.execute(`SELECT * FROM Periods WHERE courseId='${id}'`);
      
      if (!query2) {
        req.flash("info", "Este curso não existe. Type: error");
        return res.redirect("/");
      }

      const periods = _optionalChain([query2, 'optionalAccess', _3 => _3.map, 'call', _4 => _4((period) => new (0, _Period2.default)(period))]);

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

      return res.render("school/course", {
        title: course.getName(),
        user,
        info,
        course,
        periods,
      });
    });

    this.router.post("/course/update/:id", coordinator, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      if (!id) {
        req.flash("info", "É necessário preencher todos os campos. Type: warning");
        return res.redirect("/");
      }

      const query = await _connection2.default.execute(`SELECT * FROM Courses WHERE id='${id}'`);
      if (!query[0]) {
        req.flash("info", "Este curso não existe. Type: error");
        return res.redirect("/");
      }

      const course = new (0, _Course2.default)(query[0]);

      const { name, gradeId, avatar, status, schoolId, coordinatorId } = req.body;

      if (name) course.setName(name);
      if (gradeId) course.setGradeId(gradeId);
      if (avatar) course.setAvatar(avatar);
      if (status) course.setStatus(status);
      if (schoolId) course.setSchoolId(schoolId);
      if (coordinatorId) course.setCoordinatorId(coordinatorId);

      await course.update();

      req.flash("info", "Curso atualizado com sucesso! Type: success");
      return res.redirect(`/school/c/${course.getId()}`);
    });

    this.router.post("/course/create", principal, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { name, to } = req.body;

      if (!name || !to) {
        req.flash("info", "É necessário preencher todos os campos! Type: warning");
        return res.redirect("/");
      }

      const query = await _connection2.default.execute(` SELECT * FROM Schools WHERE principalId='${user.getId()}'`);

      if (!query[0]) {
        req.flash( "info", "Você precisa ser um diretor para criar um curso. Type: error");
        return res.redirect("/");
      }

      const school = new (0, _School2.default)(query[0]);

      const course = new (0, _Course2.default)({
        name,
        schoolId: school.getId(),
        coordinatorId: to,
      });

      const grade = new (0, _Grade2.default)({
        schoolId: course.getSchoolId(),
      });

      await grade.save();

      course.setGradeId(grade.getId());
      await course.save();

      await _connection2.default.execute(`INSERT INTO SchoolsUsers (id, schoolId, userId, userRole) VALUES ('${IDgenerator()}', '${school.getId()}', '${to}', 4)`);

      req.flash("info", "Curso criado com sucesso! Type: success");
      return res.redirect(`/school/c/${course.getId()}`);
    });

    this.router.get("/course/delete/:id", principal, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      if (!id) {
        req.flash("info", "É necessário preencher todos os campos! Type: warning");
        return res.redirect("/");
      }

      const query = await _connection2.default.execute(`SELECT * FROM Schools WHERE principalId='${user.getId()}'`);

      if (!query[0]) {
        req.flash("info", "Você precisa ser um diretor para deletar um curso. Type: error");
        return res.redirect("/");
      }

      const school = new (0, _School2.default)(query[0]);

      const query2 = await _connection2.default.execute(`SELECT * FROM Courses WHERE id='${id}' AND schoolId='${school.getId()}'`);

      if (!query2[0]) {
        req.flash("info", "Este curso não existe! Type: error");
        return res.redirect("/school/s/" + school.getId());
      }

      const course = new (0, _Course2.default)(query2[0]);

      await course.delete();

      req.flash("info", "Curso deletado com sucesso! Type: success");
      return res.redirect("/school/s/" + school.getId());
    });
  }

   Period() {
    this.router.get("/p/:id", coordinator, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`SELECT * FROM Periods WHERE id='${id}'`);

      if (!query[0]) {
        req.flash("info", "Este período não existe. Type: error");
        return res.redirect("/");
      }

      const period = new (0, _Period2.default)(query[0]);

      const query2 = await _connection2.default.execute(`SELECT * FROM Classrooms WHERE periodId='${id}'`);
      if (!query2) {
        req.flash("info", "Essa turma não existe. Type: error");
        return res.redirect("/");
      }

      const classrooms = _optionalChain([query2, 'optionalAccess', _5 => _5.map, 'call', _6 => _6((classroom) => new (0, _Classroom2.default)(classroom))]);

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

      return res.render("school/period", {
        title: period.getName(),
        user,
        period,
        info,
        classrooms,
      });
    });

    this.router.post("/period/update/:id", principal, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      if (!id) {
        req.flash("info", "É necessário preencher todos os campos! Type: warning");
        return res.redirect("/");
      }

      const query = await _connection2.default.execute(`SELECT * FROM Periods WHERE id='${id}'`);
      if (!query[0]) {
        req.flash("info", "An error has ocurred.");
        return res.redirect("/");
      }

      const period = new (0, _Period2.default)(query[0]);

      const { name, status, schoolId, courseId, userId, startAt, endAt } = req.body;

      if (name) period.setName(name);
      if (status) period.setStatus(status);
      if (schoolId) period.setSchoolId(schoolId);
      if (courseId) period.setCourseId(courseId);
      if (userId) period.setUserId(userId);
      if (startAt) period.setStartAt(new Date(startAt));
      if (endAt) period.setEndAt(new Date(endAt));

      await period.update();

      req.flash("info", "Período atualizado com sucesso! Type: success");
      return res.redirect(`/school/p/${period.getId()}`);
    });

    this.router.post("/period/create", principal, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const { name, courseId } = req.body;
      if (!name || !courseId) {
        req.flash("info", "É necessário preencher todos os campos! Type: warning");
        return res.redirect("/");
      }

      const query = await _connection2.default.execute(`SELECT * FROM Schools WHERE principalId='${user.getId()}'`);
      if (!query[0]) {
        req.flash("info", "Você precisa ser um diretor para criar um período. Type: error");
        return res.redirect("/");
      }

      const query2 = await _connection2.default.execute(`SELECT * FROM Courses WHERE id='${courseId}'`);

      if (!query2[0]) {
        req.flash("info", "Este curso não existe. Type: error");
        return res.redirect("/");
      }

      const course = new (0, _Course2.default)(query2[0]);
      const school = new (0, _School2.default)(query[0]);
      const period = new (0, _Period2.default)({ name, courseId, schoolId: school.getId(), userId: course.getCoordinatorId() });

      await period.save();

      req.flash("info", "Período criado com sucesso! Type: success");
      return res.redirect(`/school/p/${period.getId()}`);
    });
  }

   Classroom() {
    this.router.get("/cl/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`SELECT * FROM Classrooms WHERE id='${id}'`);
      if (!query[0]) {
        req.flash("info", "Esta turma não existe. Type: error");
        return res.redirect("/");
      }

      const classroom = new (0, _Classroom2.default)(query[0]);

      const query2 = await _connection2.default.execute(`SELECT * FROM Disciplines WHERE classroomId='${id}'`);
      if (!query2) return res.redirect("/");

      const disciplines = _optionalChain([query2, 'optionalAccess', _7 => _7.map, 'call', _8 => _8((discipline) => new (0, _Discipline2.default)(discipline))]);

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

      return res.render("school/classroom", {
        title: classroom.getName(),
        user,
        classroom,
        disciplines,
        info,
      });
    });

    this.router.post("/cl/create", coordinator, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const { name, periodId } = req.body;
      if (!name || !periodId) {
        req.flash("info", "É necessário preencher todos os campos! Type: warning");
        return res.redirect("/");
      }

      const query = await _connection2.default.execute(`SELECT * FROM Courses WHERE coordinatorId='${user.getId()}'`);
      if (!query[0]) {
        req.flash("info", "Você precisa ser um coordenador para criar uma turma. Type: error");
        return res.redirect("/");
      }

      const course = new (0, _Course2.default)(query[0]);

      const classroom = new (0, _Classroom2.default)({
        name,
        periodId,
        courseId: course.getId(),
      });

      const save = await classroom.save();

      if (!save) {
        req.flash("info", "Erro ao criar turma. Type: error");
        return res.redirect("/");
      }

      req.flash("info", "Turma criada com sucesso! Type: success");
      return res.redirect(`/school/cl/${classroom.getId()}`);
    });
  }

   Discipline() {
    this.router.get("/d/:id", async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { id } = req.params;

      const query = await _connection2.default.execute(`SELECT * FROM Disciplines WHERE id='${id}'`);
      if (!query[0]) {
        req.flash("info", "Esta disciplina não existe. Type: error");
        return res.redirect("/");
      }

      const discipline = new (0, _Discipline2.default)(query[0]);

      const query3 = await _connection2.default.execute(`
        SELECT Users.id, Users.username, Users.name, Users.email, Users.avatar, DisciplinesStudents.disciplineId FROM DisciplinesStudents 
        INNER JOIN Users ON DisciplinesStudents.userId=Users.id
        WHERE DisciplinesStudents.disciplineId='${discipline.getId()}'
        ORDER BY Users.name ASC
      `);

      const students = query3;

      const query4 = await _connection2.default.execute(`
        SELECT Users.id, Users.username, Users.name, Users.email, Users.avatar, DisciplinesTeachers.disciplineId FROM DisciplinesTeachers
        INNER JOIN Users ON DisciplinesTeachers.userId=Users.id
        WHERE DisciplinesTeachers.disciplineId='${discipline.getId()}'
        ORDER BY Users.name ASC
      `);

      const teachers = query4;

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

      return res.render("school/discipline", {
        title: discipline.getName(),
        user,
        discipline,
        students,
        teachers,
        info,
      });
    });

    this.router.post("/discipline/update/:id", coordinator, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);

      const { id } = req.params;
      if (!id) {
        req.flash("info", "É necessário preencher todos os campos! Type: warning");
        return res.redirect("/");
      }

      const query = await _connection2.default.execute(`SELECT * FROM Disciplines WHERE id='${id}'`);
      if (!query[0]) {
        req.flash("info", "Esta disciplina não existe. Type: error");
        return res.redirect("/");
      }

      const discipline = new (0, _Discipline2.default)(query[0]);

      const {
        name,
        courseId,
        periodId,
        classroomId,
        status,
        teachers,
        students,
        classes,
        activities,
        works,
        resumes,
        books,
        evaluations,
      } = req.body;

      if (name) discipline.setName(name);
      if (status) discipline.setStatus(status);
      if (classroomId) discipline.setClassroomId(classroomId);
      if (periodId) discipline.setPeriodId(periodId);
      if (courseId) discipline.setCourseId(courseId);
      if (teachers) discipline.setTeachers(teachers);
      if (students) discipline.setStudents(students);
      if (classes) discipline.setClasses(classes);
      if (activities) discipline.setActivities(activities);
      if (works) discipline.setWorks(works);
      if (resumes) discipline.setResumes(resumes);
      if (books) discipline.setBooks(books);
      if (evaluations) discipline.setEvaluations(evaluations);

      await discipline.update();

      req.flash("info", "Disciplina atualizada com sucesso! Type: success");
      return res.redirect(`/school/d/${discipline.getId()}`);
    });

    this.router.post("/d/create", coordinator, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { name, teachers, classroomId, periodId, workload } = req.body;

      if (!name || !classroomId || !periodId || !teachers || !workload) {
        req.flash("info", "É necessário preencher todos os campos! Type: warning");
        return res.redirect("/");
      }

      const query = await _connection2.default.execute(`SELECT * FROM Courses WHERE coordinatorId='${user.getId()}'`);
      if (!query[0]) {
        req.flash("info", "Você precisa ser um coordenador para criar uma disciplina. Type: error");
        return res.redirect("/");
      }

      const course = new (0, _Course2.default)(query[0]);

      const discipline = new (0, _Discipline2.default)({
        name,
        classroomId,
        periodId,
        courseId: course.getId(),
        teachers: teachers.map((teacher) => new (0, _Teacher2.default)({ userId: teacher })),
        workload,
      });

      teachers.forEach(async (teacher) => {
        await _connection2.default.execute(`INSERT INTO SchoolsUsers (id, schoolId, userId, userRole) VALUES ('${IDgenerator()}', '${course.getSchoolId()}', '${teacher}', 2)`);
      });

      try {
        await discipline.save();
      } catch (err) {
        req.flash("info", "Erro ao criar disciplina. Type: error");
        return res.redirect("/school/cl/" + classroomId);
      }

      req.flash("info", "Disciplina criada com sucesso! Type: success");
      return res.redirect(`/school/d/${discipline.getId()}`);
    });

    this.router.post("/d/create/students", coordinator, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { students, disciplineId } = req.body;

      if (!students || !disciplineId) {
        req.flash("info", "É necessário preencher todos os campos! Type: warning");
        return res.redirect(`/school/d/${disciplineId}`);
      }

      const query = await _connection2.default.execute(`SELECT * FROM Disciplines WHERE id='${disciplineId}'`);
      if (!query[0]) {
        req.flash("info", "Esta disciplina não existe. Type: error");
        return res.redirect(`/school/d/${disciplineId}`);
      }

      const discipline = new (0, _Discipline2.default)(query[0]);

      discipline.setStudents(students.map((student) => new (0, _Student.Student)({ userId: student })));

      students.forEach(async (student) => {
        await _connection2.default.execute(`INSERT INTO DisciplinesStudents (id, userId, disciplineId) VALUES ('${IDgenerator()}', '${student}', '${disciplineId}')`);

        const email = new (0, _Email.Email)({
          toId: student,
          fromId: user.getId(),
          subject: "Você foi adicionado a uma disciplina",
          content: `📚 Olá, caro estudante! Você foi matriculado(a) na disciplina <strong>${discipline.getName().toLocaleLowerCase()}</strong>, pela coordenação do seu curso! Prepare-se para uma jornada de descobertas e aprendizado! 🚀📖 <br><br> -- <br> Está é uma mensagem automática!`,
        });

        await email.save();

        const course = await _connection2.default.execute(`SELECT * FROM Courses WHERE id='${discipline.getCourseId()}'`);

        await _connection2.default.execute(`INSERT INTO SchoolsUsers (id, schoolId, userId, userRole) VALUES ('${IDgenerator()}', '${course[0].schoolId}', '${student}', 1)`);
      });

      await discipline.update();

      req.flash("info", "Estudantes adicionados com sucesso! Type: success");
      return res.redirect(`/school/d/${discipline.getId()}`);
    });

    this.router.post("/d/create/class", teacher, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { title, content, quantity, date, disciplineId } = req.body;

      if (!title || !content || !quantity || !date || !disciplineId) {
        req.flash("info", "É necessário preencher todos os campos! Type: warning");
        return res.redirect(`/school/d/${disciplineId}`);
      }

      const query = await _connection2.default.execute(`SELECT * FROM Disciplines WHERE id='${disciplineId}'`);

      if (!query[0]) {
        req.flash("info", "Esta disciplina não existe. Type: error");
        return res.redirect(`/school/d/${disciplineId}`);
      }

      const discipline = new (0, _Discipline2.default)(query[0]);

      const class_ = new (0, _Class2.default)({
        title,
        content,
        quantity,
        date,
        teacherId: user.getId(),
      });

      discipline.addClass(class_);
      await discipline.update();

      req.flash("info", "Aula adicionada com sucesso! Type: success");
      return res.redirect(`/school/d/${discipline.getId()}`);
    });

    this.router.get("/d/delete/class/:d/:id", teacher, async (req, res) => {
      const { id, d } = req.params;

      if (!id) {
        req.flash("info", "É necessário preencher todos os campos! Type: warning");
        return res.redirect(`/school/d/${d}`);
      }

      const query = await _connection2.default.execute(`SELECT * FROM Disciplines WHERE id='${d}'`);

      if (!query[0]) {
        req.flash("info", "Esta disciplina não existe. Type: error");
        return res.redirect(`/school/d/${d}`);
      }

      const discipline = new (0, _Discipline2.default)(query[0]);
      discipline.removeClassById(id);

      await discipline.update();

      req.flash("info", "Aula deletada com sucesso! Type: success");
      return res.redirect(`/school/d/${discipline.getId()}`);
    });

    this.router.post("/d/update/frequency", teacher, async (req, res) => {
      if (!req.session.user) {
        req.flash("info", "Você precisa estar logado para acessar esta página! Type: warning");
        return res.redirect("/signin");
      }

      const user = new (0, _User2.default)(req.session.user);
      const { disciplineId, frequency } = req.body;

      if (!disciplineId || !frequency) {
        req.flash("info", "É necessário preencher todos os campos! Type: warning");
        return res.redirect(`/school/d/${disciplineId}`);
      }

      const query = await _connection2.default.execute(`SELECT * FROM Disciplines WHERE id='${disciplineId}'`);

      if (!query[0]) {
        req.flash("info", "Esta disciplina não existe. Type: error");
        return res.redirect(`/school/d/${disciplineId}`);
      }

      const discipline = new (0, _Discipline2.default)(query[0]);
      const students = discipline.getStudents().map((s) => {
        const student = new (0, _Student.Student)(s);
        const frequencies = frequency[student.getuserId()] ? Object.keys(frequency[student.getuserId()]) : [];
    
        const studentFrequencies = _optionalChain([student, 'access', _9 => _9.getFrequency, 'call', _10 => _10(), 'optionalAccess', _11 => _11.map, 'call', _12 => _12((f) => {
          if (frequencies.includes(f.classId)) f.status = true;
          else f.status = false;
          return f;
        })]);

        student.setFrequencyList(studentFrequencies);    
        return student;
      });
      
      discipline.setStudents(students);
      await discipline.update();  

      req.flash("info", "Frequência atualizada com sucesso! Type: success");
      return res.redirect(`/school/d/${disciplineId}`);
    });
  }
}

exports. default = new SchoolRoutes().router;
