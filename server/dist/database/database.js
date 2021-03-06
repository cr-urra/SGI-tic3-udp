"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var database = new _sequelize["default"]('sgi_db', //Nombre bd
'postgres', //Usuario
'pass123', //Contraseña
{
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 1000
  },
  logging: false,
  define: {
    "createdAt": "createdat",
    "updatedAt": "updatedat",
    freezeTableName: true
  }
});
exports.database = database;