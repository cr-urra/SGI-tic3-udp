"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var unidad_productos = _database.database.define('unidad_productos', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  valor_unidad: {
    type: _sequelize["default"].FLOAT
  },
  nombre_medida: {
    type: _sequelize["default"].STRING
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = unidad_productos;
exports["default"] = _default;