"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usuarios = _database.database.define('usuarios', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  rut: {
    type: _sequelize["default"].STRING
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  apellido: {
    type: _sequelize["default"].STRING
  },
  correo: {
    type: _sequelize["default"].TEXT
  },
  contraseña: {
    type: _sequelize["default"].TEXT
  },
  roles_id: {
    type: _sequelize["default"].INTEGER
  },
  verificacion: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = usuarios;
exports["default"] = _default;