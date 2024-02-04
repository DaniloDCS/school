import functions from "../../../assets/functions";
const { IDgenerator } = functions();

interface IActivity {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Activity implements IActivity {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    name,
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IActivity) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setName(name: string): void {
    this.name = name;
    this.setUpdatedAt(new Date());
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}

export default Activity;
