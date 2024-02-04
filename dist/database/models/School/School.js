"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _functions = require('../../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );
var _connection = require('../../connection'); var _connection2 = _interopRequireDefault(_connection);
var _User = require('../User'); var _User2 = _interopRequireDefault(_User);














class School  {
  
  
  
  
  
  
  
  
  
  

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
  }) {;School.prototype.__init.call(this);School.prototype.__init2.call(this);School.prototype.__init3.call(this);School.prototype.__init4.call(this);School.prototype.__init5.call(this);School.prototype.__init6.call(this);School.prototype.__init7.call(this);School.prototype.__init8.call(this);School.prototype.__init9.call(this);School.prototype.__init10.call(this);School.prototype.__init11.call(this);School.prototype.__init12.call(this);School.prototype.__init13.call(this);School.prototype.__init14.call(this);School.prototype.__init15.call(this);School.prototype.__init16.call(this);School.prototype.__init17.call(this);School.prototype.__init18.call(this);School.prototype.__init19.call(this);School.prototype.__init20.call(this);
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

   __init() {this.getId = () => this.id}
   __init2() {this.getName = () => this.name}
   __init3() {this.getAvatar = () => this.avatar}
   __init4() {this.getEmail = () => this.email}
   __init5() {this.getPhone = () => this.phone}
   __init6() {this.getStatus = () => this.status}
   __init7() {this.getMessage = () => this.message}
   __init8() {this.getPrincipalId = () => this.principalId}
   __init9() {this.getCreatedAt = () => this.createdAt}
   __init10() {this.getUpdatedAt = () => this.updatedAt}

   __init11() {this.setId = (id) => (this.id = id)}
   __init12() {this.setName = (name) => (this.name = name)}
   __init13() {this.setAvatar = (avatar) => (this.avatar = avatar)}
   __init14() {this.setEmail = (email) => (this.email = email)}
   __init15() {this.setPhone = (phone) => (this.phone = phone)}
   __init16() {this.setStatus = (status) => (this.status = status)}
   __init17() {this.setMessage = (message) => (this.message = message)}
   __init18() {this.setPrincipalId = (principalId) => (this.principalId = principalId)}
   __init19() {this.setCreatedAt = (createdAt) => (this.createdAt = createdAt)}
   __init20() {this.setUpdatedAt = (updatedAt) => (this.updatedAt = updatedAt)}

   async save() {
    await _connection2.default.execute(
      `INSERT INTO Schools (id, name, avatar, email, phone, status, message, principalId, createdAt, updatedAt) VALUES ("${this.id}", "${this.name}", "${this.avatar}", "${this.email}", "${this.phone}", "${this.status}", "${this.message}", "${this.principalId}", "${this.createdAt}", "${this.updatedAt}")`
    );

    const school = new (0, _User2.default)({
      username: "@" + this.name.toLowerCase().replace(/\s/g, ""),
      name: this.name,
      email: this.name.toLowerCase().replace(/\s/g, "") + "@stuudy.school.com",
      password: "stuudy",
      role: 10
    });

    await school.save()

  }

   async update() {
    await _connection2.default.execute(
      `UPDATE Schools SET name="${this.getName()}", avatar="${this.getAvatar()}", email="${this.getEmail()}", phone="${this.getPhone()}", status="${this.getStatus()}", message="${this.getMessage()}", principalId="${this.getPrincipalId()}", updatedAt="${this.getUpdatedAt()}" WHERE id="${this.getId()}"`
    );
  }

   async delete() {
    await _connection2.default.execute(`DELETE FROM Schools WHERE id="${this.id}"`);
    return true;
  }

   async setUsers(users) {
    await _connection2.default.execute(`INSERT INTO SchoolsUsers (id, schoolId, userId) VALUES ${users.map((user) => `("${IDgenerator()}", "${this.id}", "${user.getId()}")`).join(", ")}`);
  }  
}

exports. default = School;
