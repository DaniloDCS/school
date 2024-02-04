import functions from "../../../assets/functions";
const { IDgenerator } = functions();
import db from "../../connection";
import Teacher from "./Teacher";

interface IHistory {
  id?: string;
  userId: string;
  periods?: Period[];
  createdAt?: Date;
  updatedAt?: Date;
}

class History implements IHistory {
  id: string;
  userId: string;
  periods: Period[];
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    userId,
    periods = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IHistory) {
    this.id = id;
    this.userId = userId;
    this.periods = (typeof periods === "string") ? JSON.parse(periods) : periods;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id;
  public getUserId = (): string => this.userId;
  public getPeriods = (): Period[] => this.periods;
  public getCreatedAt = (): Date => this.createdAt;
  public getUpdatedAt = (): Date => this.updatedAt;

  public setId = (id: string) => this.id = id;
  public setUserId = (userId: string) => this.userId = userId;
  public setPeriods = (periods: Period[]) => this.periods = periods;
  public setCreatedAt = (createdAt: Date) => this.createdAt = createdAt;
  public setUpdatedAt = (updatedAt: Date) => this.updatedAt = updatedAt;  

  public addPeriod = (period: Period) => this.periods.push(period);
  public updatePeriod = (period: Period) => {
    const index = this.periods.findIndex((item) => item.id === period.id);
    this.periods[index] = period;
  }

  public async save() {
    await db.execute(
      `INSERT INTO History (id, userId) VALUES ('${this.id}', '${this.userId}')`
    );
  }

  public async update() {
    await db.execute(
      `UPDATE History SET userId = '${this.userId}', periods = '${JSON.stringify(this.periods)}' WHERE id = '${this.id}'`
    );
  }
}

interface IPeriod {
  id?: string;
  periodId: string;
  name: string;
  status?: string;
  startAt?: Date;
  endAt?: Date;
  frquencies?: Number;
  cra?: Number;
  mc?: Number;
  iech?: Number;
  iepl?: Number;
  iea?: Number;
  disciplines?: Discipline[];
  createdAt?: Date;
  updatedAt?: Date;
}

class Period implements IPeriod {
  id: string;
  periodId: string;
  name: string;
  status: string;
  startAt: Date;
  endAt: Date;
  frquencies: Number;
  cra: Number;
  mc: Number;
  iech: Number;
  iepl: Number;
  iea: Number;
  disciplines: Discipline[];
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    periodId,
    name,
    status = "active",
    startAt = new Date(),
    endAt = new Date(),
    frquencies = 0,
    cra = 0,
    mc = 0,
    iech = 0,
    iepl = 0,
    iea = 0,
    disciplines = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IPeriod) {
    this.id = id;
    this.periodId = periodId;
    this.name = name;
    this.status = status;
    this.startAt = startAt;
    this.endAt = endAt;
    this.frquencies = frquencies;
    this.cra = cra;
    this.mc = mc;
    this.iech = iech;
    this.iepl = iepl;
    this.iea = iea;
    this.disciplines = disciplines;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id;
  public getPeriodId = (): string => this.periodId;
  public getName = (): string => this.name;
  public getStatus = (): string => this.status;
  public getStartAt = (): Date => this.startAt;
  public getEndAt = (): Date => this.endAt;
  public getFrequencies = (): Number => this.frquencies;
  public getCra = (): Number => this.cra;
  public getMc = (): Number => this.mc;
  public getIech = (): Number => this.iech;
  public getIepl = (): Number => this.iepl;
  public getIea = (): Number => this.iea;
  public getDisciplines = (): Discipline[] => this.disciplines;
  public getCreatedAt = (): Date => this.createdAt;
  public getUpdatedAt = (): Date => this.updatedAt;

  public setId = (id: string) => this.id = id;
  public setPeriodId = (periodId: string) => this.periodId = periodId;
  public setName = (name: string) => this.name = name;
  public setStatus = (status: string) => this.status = status;
  public setStartAt = (startAt: Date) => this.startAt = startAt;
  public setEndAt = (endAt: Date) => this.endAt = endAt;
  public setFrequenciesCompleted = (frquencies: Number) => this.frquencies = frquencies;
  public setCra = (cra: Number) => this.cra = cra;
  public setMc = (mc: Number) => this.mc = mc;
  public setIech = (iech: Number) => this.iech = iech;
  public setIepl = (iepl: Number) => this.iepl = iepl;
  public setIea = (iea: Number) => this.iea = iea;
  public setDisciplines = (disciplines: Discipline[]) => this.disciplines = disciplines;
  public setCreatedAt = (createdAt: Date) => this.createdAt = createdAt;
  public setUpdatedAt = (updatedAt: Date) => this.updatedAt = updatedAt;
  
  public addDiscipline = (discipline: Discipline) => this.disciplines.push(discipline);

  public updateDiscipline = (discipline: Discipline) => {
    const index = this.disciplines.findIndex((item) => item.getId() === discipline.getId());
    this.disciplines[index] = discipline;
  } 
}

