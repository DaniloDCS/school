"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

const storage = _multer.diskStorage.call(void 0, {
  destination: (req, file, cb) => cb(null, _path2.default.resolve(__dirname, "../../public/uploads")),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = _multer2.default.call(void 0, { storage });

exports. default = upload;