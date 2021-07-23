"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var numeros_aba = _database.database.define('numeros_aba', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre_banco: {
    type: _sequelize["default"].STRING
  },
  numero_aba: {
    type: _sequelize["default"].INTEGER
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = numeros_aba;
exports["default"] = _default;