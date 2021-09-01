"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var historial_precios = _database.database.define('historial_precios', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  precio: {
    type: _sequelize["default"].FLOAT
  },
  fecha: {
    type: _sequelize["default"].DATEONLY
  },
  productos_id: {
    type: _sequelize["default"].INTEGER
  },
  tipo: {
    type: _sequelize["default"].BOOLEAN
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = historial_precios;
exports["default"] = _default;