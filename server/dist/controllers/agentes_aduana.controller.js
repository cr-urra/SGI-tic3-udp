"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAgentesAduanaId = exports.getAllAgentesAduanaWithFalse = exports.getAllAgentesAduana = exports.deleteAgentesAduana = exports.updateAgentesAduana = exports.createAgentesAduana = void 0;

var _agentes_aduana = _interopRequireDefault(require("../models/agentes_aduana"));

var _cuentas_corrientes = _interopRequireDefault(require("../models/cuentas_corrientes"));

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

var _observaciones = _interopRequireDefault(require("../models/observaciones"));

var _telefonos_agentes_aduana = _interopRequireDefault(require("../models/telefonos_agentes_aduana"));

var cuentasCorrientesController = _interopRequireWildcard(require("./cuentas_corrientes.controller"));

var pedidosController = _interopRequireWildcard(require("./pedidos.controller"));

var observacionesController = _interopRequireWildcard(require("./observaciones.controller"));

var telefonosAgentesAduanaController = _interopRequireWildcard(require("./telefonos_agentes_aduana.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createAgentesAduana = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, apellido, correo, numero_cuenta, rut, bancos_agentes_aduana_id, newAgenteAduana, id, cuenta;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, nombre = _req$body.nombre, apellido = _req$body.apellido, correo = _req$body.correo, numero_cuenta = _req$body.numero_cuenta, rut = _req$body.rut, bancos_agentes_aduana_id = _req$body.bancos_agentes_aduana_id;
            _context.next = 4;
            return _agentes_aduana["default"].create({
              nombre: nombre,
              apellido: apellido,
              correo: correo,
              numero_cuenta: numero_cuenta,
              rut: rut,
              bancos_agentes_aduana_id: bancos_agentes_aduana_id,
              vigencia: true
            }, {
              fields: ['nombre', 'apellido', 'correo', 'numero_cuenta', 'rut', 'bancos_agentes_aduana_id', 'vigencia']
            });

          case 4:
            newAgenteAduana = _context.sent;
            id = newAgenteAduana.dataValues.id;
            req.body = {
              debe: 0,
              haber: 0,
              agentes_aduana_id: id
            };
            _context.next = 9;
            return cuentasCorrientesController.createCuentasCorrientes(req, res);

          case 9:
            cuenta = _context.sent;
            res.json({
              resultado: true,
              message: "Agente de aduana creado correctamente",
              agentes_aduana: newAgenteAduana,
              cuenta_corriente: cuenta
            });
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false,
              agentes_aduana: null
            });

          case 17:
            ;

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function createAgentesAduana(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createAgentesAduana = createAgentesAduana;

var updateAgentesAduana = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, agenteAduanaUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _agentes_aduana["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            agenteAduanaUpdate = _context2.sent;
            res.json({
              message: 'Agente de aduana actualizado correctamente',
              resultado: true,
              agentes_aduana: agenteAduanaUpdate
            });
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              agentes_aduana: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateAgentesAduana(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateAgentesAduana = updateAgentesAduana;

var deleteAgentesAduana = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, agente_aduana, pedidosIds, observacionesIds, telefonosAgentesAduanaIds, cuentaCorrienteId, aux, agenteAduanaUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _agentes_aduana["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'nombre', 'apellido', 'correo', 'numero_cuenta', 'rut', 'bancos_agentes_aduana_id'],
              include: [_pedidos["default"], _observaciones["default"], _cuentas_corrientes["default"], _telefonos_agentes_aduana["default"]]
            });

          case 4:
            agente_aduana = _context3.sent;

            if (!agente_aduana) {
              _context3.next = 48;
              break;
            }

            pedidosIds = [];
            observacionesIds = [];
            telefonosAgentesAduanaIds = [];
            agente_aduana.dataValues.pedidos.forEach(function (element) {
              pedidosIds.push(parseInt(element.dataValues.id));
            });
            agente_aduana.dataValues.observaciones.forEach(function (element) {
              observacionesIds.push(parseInt(element.dataValues.id));
            });
            cuentaCorrienteId = agente_aduana.dataValues.cuentas_corrientes.id;
            agente_aduana.dataValues.telefonos_agentes_aduana.forEach(function (element) {
              telefonosAgentesAduanaIds.push(parseInt(element.dataValues.id));
            });
            req.params = {
              id: pedidosIds
            };
            _context3.next = 16;
            return pedidosController.deletePedidos(req, res);

          case 16:
            aux = _context3.sent;
            req.params = {
              id: observacionesIds
            };

            if (!aux.resultado) {
              _context3.next = 24;
              break;
            }

            _context3.next = 21;
            return observacionesController.deleteObservaciones(req, res);

          case 21:
            aux = _context3.sent;
            _context3.next = 25;
            break;

          case 24:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 25:
            req.params = {
              id: cuentaCorrienteId
            };

            if (!aux.resultado) {
              _context3.next = 32;
              break;
            }

            _context3.next = 29;
            return cuentasCorrientesController.deleteCuentasCorrientes(req, res);

          case 29:
            aux = _context3.sent;
            _context3.next = 33;
            break;

          case 32:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 33:
            req.params = {
              id: telefonosAgentesAduanaIds
            };

            if (!aux.resultado) {
              _context3.next = 40;
              break;
            }

            _context3.next = 37;
            return telefonosAgentesAduanaController.deleteTelefonosAgentesAduana(req, res);

          case 37:
            aux = _context3.sent;
            _context3.next = 41;
            break;

          case 40:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 41:
            if (!aux.resultado) {
              _context3.next = 47;
              break;
            }

            _context3.next = 44;
            return _agentes_aduana["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 44:
            agenteAduanaUpdate = _context3.sent;
            _context3.next = 48;
            break;

          case 47:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 48:
            res.json({
              resultado: true,
              message: 'Agente de aduana eliminado correctamente'
            });
            _context3.next = 55;
            break;

          case 51:
            _context3.prev = 51;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 55:
            ;

          case 56:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 51]]);
  }));

  return function deleteAgentesAduana(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteAgentesAduana = deleteAgentesAduana;

var getAllAgentesAduana = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allAgentesAduana;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _agentes_aduana["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'nombre', 'apellido', 'correo', 'numero_cuenta', 'rut', 'bancos_agentes_aduana_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allAgentesAduana = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              agentes_aduana: allAgentesAduana
            });
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              agentes_aduana: null
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function getAllAgentesAduana(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllAgentesAduana = getAllAgentesAduana;

var getAllAgentesAduanaWithFalse = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var allAgentesAduana;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _agentes_aduana["default"].findAll({
              attributes: ['id', 'nombre', 'apellido', 'correo', 'numero_cuenta', 'rut', 'bancos_agentes_aduana_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allAgentesAduana = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              agentes_aduana: allAgentesAduana
            });
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              agentes_aduana: null
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function getAllAgentesAduanaWithFalse(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getAllAgentesAduanaWithFalse = getAllAgentesAduanaWithFalse;

var getAgentesAduanaId = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, agente_aduana;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _agentes_aduana["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'nombre', 'apellido', 'correo', 'numero_cuenta', 'rut', 'bancos_agentes_aduana_id']
            });

          case 4:
            agente_aduana = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              agentes_aduana: agente_aduana
            });
            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              agentes_aduana: null
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function getAgentesAduanaId(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAgentesAduanaId = getAgentesAduanaId;