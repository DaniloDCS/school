"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _functions = require('../../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );
var _connection = require('../../connection'); var _connection2 = _interopRequireDefault(_connection);











class Classroom  {
  
  
  
  
  
  
  

  constructor({ id = IDgenerator(), name, status = 'active', periodId, courseId, createdAt = new Date(), updatedAt = new Date() }) {;Classroom.prototype.__init.call(this);Classroom.prototype.__init2.call(this);Classroom.prototype.__init3.call(this);Classroom.prototype.__init4.call(this);Classroom.prototype.__init5.call(this);Classroom.prototype.__init6.call(this);Classroom.prototype.__init7.call(this);Classroom.prototype.__init8.call(this);Classroom.prototype.__init9.call(this);Classroom.prototype.__init10.call(this);Classroom.prototype.__init11.call(this);Classroom.prototype.__init12.call(this);Classroom.prototype.__init13.call(this);Classroom.prototype.__init14.call(this);
    this.id = id;
    this.name = name;
    this.status = status || "active";
    this.courseId = courseId;
    this.periodId = periodId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init() {this.getId = () => this.id || ""}
   __init2() {this.getName = () => this.name}
   __init3() {this.getStatus = () => this.status}
   __init4() {this.getCourseId = () => this.courseId || ""}
   __init5() {this.getPeriodId = () => this.periodId || ""}
   __init6() {this.getCreatedAt = () => this.createdAt || new Date()}
   __init7() {this.getUpdatedAt = () => this.updatedAt || new Date()}

   __init8() {this.setId = (id) => (this.id = id)}
   __init9() {this.setName = (name) => (this.name = name)}
   __init10() {this.setStatus = (status) => (this.status = status)}
   __init11() {this.setCourseId = (courseId) => (this.courseId = courseId)}
   __init12() {this.setPeriodId = (periodId) => (this.periodId = periodId)}
   __init13() {this.setCreatedAt = (createdAt) => (this.createdAt = createdAt)}
   __init14() {this.setUpdatedAt = (updatedAt) => (this.updatedAt = updatedAt)}

   async save() {
    const classroom = new Classroom(this);
    await _connection2.default.execute(
      `INSERT INTO Classrooms (id, name, status, periodId, courseId, createdAt, updatedAt) VALUES ('${classroom.getId()}', '${classroom.getName()}', '${classroom.getStatus()}', '${classroom.getPeriodId()}', '${classroom.getCourseId()}', '${classroom.getCreatedAt()}', '${classroom.getUpdatedAt()}')`
    );
    return classroom;
  }

   async update() {
    const classroom = new Classroom(this);
    await _connection2.default.execute(
      `UPDATE Classrooms SET name = '${classroom.getName()}', status = '${classroom.getStatus()}', periodId = '${classroom.getPeriodId()}', courseId = '${classroom.getCourseId()}', updatedAt = '${classroom.getUpdatedAt()}' WHERE id = '${classroom.getId()}'`
    );
    return classroom;
  }

   async delete() {
    const id = this.getId();
    await _connection2.default.execute(
      `DELETE FROM Classrooms WHERE id = '${id}'`
    );
    return true;
  }
}

exports. default = Classroom;
