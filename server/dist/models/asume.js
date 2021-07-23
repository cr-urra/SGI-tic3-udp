"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var asume = _database.database.define('asume', {
  observadores_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  agentes_aduana_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  }
}, {
  timestamps: false
});

var _default = asume;
exports["default"] = _default;