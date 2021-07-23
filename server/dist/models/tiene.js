"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tiene = _database.database.define('tiene', {
  pedidos_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  productos_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  cantidad: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  }
}, {
  timestamps: false
});

var _default = tiene;
exports["default"] = _default;