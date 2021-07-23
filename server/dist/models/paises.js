"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var paises = _database.database.define('paises', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  pais: {
    type: _sequelize["default"].STRING
  },
  codigo_iban: {
    type: _sequelize["default"].STRING
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = paises;
exports["default"] = _default;