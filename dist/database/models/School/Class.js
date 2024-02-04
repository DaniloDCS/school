"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _functions = require('../../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );












class Class  {
  
  
  
  
  
  
  
  

  constructor({
    id = IDgenerator(),
    title,
    content,
    quantity,
    date,
    teacherId,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {;Class.prototype.__init.call(this);Class.prototype.__init2.call(this);Class.prototype.__init3.call(this);Class.prototype.__init4.call(this);Class.prototype.__init5.call(this);Class.prototype.__init6.call(this);Class.prototype.__init7.call(this);Class.prototype.__init8.call(this);
    this.id = id;
    this.title = title;
    this.content = content;
    this.quantity = quantity;
    this.date = date;
    this.teacherId = teacherId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   __init() {this.getId = () => this.id}
   __init2() {this.getTitle = () => this.title}
   __init3() {this.getContent = () => this.content}
   __init4() {this.getQuantity = () => this.quantity}
   __init5() {this.getDate = () => this.date}
   __init6() {this.getTeacherId = () => this.teacherId}
   __init7() {this.getCreatedAt = () => this.createdAt}
   __init8() {this.getUpdatedAt = () => this.updatedAt}


   setName(title) {
    this.title = title;
    this.setUpdatedAt(new Date());
  }

   setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }
}

exports. default = Class;
