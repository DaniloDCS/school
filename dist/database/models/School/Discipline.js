"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _functions = require('../../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );
var _connection = require('../../connection'); var _connection2 = _interopRequireDefault(_connection);
var _Teacher = require('./Teacher'); var _Teacher2 = _interopRequireDefault(_Teacher);
var _Student = require('./Student');
var _Class = require('./Class'); var _Class2 = _interopRequireDefault(_Class);
var _Activity = require('./Activity'); var _Activity2 = _interopRequireDefault(_Activity);
var _Work = require('./Work'); var _Work2 = _interopRequireDefault(_Work);
var _Resume = require('./Resume'); var _Resume2 = _interopRequireDefault(_Resume);
var _Book = require('./Book'); var _Book2 = _interopRequireDefault(_Book);
var _Evaluation = require('./Evaluation'); var _Evaluation2 = _interopRequireDefault(_Evaluation);
var _Email = require('../Email');





var _History = require('./History');
var _Period = require('./Period'); var _Period2 = _interopRequireDefault(_Period);























class Discipline  {
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    name,
    courseId = "",
    periodId = "",
    classroomId = "",
    status = "cursando",
    teachers = [],
    students = [],
    classes = [],
    activities = [],
    works = [],
    resumes = [],
    books = [],
    evaluations = [],
    workload = 0,
    workloadCompleted = 0,
    workloadPercent = 0,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Discipline.prototype.__init.call(this);Discipline.prototype.__init2.call(this);Discipline.prototype.__init3.call(this);Discipline.prototype.__init4.call(this);Discipline.prototype.__init5.call(this);Discipline.prototype.__init6.call(this);Discipline.prototype.__init7.call(this);Discipline.prototype.__init8.call(this);Discipline.prototype.__init9.call(this);Discipline.prototype.__init10.call(this);Discipline.prototype.__init11.call(this);Discipline.prototype.__init12.call(this);Discipline.prototype.__init13.call(this);Discipline.prototype.__init14.call(this);Discipline.prototype.__init15.call(this);Discipline.prototype.__init16.call(this);Discipline.prototype.__init17.call(this);Discipline.prototype.__init18.call(this);Discipline.prototype.__init19.call(this);
    this.id = id;
    this.name = name;
    this.courseId = courseId;
    this.periodId = periodId;
    this.classroomId = classroomId;
    this.status = status;
    this.teachers = typeof teachers == "string" ? JSON.parse(String(teachers)) : teachers;
    this.students = typeof students == "string" ? JSON.parse(String(students)) : students;
    this.classes = typeof classes == "string" ? JSON.parse(String(classes)) : classes;
    this.activities = typeof activities == "string" ? JSON.parse(String(activities)) : activities; this.works = typeof works == "string" ? JSON.parse(String(works)) : works;
    this.resumes = typeof resumes == "string" ? JSON.parse(String(resumes)) : resumes;
    this.books = typeof books == "string" ? JSON.parse(String(books)) : books;
    this.evaluations = typeof evaluations == "string" ? JSON.parse(String(evaluations)) : evaluations;
    this.workload = workload;
    this.workloadCompleted = workloadCompleted;
    this.workloadPercent = workloadPercent;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init() {this.getId = () => this.id}
   __init2() {this.getName = () => this.name}
   __init3() {this.getCourseId = () => this.courseId}
   __init4() {this.getPeriodId = () => this.periodId}
   __init5() {this.getClassroomId = () => this.classroomId}
   __init6() {this.getStatus = () => this.status}
   __init7() {this.getTeachers = () => this.teachers}
   __init8() {this.getStudents = () => this.students}
   __init9() {this.getClasses = () => this.classes}
   __init10() {this.getActivities = () => this.activities}
   __init11() {this.getWorks = () => this.works}
   __init12() {this.getResumes = () => this.resumes}
   __init13() {this.getBooks = () => this.books}
   __init14() {this.getEvaluations = () => this.evaluations}
   __init15() {this.getWorkload = () => this.workload}
   __init16() {this.getWorkloadCompleted = () => this.workloadCompleted}
   __init17() {this.getWorkloadPercent = () => this.workloadPercent}
   __init18() {this.getCreatedAt = () => this.createdAt}
   __init19() {this.getUpdatedAt = () => this.updatedAt}

