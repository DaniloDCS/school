"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _connection = require('../../connection'); var _connection2 = _interopRequireDefault(_connection);
var _functions = require('../../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );









class Grade  {
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    schoolId = "",
    periods = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Grade.prototype.__init.call(this);Grade.prototype.__init2.call(this);Grade.prototype.__init3.call(this);Grade.prototype.__init4.call(this);Grade.prototype.__init5.call(this);Grade.prototype.__init6.call(this);Grade.prototype.__init7.call(this);Grade.prototype.__init8.call(this);Grade.prototype.__init9.call(this);Grade.prototype.__init10.call(this);
    this.id = id;
    this.schoolId = schoolId;
    this.periods = periods;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init() {this.getId = () => this.id || ""}
   __init2() {this.getSchoolId = () => this.schoolId}
   __init3() {this.getPeriods = () => this.periods}
   __init4() {this.getCreatedAt = () => this.createdAt || new Date()}
   __init5() {this.getUpdatedAt = () => this.updatedAt || new Date()}

   __init6() {this.setId = (id) => this.id = id}
   __init7() {this.setSchoolId = (schoolId) => this.schoolId = schoolId}
   __init8() {this.setPeriods = (periods) => this.periods = periods}
   __init9() {this.setCreatedAt = (createdAt) => this.createdAt = createdAt}
   __init10() {this.setUpdatedAt = (updatedAt) => this.updatedAt = updatedAt}

   async save() {
    const grade = new Grade(this);
    await _connection2.default.execute(`INSERT INTO grades (id, schoolId, periods, createdAt, updatedAt) VALUES ('${this.id}', '${this.schoolId}', '${this.periods}', '${this.createdAt}', '${this.updatedAt}')`);
    return grade;
  }

   async update() {
    const grade = new Grade(this);
    await _connection2.default.execute(`UPDATE grades SET schoolId='${this.schoolId}', periods='${this.periods}', createdAt='${this.createdAt}', updatedAt='${this.updatedAt}' WHERE id='${this.id}'`);
    return grade;
  }

   async delete() {
    const grade = new Grade(this);
    await _connection2.default.execute(`DELETE FROM grades WHERE id='${this.id}'`);
    return grade;
  }
}









class Period  {
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    name = "",
    disciplines = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Period.prototype.__init11.call(this);Period.prototype.__init12.call(this);Period.prototype.__init13.call(this);Period.prototype.__init14.call(this);Period.prototype.__init15.call(this);Period.prototype.__init16.call(this);Period.prototype.__init17.call(this);Period.prototype.__init18.call(this);Period.prototype.__init19.call(this);Period.prototype.__init20.call(this);
    this.id = id;
    this.name = name;
    this.disciplines = disciplines;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init11() {this.getId = () => this.id || ""}
   __init12() {this.getName = () => this.name}
   __init13() {this.getDisciplines = () => this.disciplines}
   __init14() {this.getCreatedAt = () => this.createdAt || new Date()}
   __init15() {this.getUpdatedAt = () => this.updatedAt || new Date()}

   __init16() {this.setId = (id) => this.id = id}
   __init17() {this.setName = (name) => this.name = name}
   __init18() {this.setDisciplines = (disciplines) => this.disciplines = disciplines}
   __init19() {this.setCreatedAt = (createdAt) => this.createdAt = createdAt}
   __init20() {this.setUpdatedAt = (updatedAt) => this.updatedAt = updatedAt}
}











class Discipline  {
  
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    name = "",
    workload = 0,
    credits = 0,
    type = "",
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Discipline.prototype.__init21.call(this);Discipline.prototype.__init22.call(this);Discipline.prototype.__init23.call(this);Discipline.prototype.__init24.call(this);Discipline.prototype.__init25.call(this);Discipline.prototype.__init26.call(this);Discipline.prototype.__init27.call(this);Discipline.prototype.__init28.call(this);Discipline.prototype.__init29.call(this);Discipline.prototype.__init30.call(this);Discipline.prototype.__init31.call(this);Discipline.prototype.__init32.call(this);Discipline.prototype.__init33.call(this);Discipline.prototype.__init34.call(this);
    this.id = id;
    this.name = name;
    this.workload = workload;
    this.credits = credits;
    this.type = type;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init21() {this.getId = () => this.id || ""}
   __init22() {this.getName = () => this.name}
   __init23() {this.getWorkload = () => this.workload}
   __init24() {this.getCredits = () => this.credits}
   __init25() {this.getType = () => this.type}
   __init26() {this.getCreatedAt = () => this.createdAt || new Date()}
   __init27() {this.getUpdatedAt = () => this.updatedAt || new Date()}

   __init28() {this.setId = (id) => this.id = id}
   __init29() {this.setName = (name) => this.name = name}
   __init30() {this.setWorkload = (workload) => this.workload = workload}
   __init31() {this.setCredits = (credits) => this.credits = credits}
   __init32() {this.setType = (type) => this.type = type}
   __init33() {this.setCreatedAt = (createdAt) => this.createdAt = createdAt}
   __init34() {this.setUpdatedAt = (updatedAt) => this.updatedAt = updatedAt}
}

exports. default = Grade;