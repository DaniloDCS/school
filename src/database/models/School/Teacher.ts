import functions from "../../../assets/functions";
const { IDgenerator } = functions();

interface ITeacher {
  id?: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Teacher implements ITeacher {
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    userId,
    createdAt = new Date(),
    updatedAt = new Date(),
  }: ITeacher) {
    this.id = id;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): string {
    return this.id;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setuserId(userId: string): void {
    this.userId = userId;
    this.setUpdatedAt(new Date());
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}

export default Teacher;
