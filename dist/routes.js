"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _rules = require('./database/rules');

var _authenticateroutes = require('./routes/authenticate.routes'); var _authenticateroutes2 = _interopRequireDefault(_authenticateroutes);
var _geralroutes = require('./routes/geral.routes'); var _geralroutes2 = _interopRequireDefault(_geralroutes);
var _adminroutes = require('./routes/admin.routes'); var _adminroutes2 = _interopRequireDefault(_adminroutes);
var _appsroutes = require('./routes/apps.routes'); var _appsroutes2 = _interopRequireDefault(_appsroutes);
var _schoolroutes = require('./routes/school.routes'); var _schoolroutes2 = _interopRequireDefault(_schoolroutes);

class Routes {
  

  constructor() {
    this.router = _express.Router.call(void 0, );
    this.routes();
  }

   routes() { 
    this.router.use(_authenticateroutes2.default);
    this.router.use(_geralroutes2.default);    
    this.router.use('/admin', _rules.rules.auth, _rules.rules.admin, _adminroutes2.default);
    this.router.use('/apps', _rules.rules.auth, _appsroutes2.default);
    this.router.use('/school', _rules.rules.auth, _schoolroutes2.default);
  }
}

exports. default = new Routes().router;
