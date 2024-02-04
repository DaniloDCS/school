"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _functions = require('../../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );
var _connection = require('../../connection'); var _connection2 = _interopRequireDefault(_connection);










class History  {
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    userId,
    periods = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;History.prototype.__init.call(this);History.prototype.__init2.call(this);History.prototype.__init3.call(this);History.prototype.__init4.call(this);History.prototype.__init5.call(this);History.prototype.__init6.call(this);History.prototype.__init7.call(this);History.prototype.__init8.call(this);History.prototype.__init9.call(this);History.prototype.__init10.call(this);History.prototype.__init11.call(this);History.prototype.__init12.call(this);
    this.id = id;
    this.userId = userId;
    this.periods = (typeof periods === "string") ? JSON.parse(periods) : periods;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init() {this.getId = () => this.id}
   __init2() {this.getUserId = () => this.userId}
   __init3() {this.getPeriods = () => this.periods}
   __init4() {this.getCreatedAt = () => this.createdAt}
   __init5() {this.getUpdatedAt = () => this.updatedAt}

   __init6() {this.setId = (id) => this.id = id}
   __init7() {this.setUserId = (userId) => this.userId = userId}
   __init8() {this.setPeriods = (periods) => this.periods = periods}
   __init9() {this.setCreatedAt = (createdAt) => this.createdAt = createdAt}
   __init10() {this.setUpdatedAt = (updatedAt) => this.updatedAt = updatedAt}  

   __init11() {this.addPeriod = (period) => this.periods.push(period)}
   __init12() {this.updatePeriod = (period) => {
    const index = this.periods.findIndex((item) => item.id === period.id);
    this.periods[index] = period;
  }}

   async save() {
    await _connection2.default.execute(
      `INSERT INTO History (id, userId) VALUES ('${this.id}', '${this.userId}')`
    );
  }

   async update() {
    await _connection2.default.execute(
      `UPDATE History SET userId = '${this.userId}', periods = '${JSON.stringify(this.periods)}' WHERE id = '${this.id}'`
    );
  }
}



















class Period  {
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    periodId,
    name,
    status = "active",
    startAt = new Date(),
    endAt = new Date(),
    frquencies = 0,
    cra = 0,
    mc = 0,
    iech = 0,
    iepl = 0,
    iea = 0,
    disciplines = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Period.prototype.__init13.call(this);Period.prototype.__init14.call(this);Period.prototype.__init15.call(this);Period.prototype.__init16.call(this);Period.prototype.__init17.call(this);Period.prototype.__init18.call(this);Period.prototype.__init19.call(this);Period.prototype.__init20.call(this);Period.prototype.__init21.call(this);Period.prototype.__init22.call(this);Period.prototype.__init23.call(this);Period.prototype.__init24.call(this);Period.prototype.__init25.call(this);Period.prototype.__init26.call(this);Period.prototype.__init27.call(this);Period.prototype.__init28.call(this);Period.prototype.__init29.call(this);Period.prototype.__init30.call(this);Period.prototype.__init31.call(this);Period.prototype.__init32.call(this);Period.prototype.__init33.call(this);Period.prototype.__init34.call(this);Period.prototype.__init35.call(this);Period.prototype.__init36.call(this);Period.prototype.__init37.call(this);Period.prototype.__init38.call(this);Period.prototype.__init39.call(this);Period.prototype.__init40.call(this);Period.prototype.__init41.call(this);Period.prototype.__init42.call(this);Period.prototype.__init43.call(this);Period.prototype.__init44.call(this);
    this.id = id;
    this.periodId = periodId;
    this.name = name;
    this.status = status;
    this.startAt = startAt;
    this.endAt = endAt;
    this.frquencies = frquencies;
    this.cra = cra;
    this.mc = mc;
    this.iech = iech;
    this.iepl = iepl;
    this.iea = iea;
    this.disciplines = disciplines;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init13() {this.getId = () => this.id}
   __init14() {this.getPeriodId = () => this.periodId}
   __init15() {this.getName = () => this.name}
   __init16() {this.getStatus = () => this.status}
   __init17() {this.getStartAt = () => this.startAt}
   __init18() {this.getEndAt = () => this.endAt}
   __init19() {this.getFrequencies = () => this.frquencies}
   __init20() {this.getCra = () => this.cra}
   __init21() {this.getMc = () => this.mc}
   __init22() {this.getIech = () => this.iech}
   __init23() {this.getIepl = () => this.iepl}
   __init24() {this.getIea = () => this.iea}
   __init25() {this.getDisciplines = () => this.disciplines}
   __init26() {this.getCreatedAt = () => this.createdAt}
   __init27() {this.getUpdatedAt = () => this.updatedAt}

