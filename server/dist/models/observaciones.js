"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var observaciones = _database.database.define('observaciones', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  observacion: {
    type: _sequelize["default"].TEXT
  },
  fecha: {
    type: _sequelize["default"].DATEONLY
  },
  gasto: {
    type: _sequelize["default"].INTEGER
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

var _default = observaciones;
exports["default"] = _default;