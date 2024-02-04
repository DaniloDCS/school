"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _functions = require('../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );
var _connection = require('../connection'); var _connection2 = _interopRequireDefault(_connection);









class Schedule  {
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    userId,
    events = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Schedule.prototype.__init.call(this);Schedule.prototype.__init2.call(this);Schedule.prototype.__init3.call(this);Schedule.prototype.__init4.call(this);Schedule.prototype.__init5.call(this);Schedule.prototype.__init6.call(this);Schedule.prototype.__init7.call(this);Schedule.prototype.__init8.call(this);Schedule.prototype.__init9.call(this);Schedule.prototype.__init10.call(this);Schedule.prototype.__init11.call(this);Schedule.prototype.__init12.call(this);Schedule.prototype.__init13.call(this);
    this.id = id;
    this.userId = userId;
    this.events = events;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init() {this.getId = () => this.id}

   getEvents() {
    if (String(this.events) == "[]") this.events = [];
    else if (typeof this.events == "string")
      this.events = JSON.parse(this.events);
    return this.events;
  }

   __init2() {this.getUserId = () => this.userId}

   __init3() {this.getCreatedAt = () => this.createdAt}

   __init4() {this.getUpdatedAt = () => this.updatedAt}

   __init5() {this.setId = (id) => this.id = id}

   __init6() {this.setEvents = (events) => this.events = events}
  
   __init7() {this.setEvent = (event) => this.events = [...this.getEvents(), event]}

   __init8() {this.getEvent = (id) => {
    const event = this.getEvents().filter((event) => event.id === id);
    return event[0];
  }}

   __init9() {this.removeEvent = (id) => this.events = this.getEvents().filter((event) => event.id !== id)}

   __init10() {this.updateEvent = (id, event) => {
    this.events = this.getEvents().map((event) => {
      if (event.id === id) return event;
      else return event;
    });
  }}

   __init11() {this.setUserId = (userId) => this.userId = userId}

   __init12() {this.setCreatedAt = (createdAt) => this.createdAt = createdAt}

   __init13() {this.setUpdatedAt = (updatedAt) => this.updatedAt = updatedAt}

   async save() {
    await _connection2.default.execute(
      `INSERT INTO Schedule (
      id,
      userId,
      events,
      createdAt,
      updatedAt
    ) VALUES (
      "${this.id}",
      "${this.userId}",
      '${JSON.stringify(this.events)}',
      "${this.createdAt}",
      "${this.updatedAt}"
    )`
    );
  }

   async update() {
    await _connection2.default.execute(`UPDATE Schedule SET events = '${JSON.stringify(this.events)}' WHERE id = '${this.id}'`);
  }

   async delete() {
    await _connection2.default.execute(`DELETE FROM Schedule WHERE id = '${this.id}'`);
  }
}














class Event  {
  
  
  
  
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    title,
    description = "Meu evento",
    type = "event",
    color = "#2196f3",
    dateStart,
    dateFinish = new Date(),
    timeStart = "00:00",
    timeFinish = "00:00",
    createdAt = new Date(),
  }) {;Event.prototype.__init14.call(this);Event.prototype.__init15.call(this);Event.prototype.__init16.call(this);Event.prototype.__init17.call(this);Event.prototype.__init18.call(this);Event.prototype.__init19.call(this);Event.prototype.__init20.call(this);Event.prototype.__init21.call(this);Event.prototype.__init22.call(this);Event.prototype.__init23.call(this);Event.prototype.__init24.call(this);Event.prototype.__init25.call(this);Event.prototype.__init26.call(this);Event.prototype.__init27.call(this);Event.prototype.__init28.call(this);Event.prototype.__init29.call(this);Event.prototype.__init30.call(this);Event.prototype.__init31.call(this);Event.prototype.__init32.call(this);Event.prototype.__init33.call(this);
    this.id = id;
    this.title = title;
    this.description = description;
    this.type = type;
    this.color = color;
    this.dateStart = dateStart;
    this.dateFinish = dateFinish;
    this.timeStart = timeStart;
    this.timeFinish = timeFinish;
    this.createdAt = createdAt;
  }

   __init14() {this.getId = () => this.id}

   __init15() {this.getTitle = () => this.title}

   __init16() {this.getDescription = () => this.description}

   __init17() {this.getType = () => this.type}

   __init18() {this.getColor = () => this.color}

   __init19() {this.getDateStart = () => this.dateStart}

   __init20() {this.getDateFinish = () => this.dateFinish}

   __init21() {this.getTimeStart = () => this.timeStart}

   __init22() {this.getTimeFinish = () => this.timeFinish}

   __init23() {this.getCreatedAt = () => this.createdAt}

   __init24() {this.setId = (id) => this.id = id}

   __init25() {this.setTitle = (title) => this.title = title}

   __init26() {this.setDescription = (description) => this.description = description}

   __init27() {this.setType = (type) => this.type = type}

   __init28() {this.setColor = (color) => this.color = color}

   __init29() {this.setDateStart = (dateStart) => this.dateStart = dateStart}

   __init30() {this.setDateFinish = (dateFinish) => this.dateFinish = dateFinish}

   __init31() {this.setTimeStart = (timeStart) => this.timeStart = timeStart}

   __init32() {this.setTimeFinish = (timeFinish) => this.timeFinish = timeFinish}

   __init33() {this.setCreatedAt = (createdAt) => this.createdAt = createdAt}
}

exports.Schedule = Schedule; exports.Event = Event;