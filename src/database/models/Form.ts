import functions from "../../assets/functions";
const { IDgenerator } = functions();
import db from "../connection";
import { Email } from "./Email";
import User from "./User";

interface IFormsShares {
  id?: string;
  formId: string;
  authorId: string;
  userId: string;
  permission?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class FormsShares implements IFormsShares {
  id: string;
  formId: string;
  authorId: string;
  userId: string;
  permission: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    formId,
    authorId,
    userId,
    permission = "view",
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IFormsShares) {
    this.id = id;
    this.formId = formId;
    this.authorId = authorId;
    this.userId = userId;
    this.permission = permission;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): string {
    return this.id;
  }

  public getFormId(): string {
    return this.formId;
  }

  public getAuthorId(): string {
    return this.authorId;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getPermission(): string {
    return this.permission;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setFormId(formId: string): void {
    this.formId = formId;
  }

  public setAuthorId(authorId: string): void {
    this.authorId = authorId;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public setPermission(permission: string): void {
    this.permission = permission;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }

  public async save() {
    await db.execute(
      `INSERT INTO FormsShares (id, formId, authorId, userId, permission) VALUES ("${this.id}", "${this.formId}", "${this.authorId}", "${this.userId}", "${this.permission}")`
    );

    const u = await db.execute(
      `SELECT * FROM Users WHERE id = "${this.userId}"`
    );

    const user = u[0] ? new User(u[0]) : null;

    const query = await db.execute(
      `SELECT id FROM Users WHERE username = "@stuudy"`
    );

    const email = new Email({
      fromId: query[0].id,
      toId: this.userId,
      subject: "Compartilhamento de formulário",
      content: `O usuário ${user?.getName()} compartilhou um formulário com você. <br> <a href="/apps/forms/${
        this.permission == "edit" ? "e" : "v"
      }/${this.formId}">Clique aqui</a> para acessar o formulário.`,
      fromDelete: true,
    });

    await email.save();
  }

  public async update() {
    await db.execute(
      `UPDATE FormsShares SET permission = "${this.permission}" WHERE id = "${this.id}"`
    );
  }

  public async delete() {
    await db.execute(`DELETE FROM FormsShares WHERE id = "${this.id}"`);
  }
}

interface IForm {
  readonly id?: string;
  title?: string;
  content?: string;
  userId?: string;
  configs?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Form implements IForm {
  readonly id: string;
  title: string;
  content: string;
  userId: string;
  configs: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    title = "Formulário sem título",
    content = "",
    userId = "",
    configs = JSON.stringify({
      margins: {
        top: "3cm",
        bottom: "2cm",
        left: "2cm",
        right: "2cm",
      },
      font: {
        family: "Times New Roman",
        size: "12",
      },
      orientation: "portrait",
      format: "A4",
      background: "white",
      color: "black",
    }),
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IForm) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.userId = userId;
    this.configs = configs;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getContent(): string {
    return this.content;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getConfigs(): {
    margins: {
      top: string;
      bottom: string;
      left: string;
      right: string;
    };
    font: {
      family: string;
      size: string;
    };
    orientation: string;
    format: string;
    background: string;
    color: string;
  } {
    return JSON.parse(this.configs);
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setContent(content: string): void {
    this.content = content;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public setConfigs(configs: {
    margins: {
      top: string;
      bottom: string;
      left: string;
      right: string;
    };
    font: {
      family: string;
      size: string;
    };
    orientation: string;
    format: string;
    background: string;
    color: string;
  }): void {
    this.configs = JSON.stringify(configs);
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }

  public async save() {
    await db.execute(
      `INSERT INTO Forms (id, userId) VALUES ("${this.id}", "${this.userId}")`
    );
  }

  public async update() {
    await db.execute(
      `UPDATE Forms SET title = "${this.title}", content = "${this.content}" WHERE id = "${this.id}"`
    );
  }

  public async delete() {
    await db.execute(
      `DELETE FROM Forms WHERE id = "${this.id}" AND userId = "${this.userId}"`
    );
  }
}

export { Form, FormsShares };
