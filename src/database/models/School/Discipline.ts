import functions from "../../../assets/functions";
const { IDgenerator } = functions();
import db from "../../connection";
import Teacher from "./Teacher";
import { Student, Bulletin, Frequency } from "./Student";
import Class from "./Class";
import Activity from "./Activity";
import Work from "./Work";
import Resume from "./Resume";
import Book from "./Book";
import Evaluation from "./Evaluation";
import { Email } from "../Email";
import {
  History,
  Bulletin as BulletinHistory,
  Period as PeriodHistory,
  Discipline as DisciplineHistory,
} from "./History";
import Period from "./Period";

interface IDiscipline {
  id?: string;
  name: string;
  status?: string;
  courseId?: string;
  periodId?: string;
  classroomId?: string;
  teachers?: Teacher[];
  students?: Student[];
  classes?: Class[];
  activities?: Activity[];
  works?: Work[];
  resumes?: Resume[];
  books?: Book[];
  evaluations?: Evaluation[];
  workload: number;
  workloadCompleted?: number;
  workloadPercent?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Discipline implements IDiscipline {
  id: string;
  name: string;
  status: string;
  courseId: string;
  periodId: string;
  classroomId: string;
  teachers: Teacher[];
  students: Student[];
  classes: Class[];
  activities: Activity[];
  works: Work[];
  resumes: Resume[];
  books: Book[];
  evaluations: Evaluation[];
  workload: number;
  workloadCompleted: number;
  workloadPercent: number;
  createdAt: Date;
  updatedAt: Date;

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
  }: IDiscipline) {
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

  public getId = (): string => this.id;
  public getName = (): string => this.name;
  public getCourseId = (): string => this.courseId;
  public getPeriodId = (): string => this.periodId;
  public getClassroomId = (): string => this.classroomId;
  public getStatus = (): string => this.status;
  public getTeachers = (): Teacher[] => this.teachers;
  public getStudents = (): Student[] => this.students;
  public getClasses = (): Class[] => this.classes;
  public getActivities = (): Activity[] => this.activities;
  public getWorks = (): Work[] => this.works;
  public getResumes = (): Resume[] => this.resumes;
  public getBooks = (): Book[] => this.books;
  public getEvaluations = (): Evaluation[] => this.evaluations;
  public getWorkload = (): number => this.workload;
  public getWorkloadCompleted = (): number => this.workloadCompleted;
  public getWorkloadPercent = (): number => this.workloadPercent;
  public getCreatedAt = (): Date => this.createdAt;
  public getUpdatedAt = (): Date => this.updatedAt;

  public setName(name: string): void {
    this.name = name;
    this.setUpdatedAt(new Date());
  }

  public setCourseId(courseId: string): void {
    this.courseId = courseId;
    this.setUpdatedAt(new Date());
  }

  public setPeriodId(periodId: string): void {
    this.periodId = periodId;
    this.setUpdatedAt(new Date());
  }

  public setClassroomId(classroomId: string): void {
    this.classroomId = classroomId;
    this.setUpdatedAt(new Date());
  }

  public setStatus(status: string): void {
    this.status = status;
    this.setUpdatedAt(new Date());
  }

  public setTeachers(teachers: Teacher[]): void {
    this.teachers = teachers;
    this.setUpdatedAt(new Date());
  }

  public addTeacher(teacher: Teacher): void {
    const teachers = this.getTeachers();
    teachers.push(teacher);
    this.setTeachers(teachers);
    this.setUpdatedAt(new Date());
  }

  public removeTeacherById(id: string): void {
    const teachers = this.getTeachers();
    const teacher = teachers?.find(
      (teacher: Teacher) => new Teacher(teacher).getId() === id
    );
    if (teacher) teachers?.splice(teachers.indexOf(teacher), 1);
    this.setTeachers(teachers);
    this.setUpdatedAt(new Date());
  }

  public updateTeacherById(id: string, teacher: Teacher): void {
    const teachers = this.getTeachers();
    const index = teachers?.findIndex(
      (teacher: Teacher) => new Teacher(teacher).getId() === id
    );
    if (index >= 0) teachers[index] = teacher;
    this.setTeachers(teachers);
    this.setUpdatedAt(new Date());
  }

  public setStudents(students: Student[]) {
    this.students = students;

    this.students?.forEach(async (student: Student) => {
      const query = await db.execute(
        `SELECT * FROM History WHERE userId = '${student.userId}'`
      );

      let history = query[0];

      // verifica se tem o historico
      if (query[0] === undefined) {
        history = new History({
          userId: student.userId,
        });
        await history.save();
      } else {
        history = new History(query[0]);
      }

      // veriifca se tem o periodo no historico

      let historicPeriod = history
        .getPeriods()
        .find((period: PeriodHistory) => period.periodId === this.periodId);

      // se nao tiver o periodo no historico
      if (!historicPeriod) {
        const query = await db.execute(
          `SELECT * FROM Periods WHERE id = '${this.periodId}'`
        );

        const p = new Period(query[0]);

        history.addPeriod(
          new PeriodHistory({
            periodId: p.getId(),
            name: p.getName(),
            disciplines: [
              new DisciplineHistory({
                name: this.name,
                teachers: this.teachers,
              }),
            ],
          })
        );
      } else {
        const period = new PeriodHistory(historicPeriod);
        // verifica se tem a disciplina no periodo

        let historicDiscipline = period.disciplines.find(
          (discipline: DisciplineHistory) => discipline.name === this.name
        );

        if (!historicDiscipline) {
          period.addDiscipline(
            new DisciplineHistory({
              name: this.name,
              teachers: this.teachers,
            })
          );

          history.updatePeriod(period);
        }
      }

      history.update();
    });
  }

  public addStudents(students: Student): void {
    const studentss = this.getStudents();
    studentss.push(students);
    this.setStudents(studentss);
    this.setUpdatedAt(new Date());
  }

  public removestudentsById(id: string): void {
    const studentss = this.getStudents();
    const students = studentss?.find(
      (students: Student) => new Student(students).getId() === id
    );
    if (students) studentss?.splice(studentss.indexOf(students), 1);
    this.setStudents(studentss);
    this.setUpdatedAt(new Date());
  }

  public updatestudentsById(id: string, students: Student): void {
    const studentss = this.getStudents();
    const index = studentss?.findIndex(
      (students: Student) => new Student(students).getId() === id
    );
    if (index >= 0) studentss[index] = students;
    this.setStudents(studentss);
    this.setUpdatedAt(new Date());
  }

  public setClasses(classes: Class[]): void {
    this.classes = classes;
    this.setUpdatedAt(new Date());
  }

  public addClass(class_: Class) {
    const _class = new Class(class_);
    this.classes.push(_class);

    this.classes.sort( (a: Class, b: Class) => new Date(new Class(b).getDate()).getTime() - new Date(new Class(a).getDate()).getTime() );

    const frequency = new Frequency({
      date: _class.getDate(),
      status: true,
      classId: _class.getId(),
    });

    this.students = this.students?.map((user: Student) => {
      const student = new Student(user);
      student.setFrequency(frequency, student, this, _class);
      return student;
    });

    this.setWorkloadCompleted(Number(this.getWorkloadCompleted()) + Number(_class.getQuantity()));
    this.setWorkloadPercent((Number(this.getWorkloadCompleted()) / Number(this.getWorkload())) * 100);

    this.setUpdatedAt(new Date());
  }

  public removeClassById(id: string): void {
    const classes = this.getClasses();
    const class_ = classes?.find(
      (class_: Class) => new Class(class_).getId() === id
    );
    if (class_) classes?.splice(classes.indexOf(class_), 1);
    this.setClasses(classes);

    const students = this.getStudents()?.map((student: Student) => {
      const _student = new Student(student);
      _student.frequency = _student.frequency.filter(
        (frequency: Frequency) => frequency.classId !== id
      );
      return _student;
    });

    this.setStudents(students);
    this.setUpdatedAt(new Date());
  }

  public updateClassById(id: string, class_: Class): void {
    const classes = this.getClasses();
    const index = classes?.findIndex(
      (class_: Class) => new Class(class_).getId() === id
    );
    if (index >= 0) classes[index] = class_;
    this.setClasses(classes);
    this.setUpdatedAt(new Date());
  }

  public setActivities(activities: Activity[]): void {
    this.activities = activities;
    this.setUpdatedAt(new Date());
  }

  public addActivity(activity: Activity): void {
    const activities = this.getActivities();
    activities.push(activity);
    this.setActivities(activities);
    this.setUpdatedAt(new Date());
  }

  public removeActivityById(id: string): void {
    const activities = this.getActivities();
    const activity = activities?.find(
      (activity: Activity) => new Activity(activity).getId() === id
    );
    if (activity) activities?.splice(activities.indexOf(activity), 1);
    this.setActivities(activities);
    this.setUpdatedAt(new Date());
  }

  public updateActivityById(id: string, activity: Activity): void {
    const activities = this.getActivities();
    const index = activities?.findIndex(
      (activity: Activity) => new Activity(activity).getId() === id
    );
    if (index >= 0) activities[index] = activity;
    this.setActivities(activities);
    this.setUpdatedAt(new Date());
  }

  public setWorks(works: Work[]): void {
    this.works = works;
    this.setUpdatedAt(new Date());
  }

  public addWork(work: Work): void {
    const works = this.getWorks();
    works.push(work);
    this.setWorks(works);
    this.setUpdatedAt(new Date());
  }

  public removeWorkById(id: string): void {
    const works = this.getWorks();
    const work = works?.find((work: Work) => new Work(work).getId() === id);
    if (work) works?.splice(works.indexOf(work), 1);
    this.setWorks(works);
    this.setUpdatedAt(new Date());
  }

  public updateWorkById(id: string, work: Work): void {
    const works = this.getWorks();
    const index = works?.findIndex(
      (work: Work) => new Work(work).getId() === id
    );
    if (index >= 0) works[index] = work;
    this.setWorks(works);
    this.setUpdatedAt(new Date());
  }

  public setResumes(resumes: Resume[]): void {
    this.resumes = resumes;
    this.setUpdatedAt(new Date());
  }

  public addResume(resume: Resume): void {
    const resumes = this.getResumes();
    resumes.push(resume);
    this.setResumes(resumes);
    this.setUpdatedAt(new Date());
  }

  public removeResumeById(id: string): void {
    const resumes = this.getResumes();
    const resume = resumes?.find(
      (resume: Resume) => new Resume(resume).getId() === id
    );
    if (resume) resumes?.splice(resumes.indexOf(resume), 1);
    this.setResumes(resumes);
    this.setUpdatedAt(new Date());
  }

  public updateResumeById(id: string, resume: Resume): void {
    const resumes = this.getResumes();
    const index = resumes?.findIndex(
      (resume: Resume) => new Resume(resume).getId() === id
    );
    if (index >= 0) resumes[index] = resume;
    this.setResumes(resumes);
    this.setUpdatedAt(new Date());
  }

  public setBooks(books: Book[]): void {
    this.books = books;
    this.setUpdatedAt(new Date());
  }

  public addBook(book: Book): void {
    const books = this.getBooks();
    books.push(book);
    this.setBooks(books);
    this.setUpdatedAt(new Date());
  }

  public removeBookById(id: string): void {
    const books = this.getBooks();
    const book = books?.find((book: Book) => new Book(book).getId() === id);
    if (book) books?.splice(books.indexOf(book), 1);
    this.setBooks(books);
    this.setUpdatedAt(new Date());
  }

  public updateBookById(id: string, book: Book): void {
    const books = this.getBooks();
    const index = books?.findIndex(
      (book: Book) => new Book(book).getId() === id
    );
    if (index >= 0) books[index] = book;
    this.setBooks(books);
    this.setUpdatedAt(new Date());
  }

  public setEvaluations(evaluations: Evaluation[]): void {
    this.evaluations = evaluations;
    this.setUpdatedAt(new Date());
  }

  public addEvaluation(evaluation: Evaluation): void {
    const evaluations = this.getEvaluations();
    evaluations.push(evaluation);
    this.setEvaluations(evaluations);
    this.setUpdatedAt(new Date());
  }

  public removeEvaluationById(id: string): void {
    const evaluations = this.getEvaluations();
    const evaluation = evaluations?.find(
      (evaluation: Evaluation) => new Evaluation(evaluation).getId() === id
    );
    if (evaluation) evaluations?.splice(evaluations.indexOf(evaluation), 1);
    this.setEvaluations(evaluations);
    this.setUpdatedAt(new Date());
  }

  public updateEvaluationById(id: string, evaluation: Evaluation): void {
    const evaluations = this.getEvaluations();
    const index = evaluations?.findIndex(
      (evaluation: Evaluation) => new Evaluation(evaluation).getId() === id
    );
    if (index >= 0) evaluations[index] = evaluation;
    this.setEvaluations(evaluations);
    this.setUpdatedAt(new Date());
  }

  public setWorkload(workload: number): void {
    this.workload = workload;
    this.setUpdatedAt(new Date());
  }

  public setWorkloadCompleted(workloadCompleted: number): void {
    this.workloadCompleted = workloadCompleted;
    this.setUpdatedAt(new Date());
  }

  public setWorkloadPercent(workloadPercent: number): void {
    this.workloadPercent = workloadPercent;
    this.setUpdatedAt(new Date());
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }

  public async save() {
    await db.execute(
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

    this.teachers?.forEach(async (teacher: Teacher) => {
      const course = await db.execute(
        `SELECT * FROM Courses WHERE id = '${this.courseId}'`
      );
      await db.execute(
        `INSERT INTO DisciplinesTeachers (id, disciplineId, userId) VALUES ('${IDgenerator()}', '${
          this.id
        }', '${teacher.userId}')`
      );
      const teach = await db.execute(
        `SELECT * FROM Users WHERE id = '${teacher.userId}'`
      );

      const email = new Email({
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
    });
  }

  public async update() {
    await db.execute(
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

  public async delete() {
    await db.execute(`DELETE FROM Disciplines WHERE id = "${this.id}"`);
  }
}

export default Discipline;