   __init28() {this.setId = (id) => this.id = id}
   __init29() {this.setPeriodId = (periodId) => this.periodId = periodId}
   __init30() {this.setName = (name) => this.name = name}
   __init31() {this.setStatus = (status) => this.status = status}
   __init32() {this.setStartAt = (startAt) => this.startAt = startAt}
   __init33() {this.setEndAt = (endAt) => this.endAt = endAt}
   __init34() {this.setFrequenciesCompleted = (frquencies) => this.frquencies = frquencies}
   __init35() {this.setCra = (cra) => this.cra = cra}
   __init36() {this.setMc = (mc) => this.mc = mc}
   __init37() {this.setIech = (iech) => this.iech = iech}
   __init38() {this.setIepl = (iepl) => this.iepl = iepl}
   __init39() {this.setIea = (iea) => this.iea = iea}
   __init40() {this.setDisciplines = (disciplines) => this.disciplines = disciplines}
   __init41() {this.setCreatedAt = (createdAt) => this.createdAt = createdAt}
   __init42() {this.setUpdatedAt = (updatedAt) => this.updatedAt = updatedAt}
  
   __init43() {this.addDiscipline = (discipline) => this.disciplines.push(discipline)}

   __init44() {this.updateDiscipline = (discipline) => {
    const index = this.disciplines.findIndex((item) => item.getId() === discipline.getId());
    this.disciplines[index] = discipline;
  }} 
}














class Discipline  {
  
  
  
  
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    name,
    teachers = [],
    status = "cursando",
    frquencies = 0,
    frquenciesPercent = 0,
    media = 0,
    bulletin = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Discipline.prototype.__init45.call(this);Discipline.prototype.__init46.call(this);Discipline.prototype.__init47.call(this);Discipline.prototype.__init48.call(this);Discipline.prototype.__init49.call(this);Discipline.prototype.__init50.call(this);Discipline.prototype.__init51.call(this);Discipline.prototype.__init52.call(this);Discipline.prototype.__init53.call(this);Discipline.prototype.__init54.call(this);Discipline.prototype.__init55.call(this);Discipline.prototype.__init56.call(this);Discipline.prototype.__init57.call(this);Discipline.prototype.__init58.call(this);Discipline.prototype.__init59.call(this);Discipline.prototype.__init60.call(this);Discipline.prototype.__init61.call(this);Discipline.prototype.__init62.call(this);Discipline.prototype.__init63.call(this);
    this.id = id;
    this.name = name;
    this.teachers = teachers;
    this.status = status;
    this.frquencies = frquencies;
    this.frquenciesPercent = frquenciesPercent;
    this.media = media;
    this.bulletin = bulletin;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init45() {this.getId = () => this.id}
   __init46() {this.getName = () => this.name}
   __init47() {this.getTeachers = () => this.teachers}
   __init48() {this.getStatus = () => this.status}
   __init49() {this.getFrequencies = () => this.frquencies}
   __init50() {this.getFrequenciesPercent = () => this.frquenciesPercent}
   __init51() {this.getMedia = () => this.media}
   __init52() {this.getBulletin = () => this.bulletin}
   __init53() {this.getCreatedAt = () => this.createdAt}
   __init54() {this.getUpdatedAt = () => this.updatedAt}

   __init55() {this.setId = (id) => this.id = id}
   __init56() {this.setName = (name) => this.name = name}
   __init57() {this.setTeachers = (teachers) => this.teachers = teachers}
   __init58() {this.setStatus = (status) => this.status = status}
   __init59() {this.setFrequenciesCompleted = (frquencies, disciplineWorkloadTotal) => {
    this.frquencies = frquencies;
    this.frquenciesPercent = (Number(frquencies) / Number(disciplineWorkloadTotal)) * 100;
  }}
   __init60() {this.setMedia = (media) => this.media = media}
   __init61() {this.setBulletin = (bulletin) => this.bulletin = bulletin}
   __init62() {this.setCreatedAt = (createdAt) => this.createdAt = createdAt}
   __init63() {this.setUpdatedAt = (updatedAt) => this.updatedAt = updatedAt}
}








class Bulletin  {
  
  
  
  

  constructor({ id = IDgenerator(), name, value, weight }) {;Bulletin.prototype.__init64.call(this);Bulletin.prototype.__init65.call(this);Bulletin.prototype.__init66.call(this);Bulletin.prototype.__init67.call(this);Bulletin.prototype.__init68.call(this);Bulletin.prototype.__init69.call(this);Bulletin.prototype.__init70.call(this);Bulletin.prototype.__init71.call(this);
    this.id = id;
    this.name = name;
    this.value = value;
    this.weight = weight;
  }

   __init64() {this.getId = () => this.id}
   __init65() {this.getName = () => this.name}
   __init66() {this.getValue = () => this.value}
   __init67() {this.getWeight = () => this.weight}

   __init68() {this.setId = (id) => this.id = id}
   __init69() {this.setName = (name) => this.name = name}
   __init70() {this.setValue = (value) => this.value = value}
   __init71() {this.setWeight = (weight) => this.weight = weight}
}

exports.History = History; exports.Period = Period; exports.Discipline = Discipline; exports.Bulletin = Bulletin;