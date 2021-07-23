"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dolar_mensual = _database.database.define('dolar_mensual', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  valor_mensual: {
    type: _sequelize["default"].DOUBLE
  },
  fecha_registro: {
    type: _sequelize["default"].DATE
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = dolar_mensual;
exports["default"] = _default;