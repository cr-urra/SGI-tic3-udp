"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var cuentasCorrientes = _interopRequireWildcard(require("../controllers/cuentas_corrientes.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var express = require('express');

var router = express.Router();
// cuentasCorrientes
router.post('/', cuentasCorrientes.createCuentasCorrientes);
router.get('/', cuentasCorrientes.getAllCuentasCorrientes);
router.get('/all', cuentasCorrientes.getAllCuentasCorrientesWithFalse); // cuentasCorrientes/:id

router.put('/:id', cuentasCorrientes.updateCuentasCorrientes);
router.put('/delete/:id', cuentasCorrientes.deleteCuentasCorrientes);
router.put('/agentesAduana/:id', cuentasCorrientes.updateCuentasCorrientesForAgentesAduana);
router.get('/:id', cuentasCorrientes.getCuentasCorrientesId);
module.exports = router;