   setName(name) {
    this.name = name;
    this.setUpdatedAt(new Date());
  }

   setCourseId(courseId) {
    this.courseId = courseId;
    this.setUpdatedAt(new Date());
  }

   setPeriodId(periodId) {
    this.periodId = periodId;
    this.setUpdatedAt(new Date());
  }

   setClassroomId(classroomId) {
    this.classroomId = classroomId;
    this.setUpdatedAt(new Date());
  }

   setStatus(status) {
    this.status = status;
    this.setUpdatedAt(new Date());
  }

   setTeachers(teachers) {
    this.teachers = teachers;
    this.setUpdatedAt(new Date());
  }

   addTeacher(teacher) {
    const teachers = this.getTeachers();
    teachers.push(teacher);
    this.setTeachers(teachers);
    this.setUpdatedAt(new Date());
  }

   removeTeacherById(id) {
    const teachers = this.getTeachers();
    const teacher = _optionalChain([teachers, 'optionalAccess', _ => _.find, 'call', _2 => _2(
      (teacher) => new (0, _Teacher2.default)(teacher).getId() === id
    )]);
    if (teacher) _optionalChain([teachers, 'optionalAccess', _3 => _3.splice, 'call', _4 => _4(teachers.indexOf(teacher), 1)]);
    this.setTeachers(teachers);
    this.setUpdatedAt(new Date());
  }

   updateTeacherById(id, teacher) {
    const teachers = this.getTeachers();
    const index = _optionalChain([teachers, 'optionalAccess', _5 => _5.findIndex, 'call', _6 => _6(
      (teacher) => new (0, _Teacher2.default)(teacher).getId() === id
    )]);
    if (index >= 0) teachers[index] = teacher;
    this.setTeachers(teachers);
    this.setUpdatedAt(new Date());
  }

   setStudents(students) {
    this.students = students;

    _optionalChain([this, 'access', _7 => _7.students, 'optionalAccess', _8 => _8.forEach, 'call', _9 => _9(async (student) => {
      const query = await _connection2.default.execute(
        `SELECT * FROM History WHERE userId = '${student.userId}'`
      );

      let history = query[0];

      // verifica se tem o historico
      if (query[0] === undefined) {
        history = new (0, _History.History)({
          userId: student.userId,
        });
        await history.save();
      } else {
        history = new (0, _History.History)(query[0]);
      }

      // veriifca se tem o periodo no historico

      let historicPeriod = history
        .getPeriods()
        .find((period) => period.periodId === this.periodId);

      // se nao tiver o periodo no historico
      if (!historicPeriod) {
        const query = await _connection2.default.execute(
          `SELECT * FROM Periods WHERE id = '${this.periodId}'`
        );

        const p = new (0, _Period2.default)(query[0]);

        history.addPeriod(
          new (0, _History.Period)({
            periodId: p.getId(),
            name: p.getName(),
            disciplines: [
              new (0, _History.Discipline)({
                name: this.name,
                teachers: this.teachers,
              }),
            ],
          })
        );
      } else {
        const period = new (0, _History.Period)(historicPeriod);
        // verifica se tem a disciplina no periodo

        let historicDiscipline = period.disciplines.find(
          (discipline) => discipline.name === this.name
        );

        if (!historicDiscipline) {
          period.addDiscipline(
            new (0, _History.Discipline)({
              name: this.name,
              teachers: this.teachers,
            })
          );

          history.updatePeriod(period);
        }
      }

      history.update();
    })]);
  }

   addStudents(students) {
    const studentss = this.getStudents();
    studentss.push(students);
    this.setStudents(studentss);
    this.setUpdatedAt(new Date());
  }

   removestudentsById(id) {
    const studentss = this.getStudents();
    const students = _optionalChain([studentss, 'optionalAccess', _10 => _10.find, 'call', _11 => _11(
      (students) => new (0, _Student.Student)(students).getId() === id
    )]);
    if (students) _optionalChain([studentss, 'optionalAccess', _12 => _12.splice, 'call', _13 => _13(studentss.indexOf(students), 1)]);
    this.setStudents(studentss);
    this.setUpdatedAt(new Date());
  }

