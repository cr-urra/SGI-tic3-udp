"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var telefonos_usuarios = _database.database.define('telefonos_usuarios', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  telefono: {
    type: _sequelize["default"].STRING
  },
  usuarios_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = telefonos_usuarios;
exports["default"] = _default;