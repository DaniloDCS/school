import db from "../../connection";
import functions from "../../../assets/functions";
const { IDgenerator } = functions();

interface IGrade {
  id?: string;
  schoolId?: string;
  periods?: Period[];
  createdAt?: Date;
  updatedAt?: Date;
}

class Grade implements IGrade {
  id: string;
  schoolId: string;
  periods: Period[];
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    schoolId = "",
    periods = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IGrade) {
    this.id = id;
    this.schoolId = schoolId;
    this.periods = periods;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id || "";
  public getSchoolId = (): string => this.schoolId;
  public getPeriods = (): Period[] => this.periods;
  public getCreatedAt = (): Date => this.createdAt || new Date();
  public getUpdatedAt = (): Date => this.updatedAt || new Date();

  public setId = (id: string) => this.id = id;
  public setSchoolId = (schoolId: string) => this.schoolId = schoolId;
  public setPeriods = (periods: Period[]) => this.periods = periods;
  public setCreatedAt = (createdAt: Date) => this.createdAt = createdAt;
  public setUpdatedAt = (updatedAt: Date) => this.updatedAt = updatedAt;

  public async save(): Promise<Grade> {
    const grade = new Grade(this);
    await db.execute(`INSERT INTO grades (id, schoolId, periods, createdAt, updatedAt) VALUES ('${this.id}', '${this.schoolId}', '${this.periods}', '${this.createdAt}', '${this.updatedAt}')`);
    return grade;
  }

  public async update(): Promise<Grade> {
    const grade = new Grade(this);
    await db.execute(`UPDATE grades SET schoolId='${this.schoolId}', periods='${this.periods}', createdAt='${this.createdAt}', updatedAt='${this.updatedAt}' WHERE id='${this.id}'`);
    return grade;
  }

  public async delete(): Promise<Grade> {
    const grade = new Grade(this);
    await db.execute(`DELETE FROM grades WHERE id='${this.id}'`);
    return grade;
  }
}

interface IPeriod {
  id?: string;
  name: string;
  disciplines: Discipline[];
  createdAt?: Date;
  updatedAt?: Date;
}

class Period implements IPeriod {
  id: string;
  name: string;
  disciplines: Discipline[];
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    name = "",
    disciplines = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IPeriod) {
    this.id = id;
    this.name = name;
    this.disciplines = disciplines;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id || "";
  public getName = (): string => this.name;
  public getDisciplines = (): Discipline[] => this.disciplines;
  public getCreatedAt = (): Date => this.createdAt || new Date();
  public getUpdatedAt = (): Date => this.updatedAt || new Date();

  public setId = (id: string) => this.id = id;
  public setName = (name: string) => this.name = name;
  public setDisciplines = (disciplines: Discipline[]) => this.disciplines = disciplines;
  public setCreatedAt = (createdAt: Date) => this.createdAt = createdAt;
  public setUpdatedAt = (updatedAt: Date) => this.updatedAt = updatedAt;
}

interface IDiscipline {
  id?: string;
  name: string;
  workload: Number;
  credits: Number;
  type: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Discipline implements IDiscipline {
  id: string;
  name: string;
  workload: Number;
  credits: Number;
  type: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    name = "",
    workload = 0,
    credits = 0,
    type = "",
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IDiscipline) {
    this.id = id;
    this.name = name;
    this.workload = workload;
    this.credits = credits;
    this.type = type;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id || "";
  public getName = (): string => this.name;
  public getWorkload = (): Number => this.workload;
  public getCredits = (): Number => this.credits;
  public getType = (): string => this.type;
  public getCreatedAt = (): Date => this.createdAt || new Date();
  public getUpdatedAt = (): Date => this.updatedAt || new Date();

  public setId = (id: string) => this.id = id;
  public setName = (name: string) => this.name = name;
  public setWorkload = (workload: Number) => this.workload = workload;
  public setCredits = (credits: Number) => this.credits = credits;
  public setType = (type: string) => this.type = type;
  public setCreatedAt = (createdAt: Date) => this.createdAt = createdAt;
  public setUpdatedAt = (updatedAt: Date) => this.updatedAt = updatedAt;
}

export default Grade;