   updatestudentsById(id, students) {
    const studentss = this.getStudents();
    const index = _optionalChain([studentss, 'optionalAccess', _14 => _14.findIndex, 'call', _15 => _15(
      (students) => new (0, _Student.Student)(students).getId() === id
    )]);
    if (index >= 0) studentss[index] = students;
    this.setStudents(studentss);
    this.setUpdatedAt(new Date());
  }

   setClasses(classes) {
    this.classes = classes;
    this.setUpdatedAt(new Date());
  }

   addClass(class_) {
    const _class = new (0, _Class2.default)(class_);
    this.classes.push(_class);

    this.classes.sort( (a, b) => new Date(new (0, _Class2.default)(b).getDate()).getTime() - new Date(new (0, _Class2.default)(a).getDate()).getTime() );

    const frequency = new (0, _Student.Frequency)({
      date: _class.getDate(),
      status: true,
      classId: _class.getId(),
    });

    this.students = _optionalChain([this, 'access', _16 => _16.students, 'optionalAccess', _17 => _17.map, 'call', _18 => _18((user) => {
      const student = new (0, _Student.Student)(user);
      student.setFrequency(frequency, student, this, _class);
      return student;
    })]);

    this.setWorkloadCompleted(Number(this.getWorkloadCompleted()) + Number(_class.getQuantity()));
    this.setWorkloadPercent((Number(this.getWorkloadCompleted()) / Number(this.getWorkload())) * 100);

    this.setUpdatedAt(new Date());
  }

   removeClassById(id) {
    const classes = this.getClasses();
    const class_ = _optionalChain([classes, 'optionalAccess', _19 => _19.find, 'call', _20 => _20(
      (class_) => new (0, _Class2.default)(class_).getId() === id
    )]);
    if (class_) _optionalChain([classes, 'optionalAccess', _21 => _21.splice, 'call', _22 => _22(classes.indexOf(class_), 1)]);
    this.setClasses(classes);

    const students = _optionalChain([this, 'access', _23 => _23.getStudents, 'call', _24 => _24(), 'optionalAccess', _25 => _25.map, 'call', _26 => _26((student) => {
      const _student = new (0, _Student.Student)(student);
      _student.frequency = _student.frequency.filter(
        (frequency) => frequency.classId !== id
      );
      return _student;
    })]);

    this.setStudents(students);
    this.setUpdatedAt(new Date());
  }

   updateClassById(id, class_) {
    const classes = this.getClasses();
    const index = _optionalChain([classes, 'optionalAccess', _27 => _27.findIndex, 'call', _28 => _28(
      (class_) => new (0, _Class2.default)(class_).getId() === id
    )]);
    if (index >= 0) classes[index] = class_;
    this.setClasses(classes);
    this.setUpdatedAt(new Date());
  }

   setActivities(activities) {
    this.activities = activities;
    this.setUpdatedAt(new Date());
  }

   addActivity(activity) {
    const activities = this.getActivities();
    activities.push(activity);
    this.setActivities(activities);
    this.setUpdatedAt(new Date());
  }

   removeActivityById(id) {
    const activities = this.getActivities();
    const activity = _optionalChain([activities, 'optionalAccess', _29 => _29.find, 'call', _30 => _30(
      (activity) => new (0, _Activity2.default)(activity).getId() === id
    )]);
    if (activity) _optionalChain([activities, 'optionalAccess', _31 => _31.splice, 'call', _32 => _32(activities.indexOf(activity), 1)]);
    this.setActivities(activities);
    this.setUpdatedAt(new Date());
  }

   updateActivityById(id, activity) {
    const activities = this.getActivities();
    const index = _optionalChain([activities, 'optionalAccess', _33 => _33.findIndex, 'call', _34 => _34(
      (activity) => new (0, _Activity2.default)(activity).getId() === id
    )]);
    if (index >= 0) activities[index] = activity;
    this.setActivities(activities);
    this.setUpdatedAt(new Date());
  }

   setWorks(works) {
    this.works = works;
    this.setUpdatedAt(new Date());
  }

