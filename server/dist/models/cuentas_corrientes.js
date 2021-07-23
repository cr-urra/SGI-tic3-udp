"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cuentas_corrientes = _database.database.define('cuentas_corrientes', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  debe: {
    type: _sequelize["default"].DOUBLE
  },
  haber: {
    type: _sequelize["default"].DOUBLE
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

var _default = cuentas_corrientes;
exports["default"] = _default;