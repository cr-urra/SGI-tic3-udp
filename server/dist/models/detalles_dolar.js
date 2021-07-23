"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var detalles_dolar = _database.database.define('detalles_dolar', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  precio_compra: {
    type: _sequelize["default"].DOUBLE
  },
  historial_dolar_id: {
    type: _sequelize["default"].INTEGER
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = detalles_dolar;
exports["default"] = _default;