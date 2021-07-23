"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var monedas = _database.database.define('monedas', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  pais: {
    type: _sequelize["default"].STRING
  },
  moneda: {
    type: _sequelize["default"].STRING
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = monedas;
exports["default"] = _default;