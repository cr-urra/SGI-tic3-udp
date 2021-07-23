"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productos = _database.database.define('productos', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  codigo: {
    type: _sequelize["default"].STRING
  },
  nombre: {
    type: _sequelize["default"].STRING
  },
  unidad_productos_id: {
    type: _sequelize["default"].INTEGER
  },
  tipo: {
    type: _sequelize["default"].STRING
  },
  proveedores_id: {
    type: _sequelize["default"].INTEGER
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = productos;
exports["default"] = _default;