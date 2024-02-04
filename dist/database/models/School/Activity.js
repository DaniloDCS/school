"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _functions = require('../../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );








class Activity  {
  
  
  
  

  constructor({
    id = IDgenerator(),
    name,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   getId() {
    return this.id;
  }

   getName() {
    return this.name;
  }

   getCreatedAt() {
    return this.createdAt;
  }

   getUpdatedAt() {
    return this.updatedAt;
  }

   setName(name) {
    this.name = name;
    this.setUpdatedAt(new Date());
  }

   setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }
}

exports. default = Activity;