   addWork(work) {
    const works = this.getWorks();
    works.push(work);
    this.setWorks(works);
    this.setUpdatedAt(new Date());
  }

   removeWorkById(id) {
    const works = this.getWorks();
    const work = _optionalChain([works, 'optionalAccess', _35 => _35.find, 'call', _36 => _36((work) => new (0, _Work2.default)(work).getId() === id)]);
    if (work) _optionalChain([works, 'optionalAccess', _37 => _37.splice, 'call', _38 => _38(works.indexOf(work), 1)]);
    this.setWorks(works);
    this.setUpdatedAt(new Date());
  }

   updateWorkById(id, work) {
    const works = this.getWorks();
    const index = _optionalChain([works, 'optionalAccess', _39 => _39.findIndex, 'call', _40 => _40(
      (work) => new (0, _Work2.default)(work).getId() === id
    )]);
    if (index >= 0) works[index] = work;
    this.setWorks(works);
    this.setUpdatedAt(new Date());
  }

   setResumes(resumes) {
    this.resumes = resumes;
    this.setUpdatedAt(new Date());
  }

   addResume(resume) {
    const resumes = this.getResumes();
    resumes.push(resume);
    this.setResumes(resumes);
    this.setUpdatedAt(new Date());
  }

   removeResumeById(id) {
    const resumes = this.getResumes();
    const resume = _optionalChain([resumes, 'optionalAccess', _41 => _41.find, 'call', _42 => _42(
      (resume) => new (0, _Resume2.default)(resume).getId() === id
    )]);
    if (resume) _optionalChain([resumes, 'optionalAccess', _43 => _43.splice, 'call', _44 => _44(resumes.indexOf(resume), 1)]);
    this.setResumes(resumes);
    this.setUpdatedAt(new Date());
  }

   updateResumeById(id, resume) {
    const resumes = this.getResumes();
    const index = _optionalChain([resumes, 'optionalAccess', _45 => _45.findIndex, 'call', _46 => _46(
      (resume) => new (0, _Resume2.default)(resume).getId() === id
    )]);
    if (index >= 0) resumes[index] = resume;
    this.setResumes(resumes);
    this.setUpdatedAt(new Date());
  }

   setBooks(books) {
    this.books = books;
    this.setUpdatedAt(new Date());
  }

   addBook(book) {
    const books = this.getBooks();
    books.push(book);
    this.setBooks(books);
    this.setUpdatedAt(new Date());
  }

   removeBookById(id) {
    const books = this.getBooks();
    const book = _optionalChain([books, 'optionalAccess', _47 => _47.find, 'call', _48 => _48((book) => new (0, _Book2.default)(book).getId() === id)]);
    if (book) _optionalChain([books, 'optionalAccess', _49 => _49.splice, 'call', _50 => _50(books.indexOf(book), 1)]);
    this.setBooks(books);
    this.setUpdatedAt(new Date());
  }

   updateBookById(id, book) {
    const books = this.getBooks();
    const index = _optionalChain([books, 'optionalAccess', _51 => _51.findIndex, 'call', _52 => _52(
      (book) => new (0, _Book2.default)(book).getId() === id
    )]);
    if (index >= 0) books[index] = book;
    this.setBooks(books);
    this.setUpdatedAt(new Date());
  }

   setEvaluations(evaluations) {
    this.evaluations = evaluations;
    this.setUpdatedAt(new Date());
  }

   addEvaluation(evaluation) {
    const evaluations = this.getEvaluations();
    evaluations.push(evaluation);
    this.setEvaluations(evaluations);
    this.setUpdatedAt(new Date());
  }

   removeEvaluationById(id) {
    const evaluations = this.getEvaluations();
    const evaluation = _optionalChain([evaluations, 'optionalAccess', _53 => _53.find, 'call', _54 => _54(
      (evaluation) => new (0, _Evaluation2.default)(evaluation).getId() === id
    )]);
    if (evaluation) _optionalChain([evaluations, 'optionalAccess', _55 => _55.splice, 'call', _56 => _56(evaluations.indexOf(evaluation), 1)]);
    this.setEvaluations(evaluations);
    this.setUpdatedAt(new Date());
  }

