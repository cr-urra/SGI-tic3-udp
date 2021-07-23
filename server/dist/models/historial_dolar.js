"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var historial_dolar = _database.database.define('historial_dolar', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  fecha: {
    type: _sequelize["default"].DATEONLY
  },
  tipo: {
    type: _sequelize["default"].STRING
  },
  pedidos_id: {
    type: _sequelize["default"].INTEGER
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = historial_dolar;
exports["default"] = _default;