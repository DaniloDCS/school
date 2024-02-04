"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _functions = require('../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );
var _connection = require('../connection'); var _connection2 = _interopRequireDefault(_connection);
var _Email = require('./Email');
var _User = require('./User'); var _User2 = _interopRequireDefault(_User);











class FormsShares  {
  
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    formId,
    authorId,
    userId,
    permission = "view",
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    this.id = id;
    this.formId = formId;
    this.authorId = authorId;
    this.userId = userId;
    this.permission = permission;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   getId() {
    return this.id;
  }

   getFormId() {
    return this.formId;
  }

   getAuthorId() {
    return this.authorId;
  }

   getUserId() {
    return this.userId;
  }

   getPermission() {
    return this.permission;
  }

   getCreatedAt() {
    return this.createdAt;
  }

   getUpdatedAt() {
    return this.updatedAt;
  }

   setFormId(formId) {
    this.formId = formId;
  }

   setAuthorId(authorId) {
    this.authorId = authorId;
  }

   setUserId(userId) {
    this.userId = userId;
  }

   setPermission(permission) {
    this.permission = permission;
  }

   setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }

   setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }

   async save() {
    await _connection2.default.execute(
      `INSERT INTO FormsShares (id, formId, authorId, userId, permission) VALUES ("${this.id}", "${this.formId}", "${this.authorId}", "${this.userId}", "${this.permission}")`
    );

    const u = await _connection2.default.execute(
      `SELECT * FROM Users WHERE id = "${this.userId}"`
    );

    const user = u[0] ? new (0, _User2.default)(u[0]) : null;

    const query = await _connection2.default.execute(
      `SELECT id FROM Users WHERE username = "@stuudy"`
    );

    const email = new (0, _Email.Email)({
      fromId: query[0].id,
      toId: this.userId,
      subject: "Compartilhamento de formulário",
      content: `O usuário ${_optionalChain([user, 'optionalAccess', _ => _.getName, 'call', _2 => _2()])} compartilhou um formulário com você. <br> <a href="/apps/forms/${
        this.permission == "edit" ? "e" : "v"
      }/${this.formId}">Clique aqui</a> para acessar o formulário.`,
      fromDelete: true,
    });

    await email.save();
  }

   async update() {
    await _connection2.default.execute(
      `UPDATE FormsShares SET permission = "${this.permission}" WHERE id = "${this.id}"`
    );
  }

   async delete() {
    await _connection2.default.execute(`DELETE FROM FormsShares WHERE id = "${this.id}"`);
  }
}











class Form  {
  
  
  
  
  
  
  

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
  }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.userId = userId;
    this.configs = configs;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   getId() {
    return this.id;
  }

   getTitle() {
    return this.title;
  }

   getContent() {
    return this.content;
  }

   getUserId() {
    return this.userId;
  }

   getConfigs()














 {
    return JSON.parse(this.configs);
  }

   getCreatedAt() {
    return this.createdAt;
  }

   getUpdatedAt() {
    return this.updatedAt;
  }

   setTitle(title) {
    this.title = title;
  }

   setContent(content) {
    this.content = content;
  }

   setUserId(userId) {
    this.userId = userId;
  }

   setConfigs(configs














) {
    this.configs = JSON.stringify(configs);
  }

   setCreatedAt(createdAt) {
    this.createdAt = createdAt;
  }

   setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }

   async save() {
    await _connection2.default.execute(
      `INSERT INTO Forms (id, userId) VALUES ("${this.id}", "${this.userId}")`
    );
  }

   async update() {
    await _connection2.default.execute(
      `UPDATE Forms SET title = "${this.title}", content = "${this.content}" WHERE id = "${this.id}"`
    );
  }

   async delete() {
    await _connection2.default.execute(
      `DELETE FROM Forms WHERE id = "${this.id}" AND userId = "${this.userId}"`
    );
  }
}

exports.Form = Form; exports.FormsShares = FormsShares;
