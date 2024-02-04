import functions from "../../assets/functions";
const { IDgenerator } = functions();
import db from "../connection";

interface IEmail {
  id?: string;
  subject?: string;
  content?: string;
  toId?: string;
  fromId?: string;
  toDelete?: boolean;
  fromDelete?: boolean;
  toRead?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

class Email implements IEmail {
  id: string;
  subject: string;
  content: string;
  toId: string;
  fromId: string;
  toDelete: boolean;
  fromDelete: boolean;
  toRead: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    subject = "(sem assunto)",
    content = "",
    toId = "",
    fromId = "",
    toDelete = false,
    fromDelete = false,
    toRead = false,
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IEmail) {
    this.id = id;
    this.subject = subject;
    this.content = content;
    this.toId = toId;
    this.fromId = fromId;
    this.toDelete = toDelete;
    this.fromDelete = fromDelete;
    this.toRead = toRead;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): string {
    return this.id;
  }

  public getSubject(): string {
    return this.subject;
  }

  public getContent(): string {
    return this.content;
  }

  public getToId(): string {
    return this.toId;
  }

  public getFromId(): string {
    return this.fromId;
  }

  public getToDelete(): boolean {
    return this.toDelete;
  }

  public getFromDelete(): boolean {
    return this.fromDelete;
  }

  public getToRead(): boolean {
    return this.toRead;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setsubject(subject: string): void {
    this.subject = subject;
  }

  public setContent(content: string): void {
    this.content = content;
  }

  public setToId(toId: string): void {
    this.toId = toId;
  }

  public setFromId(fromId: string): void {
    this.fromId = fromId;
  }

  public setToDelete(toDelete: boolean): void {
    this.toDelete = toDelete;
  }

  public setFromDelete(fromDelete: boolean): void {
    this.fromDelete = fromDelete;
  }

  public setToRead(toRead: boolean): void {
    this.toRead = toRead;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }

  public async save() {
    const { id, subject, content, toId, fromId } = this;
    await db.execute(
      `INSERT INTO Emails (id, subject, content, toId, fromId) VALUES ('${id}', '${subject}', '${content}', '${toId}', '${fromId}')`
    );

    const usersEmails = new UsersEmails({ userId: toId, emailId: id });
    await usersEmails.save();

    if (fromId && this.fromDelete === false) {
      const usersEmails2 = new UsersEmails({ userId: fromId, emailId: id });
      await usersEmails2.save();
    }
  }

  public async update() {
    const { id, subject, content, toId, fromId, toDelete, fromDelete, toRead } = this;
    await db.execute(
      `UPDATE Emails SET subject = '${subject}', content = '${content}', toId = '${toId}', fromId = '${fromId}', toDelete = '${toDelete}', fromDelete = '${fromDelete}', toRead = '${toRead}' WHERE id = '${id}'`
    );
  }

  public async delete() {
    const { id } = this;
    await db.execute(`DELETE FROM Emails WHERE id = '${id}'`);
  }
}

interface IUsersEmails {
  id?: string;
  userId: string;
  emailId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class UsersEmails implements IUsersEmails {
  id: string;
  userId: string;
  emailId: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id = IDgenerator(),
    userId,
    emailId,
    createdAt = new Date(),
    updatedAt = new Date(),
  }: IUsersEmails) {
    this.id = id;
    this.userId = userId;
    this.emailId = emailId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getID(): string {
    return this.id;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getEmailId(): string {
    return this.emailId;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public setEmailId(emailId: string): void {
    this.emailId = emailId;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }

  public async save() {
    const { id, userId, emailId } = this;
    await db.execute(
      `INSERT INTO UsersEmails (id, userId, emailId) VALUES ('${id}', '${userId}', '${emailId}')`
    );
  }

  public async update() {
    const { id, userId, emailId } = this;
    await db.execute(
      `UPDATE UsersEmails SET userId = '${userId}', emailId = '${emailId}' WHERE id = '${id}'`
    );
  }

  public async delete() {
    const { id } = this;
    await db.execute(`DELETE FROM UsersEmails WHERE id = '${id}'`);
  }
}

export { Email, UsersEmails };