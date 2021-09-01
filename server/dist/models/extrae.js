"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var extrae = _database.database.define('extrae', {
  pedidos_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  historial_precios_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  }
}, {
  timestamps: false
});

var _default = extrae;
exports["default"] = _default;