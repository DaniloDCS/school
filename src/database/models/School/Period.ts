import functions from "../../../assets/functions";
const { IDgenerator } = functions();
import db from "../../connection";
import { Email } from "../Email";

interface IPeriod {
  id?: string;
  name: string;
  status?: string;
  schoolId?: string;
  courseId?: string;
  userId?: string;
  startAt?: Date;
  endAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

class Period implements IPeriod {
  id: string;
  name: string;
  status: string;
  schoolId: string;
  courseId: string;
  userId: string;
  startAt: Date;
  endAt: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    name,
    status = "active",
    schoolId = "",
    courseId = "",
    userId = "",
    startAt = new Date(),
    endAt = new Date(),
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IPeriod) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.schoolId = schoolId;
    this.courseId = courseId;
    this.userId = userId;
    this.startAt = startAt;
    this.endAt = endAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id;
  public getName = (): string => this.name;
  public getStatus = (): string => this.status;
  public getSchoolId = (): string => this.schoolId;
  public getCourseId = (): string => this.courseId;
  public getUserId = (): string => this.userId;
  public getStartAt = (): Date => this.startAt;
  public getEndAt = (): Date => this.endAt;
  public getCreatedAt = (): Date => this.createdAt;
  public getUpdatedAt = (): Date => this.updatedAt;

  public setId = (id: string) => this.id = id;
  public setName = (name: string) => this.name = name;
  public setStatus = (status: string) => this.status = status;
  public setSchoolId = (schoolId: string) => this.schoolId = schoolId;
  public setCourseId = (courseId: string) => this.courseId = courseId;
  public setUserId = (userId: string) => this.userId = userId;
  public setStartAt = (startAt: Date) => this.startAt = startAt;
  public setEndAt = (endAt: Date) => this.endAt = endAt;
  public setCreatedAt = (createdAt: Date) => this.createdAt = createdAt;
  public setUpdatedAt = (updatedAt: Date) => this.updatedAt = updatedAt;
  
  public async save() {
    await db.execute(
      `INSERT INTO Periods (id, name, status, schoolId, courseId, userId, startAt, endAt, createdAt, updatedAt) VALUES ('${this.id}', '${this.name}', '${this.status}', '${this.schoolId}', '${this.courseId}', '${this.userId}', '${this.startAt}', '${this.endAt}', '${this.createdAt}', '${this.updatedAt}')`
    );

    const course = await db.execute(`SELECT * FROM Courses WHERE id = '${this.courseId}'`);
    const school = await db.execute(`SELECT * FROM Schools WHERE id = '${this.schoolId}'`);

    const email = new Email({
      toId: course[0].coordinatorId,
      fromId: school[0].principalId,
      subject: "Um novo semestre foi criado! Prepare-se! 📆📘✨",
      content: `📆 Olá, coordenador(a)! Estamos animados em anunciar que um novo semestre <strong>${this.name}</strong> foi criado com sucesso do curso de <a href="/school/s/${this.courseId}"> <strong>${course[0].name.toUpperCase()}</strong>!</a> Estamos prontos para mais descobertas e conquistas acadêmicas juntos! 🌟✏️! <br> <a href="/school/p/${this.id}">Clique aqui</a> para ver mais detalhes.`,
    });
    await email.save();
  }

  public async update(): Promise<Period> {
    const period = new Period(this);
    await db.execute(
      `UPDATE Periods SET name = '${this.name}', status = '${this.status}', schoolId = '${this.schoolId}', courseId = '${this.courseId}', userId = '${this.userId}', startAt = '${this.startAt}', endAt = '${this.endAt}', createdAt = '${this.createdAt}', updatedAt = '${this.updatedAt}' WHERE id = '${this.id}'`
    );
    return period;
  }

  public async delete(): Promise<Boolean> {
    await db.execute(`DELETE FROM Periods WHERE id = "${this.id}"`);
    return true;
  }
}

export default Period;