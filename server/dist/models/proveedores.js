"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var proveedores = _database.database.define('proveedores', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].STRING
  },
  direccion: {
    type: _sequelize["default"].STRING
  },
  correo: {
    type: _sequelize["default"].STRING
  },
  pais: {
    type: _sequelize["default"].STRING
  },
  monedas_id: {
    type: _sequelize["default"].INTEGER
  },
  rut: {
    type: _sequelize["default"].STRING
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false,
  underscored: true
});

var _default = proveedores;
exports["default"] = _default;