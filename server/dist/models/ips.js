"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ips = _database.database.define('ips', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  ip: {
    type: _sequelize["default"].STRING
  },
  usuarios_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = ips;
exports["default"] = _default;