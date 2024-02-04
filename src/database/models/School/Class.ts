import functions from "../../../assets/functions";
const { IDgenerator } = functions();

interface IClass {
  id?: string;
  title: string;
  content: string;
  quantity: number;
  date: Date;
  teacherId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Class implements IClass {
  id: string;
  title: string;
  content: string;
  quantity: number;
  date: Date;
  teacherId: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    title,
    content,
    quantity,
    date,
    teacherId,
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IClass) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.quantity = quantity;
    this.date = date;
    this.teacherId = teacherId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id;
  public getTitle = (): string => this.title;
  public getContent = (): string => this.content;
  public getQuantity = (): number => this.quantity;
  public getDate = (): Date => this.date;
  public getTeacherId = (): string => this.teacherId;
  public getCreatedAt = (): Date => this.createdAt;
  public getUpdatedAt = (): Date => this.updatedAt;


  public setName(title: string): void {
    this.title = title;
    this.setUpdatedAt(new Date());
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}

export default Class;