interface IDiscipline {
  id?: string;
  name: string;
  teachers?: Teacher[];
  status?: string;
  frquencies?: Number;
  frquenciesPercent?: Number;
  media?: Number;
  bulletin?: Bulletin[];
  createdAt?: Date;
  updatedAt?: Date;
}

class Discipline implements IDiscipline {
  id: string;
  name: string;
  teachers: Teacher[];
  status: string;
  frquencies: Number;
  frquenciesPercent: Number;
  media: Number;
  bulletin: Bulletin[];
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    name,
    teachers = [],
    status = "cursando",
    frquencies = 0,
    frquenciesPercent = 0,
    media = 0,
    bulletin = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IDiscipline) {
    this.id = id;
    this.name = name;
    this.teachers = teachers;
    this.status = status;
    this.frquencies = frquencies;
    this.frquenciesPercent = frquenciesPercent;
    this.media = media;
    this.bulletin = bulletin;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id;
  public getName = (): string => this.name;
  public getTeachers = (): Teacher[] => this.teachers;
  public getStatus = (): string => this.status;
  public getFrequencies = (): Number => this.frquencies;
  public getFrequenciesPercent = (): Number => this.frquenciesPercent;
  public getMedia = (): Number => this.media;
  public getBulletin = (): Bulletin[] => this.bulletin;
  public getCreatedAt = (): Date => this.createdAt;
  public getUpdatedAt = (): Date => this.updatedAt;

  public setId = (id: string) => this.id = id;
  public setName = (name: string) => this.name = name;
  public setTeachers = (teachers: Teacher[]) => this.teachers = teachers;
  public setStatus = (status: string) => this.status = status;
  public setFrequenciesCompleted = (frquencies: Number, disciplineWorkloadTotal: Number) => {
    this.frquencies = frquencies;
    this.frquenciesPercent = (Number(frquencies) / Number(disciplineWorkloadTotal)) * 100;
  };
  public setMedia = (media: Number) => this.media = media;
  public setBulletin = (bulletin: Bulletin[]) => this.bulletin = bulletin;
  public setCreatedAt = (createdAt: Date) => this.createdAt = createdAt;
  public setUpdatedAt = (updatedAt: Date) => this.updatedAt = updatedAt;
}

interface IBulletin {
  id?: string;
  name: string;
  value: Number;
  weight: Number;
}

class Bulletin implements IBulletin {
  id: string;
  name: string;
  value: Number;
  weight: Number;

  constructor({ id = IDgenerator(), name, value, weight }: IBulletin) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.weight = weight;
  }

  public getId = (): string => this.id;
  public getName = (): string => this.name;
  public getValue = (): Number => this.value;
  public getWeight = (): Number => this.weight;

  public setId = (id: string) => this.id = id;
  public setName = (name: string) => this.name = name;
  public setValue = (value: Number) => this.value = value;
  public setWeight = (weight: Number) => this.weight = weight;
}

export { History, Period, Discipline, Bulletin };