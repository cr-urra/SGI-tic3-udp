"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pedidos = _database.database.define('pedidos', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  codigo: {
    type: _sequelize["default"].INTEGER
  },
  pago_inicial: {
    type: _sequelize["default"].FLOAT
  },
  pago_final: {
    type: _sequelize["default"].FLOAT
  },
  fecha_inicial: {
    type: _sequelize["default"].DATEONLY
  },
  fecha_pago: {
    type: _sequelize["default"].DATEONLY
  },
  fecha_salida: {
    type: _sequelize["default"].DATEONLY
  },
  fecha_llegada_real: {
    type: _sequelize["default"].DATEONLY
  },
  fecha_llegada_estimada: {
    type: _sequelize["default"].DATEONLY
  },
  fecha_aduana: {
    type: _sequelize["default"].DATEONLY
  },
  fecha_vencimiento: {
    type: _sequelize["default"].DATEONLY
  },
  estado: {
    type: _sequelize["default"].STRING
  },
  tipo_de_envio: {
    type: _sequelize["default"].STRING
  },
  flete: {
    type: _sequelize["default"].FLOAT
  },
  valor_cif: {
    type: _sequelize["default"].FLOAT
  },
  honorarios: {
    type: _sequelize["default"].FLOAT
  },
  arancel: {
    type: _sequelize["default"].FLOAT
  },
  gastos_agencia: {
    type: _sequelize["default"].FLOAT
  },
  numero_din: {
    type: _sequelize["default"].STRING
  },
  cuentas_bancos_id: {
    type: _sequelize["default"].INTEGER
  },
  agentes_aduana_id: {
    type: _sequelize["default"].INTEGER
  },
  proveedores_id: {
    type: _sequelize["default"].INTEGER
  },
  dolar_mensual_id: {
    type: _sequelize["default"].INTEGER
  },
  tipo_pago: {
    type: _sequelize["default"].STRING
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  },
  seguro: {
    type: _sequelize["default"].FLOAT
  }
}, {
  timestamps: false,
  underscored: true
});

var _default = pedidos;
exports["default"] = _default;