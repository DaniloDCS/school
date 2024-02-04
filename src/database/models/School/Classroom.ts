import functions from "../../../assets/functions";
const { IDgenerator } = functions();
import db from "../../connection";

interface IClassroom {
  id?: string;
  name: string;
  status?: string;
  periodId: string;
  courseId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Classroom implements IClassroom {
  id?: string;
  name: string;
  status: string;
  periodId: string;
  courseId: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor({ id = IDgenerator(), name, status = 'active', periodId, courseId, createdAt = new Date(), updatedAt = new Date() }: IClassroom) {
    this.id = id;
    this.name = name;
    this.status = status || "active";
    this.courseId = courseId;
    this.periodId = periodId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id || "";
  public getName = (): string => this.name;
  public getStatus = (): string => this.status;
  public getCourseId = (): string => this.courseId || "";
  public getPeriodId = (): string => this.periodId || "";
  public getCreatedAt = (): Date => this.createdAt || new Date();
  public getUpdatedAt = (): Date => this.updatedAt || new Date();

  public setId = (id: string) => (this.id = id);
  public setName = (name: string) => (this.name = name);
  public setStatus = (status: string) => (this.status = status);
  public setCourseId = (courseId: string) => (this.courseId = courseId);
  public setPeriodId = (periodId: string) => (this.periodId = periodId);
  public setCreatedAt = (createdAt: Date) => (this.createdAt = createdAt);
  public setUpdatedAt = (updatedAt: Date) => (this.updatedAt = updatedAt);

  public async save(): Promise<Classroom> {
    const classroom: Classroom = new Classroom(this);
    await db.execute(
      `INSERT INTO Classrooms (id, name, status, periodId, courseId, createdAt, updatedAt) VALUES ('${classroom.getId()}', '${classroom.getName()}', '${classroom.getStatus()}', '${classroom.getPeriodId()}', '${classroom.getCourseId()}', '${classroom.getCreatedAt()}', '${classroom.getUpdatedAt()}')`
    );
    return classroom;
  }

  public async update(): Promise<Classroom> {
    const classroom: Classroom = new Classroom(this);
    await db.execute(
      `UPDATE Classrooms SET name = '${classroom.getName()}', status = '${classroom.getStatus()}', periodId = '${classroom.getPeriodId()}', courseId = '${classroom.getCourseId()}', updatedAt = '${classroom.getUpdatedAt()}' WHERE id = '${classroom.getId()}'`
    );
    return classroom;
  }

  public async delete(): Promise<boolean> {
    const id = this.getId();
    await db.execute(
      `DELETE FROM Classrooms WHERE id = '${id}'`
    );
    return true;
  }
}

export default Classroom;
