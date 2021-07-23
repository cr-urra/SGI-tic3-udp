"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var efectua = _database.database.define('efectua', {
  observadores_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  observaciones_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  }
}, {
  timestamps: false
});

var _default = efectua;
exports["default"] = _default;