   updateEvaluationById(id, evaluation) {
    const evaluations = this.getEvaluations();
    const index = _optionalChain([evaluations, 'optionalAccess', _57 => _57.findIndex, 'call', _58 => _58(
      (evaluation) => new (0, _Evaluation2.default)(evaluation).getId() === id
    )]);
    if (index >= 0) evaluations[index] = evaluation;
    this.setEvaluations(evaluations);
    this.setUpdatedAt(new Date());
  }

   setWorkload(workload) {
    this.workload = workload;
    this.setUpdatedAt(new Date());
  }

   setWorkloadCompleted(workloadCompleted) {
    this.workloadCompleted = workloadCompleted;
    this.setUpdatedAt(new Date());
  }

   setWorkloadPercent(workloadPercent) {
    this.workloadPercent = workloadPercent;
    this.setUpdatedAt(new Date());
  }

   setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }

   async save() {
    await _connection2.default.execute(
      `INSERT INTO Disciplines (id, name, status, courseId, periodId, classroomId, teachers, students, classes, activities, works, resumes, books, evaluations, createdAt, updatedAt) 
      VALUES ('${this.id}', '${this.name}', '${this.status}', '${
        this.courseId
      }', '${this.periodId}', '${this.classroomId}', '${JSON.stringify(
        this.teachers
      )}', '${JSON.stringify(this.students)}', '${JSON.stringify(
        this.classes
      )}', '${JSON.stringify(this.activities)}', '${JSON.stringify(
        this.works
      )}', '${JSON.stringify(this.resumes)}', '${JSON.stringify(
        this.books
      )}', '${JSON.stringify(this.evaluations)}', '${this.createdAt}', '${
        this.updatedAt
      }')`
    );

    _optionalChain([this, 'access', _59 => _59.teachers, 'optionalAccess', _60 => _60.forEach, 'call', _61 => _61(async (teacher) => {
      const course = await _connection2.default.execute(
        `SELECT * FROM Courses WHERE id = '${this.courseId}'`
      );
      await _connection2.default.execute(
        `INSERT INTO DisciplinesTeachers (id, disciplineId, userId) VALUES ('${IDgenerator()}', '${
          this.id
        }', '${teacher.userId}')`
      );
      const teach = await _connection2.default.execute(
        `SELECT * FROM Users WHERE id = '${teacher.userId}'`
      );

      const email = new (0, _Email.Email)({
        subject:
          "Você foi adicionado a uma disciplina! Inspire nossos estudantes! 🚀📖",
        content: `👨‍🏫 Hey, ${
          teach[0].name.split(" ")[0]
        }! Há uma nova disciplina cadastrada para você <strong>${this.name.toUpperCase()}</strong> no curso de <strong>${course[0].name.toUpperCase()}</strong>. Prepare-se para compartilhar conhecimento e inspirar nossos estudantes nessa disciplina incrível! 🚀📖 Que essa jornada seja repleta de descobertas e aprendizado! <br> <a href="/school/d/${
          this.id
        }">Clique aqui para acessar!</a>`,
        toId: teacher.userId,
        fromId: course[0].coordinatorId,
      });

      await email.save();
    })]);
  }

   async update() {
    await _connection2.default.execute(
      `UPDATE Disciplines SET name = '${this.name}', status = '${
        this.status
      }', courseId = '${this.courseId}', periodId = '${
        this.periodId
      }', classroomId = '${this.classroomId}', teachers = '${JSON.stringify(
        this.teachers
      )}', students = '${JSON.stringify(
        this.students
      )}', classes = '${JSON.stringify(
        this.classes
      )}', activities = '${JSON.stringify(
        this.activities
      )}', works = '${JSON.stringify(this.works)}', resumes = '${JSON.stringify(
        this.resumes
      )}', books = '${JSON.stringify(
        this.books
      )}', evaluations = '${JSON.stringify(this.evaluations)}', updatedAt = '${
        this.updatedAt
      }' WHERE id = '${this.id}'`
    );
  }

   async delete() {
    await _connection2.default.execute(`DELETE FROM Disciplines WHERE id = "${this.id}"`);
  }
}

exports. default = Discipline;
