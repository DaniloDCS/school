"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _functions = require('../../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );
var _connection = require('../../connection'); var _connection2 = _interopRequireDefault(_connection);
var _Email = require('../Email');














class Period  {
  
  
  
  
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    name,
    status = "active",
    schoolId = "",
    courseId = "",
    userId = "",
    startAt = new Date(),
    endAt = new Date(),
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Period.prototype.__init.call(this);Period.prototype.__init2.call(this);Period.prototype.__init3.call(this);Period.prototype.__init4.call(this);Period.prototype.__init5.call(this);Period.prototype.__init6.call(this);Period.prototype.__init7.call(this);Period.prototype.__init8.call(this);Period.prototype.__init9.call(this);Period.prototype.__init10.call(this);Period.prototype.__init11.call(this);Period.prototype.__init12.call(this);Period.prototype.__init13.call(this);Period.prototype.__init14.call(this);Period.prototype.__init15.call(this);Period.prototype.__init16.call(this);Period.prototype.__init17.call(this);Period.prototype.__init18.call(this);Period.prototype.__init19.call(this);Period.prototype.__init20.call(this);
    this.id = id;
    this.name = name;
    this.status = status;
    this.schoolId = schoolId;
    this.courseId = courseId;
    this.userId = userId;
    this.startAt = startAt;
    this.endAt = endAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init() {this.getId = () => this.id}
   __init2() {this.getName = () => this.name}
   __init3() {this.getStatus = () => this.status}
   __init4() {this.getSchoolId = () => this.schoolId}
   __init5() {this.getCourseId = () => this.courseId}
   __init6() {this.getUserId = () => this.userId}
   __init7() {this.getStartAt = () => this.startAt}
   __init8() {this.getEndAt = () => this.endAt}
   __init9() {this.getCreatedAt = () => this.createdAt}
   __init10() {this.getUpdatedAt = () => this.updatedAt}

   __init11() {this.setId = (id) => this.id = id}
   __init12() {this.setName = (name) => this.name = name}
   __init13() {this.setStatus = (status) => this.status = status}
   __init14() {this.setSchoolId = (schoolId) => this.schoolId = schoolId}
   __init15() {this.setCourseId = (courseId) => this.courseId = courseId}
   __init16() {this.setUserId = (userId) => this.userId = userId}
   __init17() {this.setStartAt = (startAt) => this.startAt = startAt}
   __init18() {this.setEndAt = (endAt) => this.endAt = endAt}
   __init19() {this.setCreatedAt = (createdAt) => this.createdAt = createdAt}
   __init20() {this.setUpdatedAt = (updatedAt) => this.updatedAt = updatedAt}
  
   async save() {
    await _connection2.default.execute(
      `INSERT INTO Periods (id, name, status, schoolId, courseId, userId, startAt, endAt, createdAt, updatedAt) VALUES ('${this.id}', '${this.name}', '${this.status}', '${this.schoolId}', '${this.courseId}', '${this.userId}', '${this.startAt}', '${this.endAt}', '${this.createdAt}', '${this.updatedAt}')`
    );

    const course = await _connection2.default.execute(`SELECT * FROM Courses WHERE id = '${this.courseId}'`);
    const school = await _connection2.default.execute(`SELECT * FROM Schools WHERE id = '${this.schoolId}'`);

    const email = new (0, _Email.Email)({
      toId: course[0].coordinatorId,
      fromId: school[0].principalId,
      subject: "Um novo semestre foi criado! Prepare-se! 📆📘✨",
      content: `📆 Olá, coordenador(a)! Estamos animados em anunciar que um novo semestre <strong>${this.name}</strong> foi criado com sucesso do curso de <a href="/school/s/${this.courseId}"> <strong>${course[0].name.toUpperCase()}</strong>!</a> Estamos prontos para mais descobertas e conquistas acadêmicas juntos! 🌟✏️! <br> <a href="/school/p/${this.id}">Clique aqui</a> para ver mais detalhes.`,
    });
    await email.save();
  }

   async update() {
    const period = new Period(this);
    await _connection2.default.execute(
      `UPDATE Periods SET name = '${this.name}', status = '${this.status}', schoolId = '${this.schoolId}', courseId = '${this.courseId}', userId = '${this.userId}', startAt = '${this.startAt}', endAt = '${this.endAt}', createdAt = '${this.createdAt}', updatedAt = '${this.updatedAt}' WHERE id = '${this.id}'`
    );
    return period;
  }

   async delete() {
    await _connection2.default.execute(`DELETE FROM Periods WHERE id = "${this.id}"`);
    return true;
  }
}

exports. default = Period;