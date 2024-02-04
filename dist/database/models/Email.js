"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _functions = require('../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );
var _connection = require('../connection'); var _connection2 = _interopRequireDefault(_connection);














class Email  {
  
  
  
  
  
  
  
  
  
  

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
  }) {
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

   getId() {
    return this.id;
  }

   getSubject() {
    return this.subject;
  }

   getContent() {
    return this.content;
  }

   getToId() {
    return this.toId;
  }

   getFromId() {
    return this.fromId;
  }

   getToDelete() {
    return this.toDelete;
  }

   getFromDelete() {
    return this.fromDelete;
  }

   getToRead() {
    return this.toRead;
  }

   getCreatedAt() {
    return this.createdAt;
  }

   getUpdatedAt() {
    return this.updatedAt;
  }

   setsubject(subject) {
    this.subject = subject;
  }

   setContent(content) {
    this.content = content;
  }

   setToId(toId) {
    this.toId = toId;
  }

   setFromId(fromId) {
    this.fromId = fromId;
  }

   setToDelete(toDelete) {
    this.toDelete = toDelete;
  }

   setFromDelete(fromDelete) {
    this.fromDelete = fromDelete;
  }

   setToRead(toRead) {
    this.toRead = toRead;
  }

   setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }

   setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }

   async save() {
    const { id, subject, content, toId, fromId } = this;
    await _connection2.default.execute(
      `INSERT INTO Emails (id, subject, content, toId, fromId) VALUES ('${id}', '${subject}', '${content}', '${toId}', '${fromId}')`
    );

    const usersEmails = new UsersEmails({ userId: toId, emailId: id });
    await usersEmails.save();

    if (fromId && this.fromDelete === false) {
      const usersEmails2 = new UsersEmails({ userId: fromId, emailId: id });
      await usersEmails2.save();
    }
  }

   async update() {
    const { id, subject, content, toId, fromId, toDelete, fromDelete, toRead } = this;
    await _connection2.default.execute(
      `UPDATE Emails SET subject = '${subject}', content = '${content}', toId = '${toId}', fromId = '${fromId}', toDelete = '${toDelete}', fromDelete = '${fromDelete}', toRead = '${toRead}' WHERE id = '${id}'`
    );
  }

   async delete() {
    const { id } = this;
    await _connection2.default.execute(`DELETE FROM Emails WHERE id = '${id}'`);
  }
}









class UsersEmails  {
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    userId,
    emailId,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    this.id = id;
    this.userId = userId;
    this.emailId = emailId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   getID() {
    return this.id;
  }

   getUserId() {
    return this.userId;
  }

   getEmailId() {
    return this.emailId;
  }

   getCreatedAt() {
    return this.createdAt;
  }

   getUpdatedAt() {
    return this.updatedAt;
  }

   setUserId(userId) {
    this.userId = userId;
  }

   setEmailId(emailId) {
    this.emailId = emailId;
  }

   setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }

   setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }

   async save() {
    const { id, userId, emailId } = this;
    await _connection2.default.execute(
      `INSERT INTO UsersEmails (id, userId, emailId) VALUES ('${id}', '${userId}', '${emailId}')`
    );
  }

   async update() {
    const { id, userId, emailId } = this;
    await _connection2.default.execute(
      `UPDATE UsersEmails SET userId = '${userId}', emailId = '${emailId}' WHERE id = '${id}'`
    );
  }

   async delete() {
    const { id } = this;
    await _connection2.default.execute(`DELETE FROM UsersEmails WHERE id = '${id}'`);
  }
}

exports.Email = Email; exports.UsersEmails = UsersEmails;