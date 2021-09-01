"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var agentes_aduana = _database.database.define('agentes_aduana', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].STRING
  },
  rut: {
    type: _sequelize["default"].STRING
  },
  apellido: {
    type: _sequelize["default"].STRING
  },
  correo: {
    type: _sequelize["default"].STRING
  },
  numero_cuenta: {
    type: _sequelize["default"].STRING
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = agentes_aduana;
exports["default"] = _default;