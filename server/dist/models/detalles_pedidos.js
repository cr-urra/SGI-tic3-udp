"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var detalles_pedidos = _database.database.define('detalles_pedidos', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  diferencia_de_costos: {
    type: _sequelize["default"].DOUBLE
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

var _default = detalles_pedidos;
exports["default"] = _default;