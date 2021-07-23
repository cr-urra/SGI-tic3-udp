"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var documentos = _database.database.define('documentos', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre_documento: {
    type: _sequelize["default"].STRING
  },
  pedidos_id: {
    type: _sequelize["default"].INTEGER
  },
  vigencia: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false
});

var _default = documentos;
exports["default"] = _default;