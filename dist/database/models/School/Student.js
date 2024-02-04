"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _functions = require('../../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );
var _connection = require('../../connection'); var _connection2 = _interopRequireDefault(_connection);







var _History = require('./History');










class Student  {
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    userId,
    frequency = [],
    bulletin = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Student.prototype.__init.call(this);Student.prototype.__init2.call(this);Student.prototype.__init3.call(this);Student.prototype.__init4.call(this);Student.prototype.__init5.call(this);Student.prototype.__init6.call(this);
    this.id = id;
    this.userId = userId;
    this.frequency = (typeof frequency === "string" ? JSON.parse(frequency) : frequency);
    this.bulletin = (typeof bulletin === "string" ? JSON.parse(bulletin) : bulletin);
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init() {this.getId = () => this.id}
   __init2() {this.getuserId = () => this.userId}
   __init3() {this.getFrequency = () => this.frequency}
   __init4() {this.getBulletin = () => this.bulletin}
   __init5() {this.getCreatedAt = () => this.createdAt}
   __init6() {this.getUpdatedAt = () => this.updatedAt}

   setuserId(userId) {
    this.userId = userId;
    this.setUpdatedAt(new Date());
  }

   async setFrequency(frequency, student, _discipline, _class) {
    this.frequency.push(frequency);

    // atualizar o historico do aluno

    const query = await _connection2.default.execute(
      `SELECT * FROM History WHERE userId = '${student.getuserId()}'`
    );

    if (query[0] === undefined) {
      null;
    } else {
      let history = new (0, _History.History)(query[0]);

      let historicPeriod = history.getPeriods().find((period) => period.periodId === _discipline.periodId);

      if (historicPeriod) {
        const period = new (0, _History.Period)(historicPeriod);

        let historicDiscipline = period.disciplines.find( (discipline) => discipline.name === discipline.name );

        if (historicDiscipline) {
          const discipline = new (0, _History.Discipline)(historicDiscipline);
          discipline.setFrequenciesCompleted(Number(discipline.getFrequencies()) + Number(_class.getQuantity()), _discipline.getWorkload());
        }

        history.updatePeriod(period);
      }

      await history.update();
    }

    this.setUpdatedAt(new Date());
  }

   setFrequencyList(frequency) {
    this.frequency = frequency;
    this.setUpdatedAt(new Date());
  }

   setBulletin(bulletin) {
    this.bulletin = bulletin;
    this.setUpdatedAt(new Date());
  }

   setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }
}










class Frequency  {
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    date,
    classId,
    status,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Frequency.prototype.__init7.call(this);Frequency.prototype.__init8.call(this);Frequency.prototype.__init9.call(this);Frequency.prototype.__init10.call(this);Frequency.prototype.__init11.call(this);Frequency.prototype.__init12.call(this);
    this.id = id;
    this.date = date;
    this.classId = classId;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init7() {this.getId = () => this.id}
   __init8() {this.getDate = () => this.date}
   __init9() {this.getClassId = () => this.classId}
   __init10() {this.getStatus = () => this.status}
   __init11() {this.getCreatedAt = () => this.createdAt}
   __init12() {this.getUpdatedAt = () => this.updatedAt}

   setDate(date) {
    this.date = date;
    this.setUpdatedAt(new Date());
  }

   setClassId(classId) {
    this.classId = classId;
    this.setUpdatedAt(new Date());
  }

   setStatus(status) {
    this.status = status;
    this.setUpdatedAt(new Date());
  }

   setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }
}











class Bulletin  {
  
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    title,
    description,
    value,
    weight,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Bulletin.prototype.__init13.call(this);Bulletin.prototype.__init14.call(this);Bulletin.prototype.__init15.call(this);Bulletin.prototype.__init16.call(this);Bulletin.prototype.__init17.call(this);Bulletin.prototype.__init18.call(this);Bulletin.prototype.__init19.call(this);
    this.id = id;
    this.title = title;
    this.description = description;
    this.value = value;
    this.weight = weight;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init13() {this.getId = () => this.id}
   __init14() {this.getTitle = () => this.title}
   __init15() {this.getDescription = () => this.description}
   __init16() {this.getValue = () => this.value}
   __init17() {this.getWeight = () => this.weight}
   __init18() {this.getCreatedAt = () => this.createdAt}
   __init19() {this.getUpdatedAt = () => this.updatedAt}

   setTitle(title) {
    this.title = title;
    this.setUpdatedAt(new Date());
  }

   setDescription(description) {
    this.description = description;
    this.setUpdatedAt(new Date());
  }

   setValue(value) {
    this.value = value;
    this.setUpdatedAt(new Date());
  }

   setWeight(weight) {
    this.weight = weight;
    this.setUpdatedAt(new Date());
  }

   setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }
}

exports.Student = Student; exports.Frequency = Frequency; exports.Bulletin = Bulletin;
