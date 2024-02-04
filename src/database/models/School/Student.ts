import functions from "../../../assets/functions";
const { IDgenerator } = functions();
import db from "../../connection";
import Class from "./Class";
import Discipline from "./Discipline";
import {
  History,
  Bulletin as BulletinHistory,
  Period as PeriodHistory,
  Discipline as DisciplineHistory,
} from "./History";

interface IStudent {
  id?: string;
  userId: string;
  frequency?: Frequency[];
  bulletin?: Bulletin[];
  createdAt?: Date;
  updatedAt?: Date;
}

class Student implements IStudent {
  id: string;
  userId: string;
  frequency: Frequency[];
  bulletin: Bulletin[];
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    userId,
    frequency = [],
    bulletin = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IStudent) {
    this.id = id;
    this.userId = userId;
    this.frequency = (typeof frequency === "string" ? JSON.parse(frequency) : frequency);
    this.bulletin = (typeof bulletin === "string" ? JSON.parse(bulletin) : bulletin);
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id;
  public getuserId = (): string => this.userId;
  public getFrequency = (): Frequency[] => this.frequency;
  public getBulletin = (): Bulletin[] => this.bulletin;
  public getCreatedAt = (): Date => this.createdAt;
  public getUpdatedAt = (): Date => this.updatedAt;

  public setuserId(userId: string): void {
    this.userId = userId;
    this.setUpdatedAt(new Date());
  }

  public async setFrequency(frequency: Frequency, student: Student, _discipline: Discipline, _class: Class) {
    this.frequency.push(frequency);

    // atualizar o historico do aluno

    const query = await db.execute(
      `SELECT * FROM History WHERE userId = '${student.getuserId()}'`
    );

    if (query[0] === undefined) {
      null;
    } else {
      let history = new History(query[0]);

      let historicPeriod = history.getPeriods().find((period: PeriodHistory) => period.periodId === _discipline.periodId);

      if (historicPeriod) {
        const period = new PeriodHistory(historicPeriod);

        let historicDiscipline = period.disciplines.find( (discipline: DisciplineHistory) => discipline.name === discipline.name );

        if (historicDiscipline) {
          const discipline = new DisciplineHistory(historicDiscipline);
          discipline.setFrequenciesCompleted(Number(discipline.getFrequencies()) + Number(_class.getQuantity()), _discipline.getWorkload());
        }

        history.updatePeriod(period);
      }

      await history.update();
    }

    this.setUpdatedAt(new Date());
  }

  public setFrequencyList(frequency: Frequency[]): void {
    this.frequency = frequency;
    this.setUpdatedAt(new Date());
  }

  public setBulletin(bulletin: Bulletin[]): void {
    this.bulletin = bulletin;
    this.setUpdatedAt(new Date());
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}

interface IFrequency {
  id?: string;
  date: Date;
  classId: string;
  status: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

class Frequency implements IFrequency {
  id: string;
  date: Date;
  classId: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    date,
    classId,
    status,
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IFrequency) {
    this.id = id;
    this.date = date;
    this.classId = classId;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id;
  public getDate = (): Date => this.date;
  public getClassId = (): string => this.classId;
  public getStatus = (): boolean => this.status;
  public getCreatedAt = (): Date => this.createdAt;
  public getUpdatedAt = (): Date => this.updatedAt;

  public setDate(date: Date): void {
    this.date = date;
    this.setUpdatedAt(new Date());
  }

  public setClassId(classId: string): void {
    this.classId = classId;
    this.setUpdatedAt(new Date());
  }

  public setStatus(status: boolean): void {
    this.status = status;
    this.setUpdatedAt(new Date());
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}

interface IBulletin {
  id?: string;
  title: string;
  description: string;
  value: number;
  weight: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Bulletin implements IBulletin {
  id: string;
  title: string;
  description: string;
  value: number;
  weight: number;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    title,
    description,
    value,
    weight,
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IBulletin) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.value = value;
    this.weight = weight;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id;
  public getTitle = (): string => this.title;
  public getDescription = (): string => this.description;
  public getValue = (): number => this.value;
  public getWeight = (): number => this.weight;
  public getCreatedAt = (): Date => this.createdAt;
  public getUpdatedAt = (): Date => this.updatedAt;

  public setTitle(title: string): void {
    this.title = title;
    this.setUpdatedAt(new Date());
  }

  public setDescription(description: string): void {
    this.description = description;
    this.setUpdatedAt(new Date());
  }

  public setValue(value: number): void {
    this.value = value;
    this.setUpdatedAt(new Date());
  }

  public setWeight(weight: number): void {
    this.weight = weight;
    this.setUpdatedAt(new Date());
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}

export { Student, Frequency, Bulletin };
