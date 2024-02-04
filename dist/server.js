"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _App = require('./App'); var _App2 = _interopRequireDefault(_App);
require('dotenv/config');


var _init = require('./database/init'); var _init2 = _interopRequireDefault(_init);
_init2.default.call(void 0, );

const port = process.env.PORT || 3333;

new (0, _App2.default)().server.listen(port, () => console.log("Server running on port 3333"));
