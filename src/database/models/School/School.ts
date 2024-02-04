import functions from "../../../assets/functions";
const { IDgenerator } = functions();
import db from "../../connection";
import User from "../User";

interface ISchool {
  id?: string;
  name: string;
  avatar?: string;
  email: string;
  phone: string;
  status?: string;
  message?: string;
  principalId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class School implements ISchool {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  status: string;
  message: string;
  principalId: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    name,
    avatar = "/public/images/school.png",
    email,
    phone,
    status = "active",
    message = "Nos agora fazemos parte do Stuudy!",
    principalId = "",
    createdAt = new Date(),
    updatedAt = new Date(),
  }: ISchool) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.email = email;
    this.phone = phone;
    this.status = status;
    this.message = message;
    this.principalId = principalId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId = (): string => this.id;
  public getName = (): string => this.name;
  public getAvatar = (): string => this.avatar;
  public getEmail = (): string => this.email;
  public getPhone = (): string => this.phone;
  public getStatus = (): string => this.status;
  public getMessage = (): string => this.message;
  public getPrincipalId = (): string => this.principalId;
  public getCreatedAt = (): Date => this.createdAt;
  public getUpdatedAt = (): Date => this.updatedAt;

  public setId = (id: string): String => (this.id = id);
  public setName = (name: string): String => (this.name = name);
  public setAvatar = (avatar: string): String => (this.avatar = avatar);
  public setEmail = (email: string): String => (this.email = email);
  public setPhone = (phone: string): String => (this.phone = phone);
  public setStatus = (status: string): String => (this.status = status);
  public setMessage = (message: string): String => (this.message = message);
  public setPrincipalId = (principalId: string): String => (this.principalId = principalId);
  public setCreatedAt = (createdAt: Date): Date => (this.createdAt = createdAt);
  public setUpdatedAt = (updatedAt: Date): Date => (this.updatedAt = updatedAt);

  public async save() {
    await db.execute(
      `INSERT INTO Schools (id, name, avatar, email, phone, status, message, principalId, createdAt, updatedAt) VALUES ("${this.id}", "${this.name}", "${this.avatar}", "${this.email}", "${this.phone}", "${this.status}", "${this.message}", "${this.principalId}", "${this.createdAt}", "${this.updatedAt}")`
    );

    const school = new User({
      username: "@" + this.name.toLowerCase().replace(/\s/g, ""),
      name: this.name,
      email: this.name.toLowerCase().replace(/\s/g, "") + "@stuudy.school.com",
      password: "stuudy",
      role: 10
    });

    await school.save()

  }

  public async update() {
    await db.execute(
      `UPDATE Schools SET name="${this.getName()}", avatar="${this.getAvatar()}", email="${this.getEmail()}", phone="${this.getPhone()}", status="${this.getStatus()}", message="${this.getMessage()}", principalId="${this.getPrincipalId()}", updatedAt="${this.getUpdatedAt()}" WHERE id="${this.getId()}"`
    );
  }

  public async delete(): Promise<boolean> {
    await db.execute(`DELETE FROM Schools WHERE id="${this.id}"`);
    return true;
  }

  public async setUsers(users: User[]) {
    await db.execute(`INSERT INTO SchoolsUsers (id, schoolId, userId) VALUES ${users.map((user) => `("${IDgenerator()}", "${this.id}", "${user.getId()}")`).join(", ")}`);
  }  
}

export default School;
