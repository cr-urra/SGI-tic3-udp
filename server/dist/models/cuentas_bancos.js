"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cuentas_bancos = _database.database.define('cuentas_bancos', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  numero_cuenta: {
    type: _sequelize["default"].STRING
  },
  nombre_banco: {
    type: _sequelize["default"].STRING
  },
  swift_code: {
    type: _sequelize["default"].STRING
  },
  codigo_iban: {
    type: _sequelize["default"].STRING
  },
  referencia: {
    type: _sequelize["default"].TEXT
  },
  paises_id: {
    type: _sequelize["default"].INTEGER
  },
  numeros_aba_id: {
    type: _sequelize["default"].INTEGER
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = cuentas_bancos;
exports["default"] = _default;