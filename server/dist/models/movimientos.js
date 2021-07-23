"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var movimientos = _database.database.define('movimientos', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  monto: {
    type: _sequelize["default"].DOUBLE
  },
  fecha: {
    type: _sequelize["default"].DATE
  },
  cuentas_corrientes_id: {
    type: _sequelize["default"].INTEGER
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = movimientos;
exports["default"] = _default;