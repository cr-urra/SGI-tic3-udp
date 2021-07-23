"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var telefonos_agentes_aduana = _database.database.define('telefonos_agentes_aduana', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  telefono: {
    type: _sequelize["default"].STRING
  },
  agentes_aduana_id: {
    type: _sequelize["default"].INTEGER
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = telefonos_agentes_aduana;
exports["default"] = _default;