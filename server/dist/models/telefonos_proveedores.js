"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var telefonos_proveedores = _database.database.define('telefonos_proveedores', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  telefono: {
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

var _default = telefonos_proveedores;
exports["default"] = _default;