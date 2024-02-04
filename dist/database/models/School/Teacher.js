"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _functions = require('../../../assets/functions'); var _functions2 = _interopRequireDefault(_functions);
const { IDgenerator } = _functions2.default.call(void 0, );








class Teacher  {
  
  
  
  

  constructor({
    id = IDgenerator(),
    userId,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    this.id = id;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

   getId() {
    return this.id;
  }

   getUserId() {
    return this.userId;
  }

   getCreatedAt() {
    return this.createdAt;
  }

   getUpdatedAt() {
    return this.updatedAt;
  }

   setuserId(userId) {
    this.userId = userId;
    this.setUpdatedAt(new Date());
  }

   setUpdatedAt(updatedAt) {
    this.updatedAt = updatedAt;
  }
}

exports. default = Teacher;
