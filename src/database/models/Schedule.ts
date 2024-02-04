import functions from "../../assets/functions";
const { IDgenerator } = functions();
import db from "../connection";

interface ISchedule {
  id?: string;
  userId: string;
  events?: Event[];
  createdAt?: Date;
  updatedAt?: Date;
}

class Schedule implements ISchedule {
  id: string;
  userId: string;
  events: Event[];
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    userId,
    events = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }: ISchedule) {
    this.id = id;
    this.userId = userId;
    this.events = events;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id;

  public getEvents(): Event[] {
    if (String(this.events) == "[]") this.events = [];
    else if (typeof this.events == "string")
      this.events = JSON.parse(this.events);
    return this.events;
  }

  public getUserId = (): string => this.userId;

  public getCreatedAt = (): Date => this.createdAt;

  public getUpdatedAt = (): Date => this.updatedAt;

  public setId = (id: string) => this.id = id;

  public setEvents = (events: Event[]) => this.events = events;
  
  public setEvent = (event: Event) => this.events = [...this.getEvents(), event];

  public getEvent = (id: string): Event => {
    const event = this.getEvents().filter((event) => event.id === id);
    return event[0];
  }

  public removeEvent = (id: string) => this.events = this.getEvents().filter((event) => event.id !== id);

  public updateEvent = (id: string, event: Event) => {
    this.events = this.getEvents().map((event) => {
      if (event.id === id) return event;
      else return event;
    });
  };

  public setUserId = (userId: string) => this.userId = userId;

  public setCreatedAt = (createdAt: Date) => this.createdAt = createdAt;

  public setUpdatedAt = (updatedAt: Date) => this.updatedAt = updatedAt;

  public async save() {
    await db.execute(
      `INSERT INTO Schedule (
      id,
      userId,
      events,
      createdAt,
      updatedAt
    ) VALUES (
      "${this.id}",
      "${this.userId}",
      '${JSON.stringify(this.events)}',
      "${this.createdAt}",
      "${this.updatedAt}"
    )`
    );
  }

  public async update() {
    await db.execute(`UPDATE Schedule SET events = '${JSON.stringify(this.events)}' WHERE id = '${this.id}'`);
  }

  public async delete() {
    await db.execute(`DELETE FROM Schedule WHERE id = '${this.id}'`);
  }
}

interface IEvent {
  id?: string;
  title: string;
  description?: string;
  type?: string;
  color?: string;
  dateStart: Date;
  dateFinish?: Date;
  timeStart?: string;
  timeFinish?: string;
  createdAt?: Date;
}

class Event implements IEvent {
  id: string;
  title: string;
  description: string;
  type: string;
  color: string;
  dateStart: Date;
  dateFinish: Date;
  timeStart: string;
  timeFinish: string;
  createdAt: Date;

  constructor({
    id = IDgenerator(),
    title,
    description = "Meu evento",
    type = "event",
    color = "#2196f3",
    dateStart,
    dateFinish = new Date(),
    timeStart = "00:00",
    timeFinish = "00:00",
    createdAt = new Date(),
  }: IEvent) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.type = type;
    this.color = color;
    this.dateStart = dateStart;
    this.dateFinish = dateFinish;
    this.timeStart = timeStart;
    this.timeFinish = timeFinish;
    this.createdAt = createdAt;
  }

  public getId = (): string => this.id;

  public getTitle = (): string => this.title;

  public getDescription = (): string => this.description;

  public getType = (): string => this.type;

  public getColor = (): string => this.color;

  public getDateStart = (): Date => this.dateStart;

  public getDateFinish = (): Date => this.dateFinish;

  public getTimeStart = (): string => this.timeStart;

  public getTimeFinish = (): string => this.timeFinish;

  public getCreatedAt = (): Date => this.createdAt;

  public setId = (id: string) => this.id = id;

  public setTitle = (title: string) => this.title = title;

  public setDescription = (description: string) => this.description = description;

  public setType = (type: string) => this.type = type;

  public setColor = (color: string) => this.color = color;

  public setDateStart = (dateStart: Date) => this.dateStart = dateStart;

  public setDateFinish = (dateFinish: Date) => this.dateFinish = dateFinish;

  public setTimeStart = (timeStart: string) => this.timeStart = timeStart;

  public setTimeFinish = (timeFinish: string) => this.timeFinish = timeFinish;

  public setCreatedAt = (createdAt: Date) => this.createdAt = createdAt;
}

export { Schedule, Event };