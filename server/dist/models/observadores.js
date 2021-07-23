"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var observadores = _database.database.define('observadores', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  rut: {
    type: _sequelize["default"].STRING
  },
  nombre: {
    type: _sequelize["default"].STRING
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = observadores;
exports["default"] = _default;