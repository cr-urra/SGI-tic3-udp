"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var gastos_extras = _database.database.define('gastos_extras', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  monto: {
    type: _sequelize["default"].FLOAT
  },
  pedidos_id: {
    type: _sequelize["default"].INTEGER
  },
  observaciones_id: {
    type: _sequelize["default"].INTEGER
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = gastos_extras;
exports["default"] = _default;