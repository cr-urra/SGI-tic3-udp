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

var _asume = _interopRequireDefault(require("../models/asume"));

var cuentasCorrientesController = _interopRequireWildcard(require("./cuentas_corrientes.controller"));

var pedidosController = _interopRequireWildcard(require("./pedidos.controller"));

var observacionesController = _interopRequireWildcard(require("./observaciones.controller"));

var telefonosAgentesAduanaController = _interopRequireWildcard(require("./telefonos_agentes_aduana.controller"));

var bancosAgentesAduanaController = _interopRequireWildcard(require("./bancos_agentes_aduana.controller"));

var observadoresController = _interopRequireWildcard(require("./observadores.controller"));

var _observadores2 = _interopRequireDefault(require("../models/observadores"));

var _bancos_agentes_aduana2 = _interopRequireDefault(require("../models/bancos_agentes_aduana"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createAgentesAduana = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, apellido, correo, numero_cuenta, rut, newAgenteAduana, id, cuenta;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, nombre = _req$body.nombre, apellido = _req$body.apellido, correo = _req$body.correo, numero_cuenta = _req$body.numero_cuenta, rut = _req$body.rut;
            _context.next = 4;
            return _agentes_aduana["default"].create({
              nombre: nombre,
              apellido: apellido,
              correo: correo,
              numero_cuenta: numero_cuenta,
              rut: rut,
              vigencia: true
            }, {
              fields: ['nombre', 'apellido', 'correo', 'numero_cuenta', 'rut', 'vigencia']
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var body, id, agente_aduana, aux, agenteAduanaUpdate;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            body = req.body;
            _context6.prev = 1;
            id = req.params.id;
            _context6.next = 5;
            return _agentes_aduana["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'nombre', 'apellido', 'correo', 'numero_cuenta', 'rut'],
              include: [_pedidos["default"], _asume["default"], _cuentas_corrientes["default"], _telefonos_agentes_aduana["default"], _bancos_agentes_aduana2["default"]]
            });

          case 5:
            agente_aduana = _context6.sent;

            if (!agente_aduana) {
              _context6.next = 54;
              break;
            }

            aux = {
              resultado: true
            };
            req.body = {
              cascade: true
            };
            req.params = {
              id: parseInt(agente_aduana.dataValues.bancos_agentes_aduana.dataValues.id)
            };

            if (!aux.resultado) {
              _context6.next = 16;
              break;
            }

            _context6.next = 13;
            return bancosAgentesAduanaController.deleteBancosAgentesAduana(req, res);

          case 13:
            aux = _context6.sent;
            _context6.next = 21;
            break;

          case 16:
            if (!(aux.resultado == false && body.cascade == true)) {
              _context6.next = 20;
              break;
            }

            return _context6.abrupt("return", {
              resultado: false
            });

          case 20:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 21:
            agente_aduana.dataValues.pedidos.forEach( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(element) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        req.params = {
                          id: parseInt(element.dataValues.id)
                        };

                        if (!aux.resultado) {
                          _context3.next = 7;
                          break;
                        }

                        _context3.next = 4;
                        return pedidosController.deletePedidos(req, res);

                      case 4:
                        aux = _context3.sent;
                        _context3.next = 12;
                        break;

                      case 7:
                        if (!(aux.resultado == false && body.cascade == true)) {
                          _context3.next = 11;
                          break;
                        }

                        return _context3.abrupt("return", {
                          resultado: false
                        });

                      case 11:
                        res.json({
                          resultado: false,
                          message: "Ha ocurrido un error, porfavor contactese con el administrador"
                        });

                      case 12:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x7) {
                return _ref4.apply(this, arguments);
              };
            }());
            agente_aduana.dataValues.telefonos_agentes_aduanas.forEach( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(element) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        req.params = {
                          id: parseInt(element.dataValues.id)
                        };

                        if (!aux.resultado) {
                          _context4.next = 7;
                          break;
                        }

                        _context4.next = 4;
                        return telefonosAgentesAduanaController.deleteTelefonosAgentesAduana(req, res);

                      case 4:
                        aux = _context4.sent;
                        _context4.next = 12;
                        break;

                      case 7:
                        if (!(aux.resultado == false && body.cascade == true)) {
                          _context4.next = 11;
                          break;
                        }

                        return _context4.abrupt("return", {
                          resultado: false
                        });

                      case 11:
                        res.json({
                          resultado: false,
                          message: "Ha ocurrido un error, porfavor contactese con el administrador"
                        });

                      case 12:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x8) {
                return _ref5.apply(this, arguments);
              };
            }());
            agente_aduana.dataValues.asumes.forEach( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(element) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        req.params = {
                          id: parseInt(element.dataValues.observadores_id)
                        };

                        if (!aux.resultado) {
                          _context5.next = 7;
                          break;
                        }

                        _context5.next = 4;
                        return observadoresController.deleteObservadores(req, res);

                      case 4:
                        aux = _context5.sent;
                        _context5.next = 12;
                        break;

                      case 7:
                        if (!(aux.resultado == false && body.cascade == true)) {
                          _context5.next = 11;
                          break;
                        }

                        return _context5.abrupt("return", {
                          resultado: false
                        });

                      case 11:
                        res.json({
                          resultado: false,
                          message: "Ha ocurrido un error, porfavor contactese con el administrador"
                        });

                      case 12:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x9) {
                return _ref6.apply(this, arguments);
              };
            }());
            req.params = {
              id: parseInt(agente_aduana.dataValues.cuentas_corriente.dataValues.id)
            };

            if (!aux.resultado) {
              _context6.next = 31;
              break;
            }

            _context6.next = 28;
            return cuentasCorrientesController.deleteCuentasCorrientes(req, res);

          case 28:
            aux = _context6.sent;
            _context6.next = 36;
            break;

          case 31:
            if (!(aux.resultado == false && body.cascade == true)) {
              _context6.next = 35;
              break;
            }

            return _context6.abrupt("return", {
              resultado: false
            });

          case 35:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 36:
            if (!aux.resultado) {
              _context6.next = 42;
              break;
            }

            _context6.next = 39;
            return _agentes_aduana["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 39:
            agenteAduanaUpdate = _context6.sent;
            _context6.next = 47;
            break;

          case 42:
            if (!(aux.resultado == false && body.cascade == true)) {
              _context6.next = 46;
              break;
            }

            return _context6.abrupt("return", {
              resultado: false
            });

          case 46:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 47:
            if (!body.cascade) {
              _context6.next = 51;
              break;
            }

            return _context6.abrupt("return", {
              resultado: true
            });

          case 51:
            res.json({
              resultado: true,
              message: 'Agente de aduana eliminado correctamente'
            });

          case 52:
            _context6.next = 59;
            break;

          case 54:
            if (!body.cascade) {
              _context6.next = 58;
              break;
            }

            return _context6.abrupt("return", {
              resultado: false
            });

          case 58:
            res.json({
              resultado: true,
              message: 'Agente de aduana no encontrado'
            });

          case 59:
            ;
            _context6.next = 70;
            break;

          case 62:
            _context6.prev = 62;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);

            if (!body.cascade) {
              _context6.next = 69;
              break;
            }

            return _context6.abrupt("return", {
              resultado: false
            });

          case 69:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 70:
            ;

          case 71:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 62]]);
  }));

  return function deleteAgentesAduana(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteAgentesAduana = deleteAgentesAduana;

var getAllAgentesAduana = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var allAgentesAduana;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _agentes_aduana["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'nombre', 'apellido', 'correo', 'numero_cuenta', 'rut'],
              order: [['id', 'DESC']]
            });

          case 3:
            allAgentesAduana = _context7.sent;
            res.json({
              resultado: true,
              message: "",
              agentes_aduana: allAgentesAduana
            });
            _context7.next = 11;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              agentes_aduana: null
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function getAllAgentesAduana(_x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getAllAgentesAduana = getAllAgentesAduana;

var getAllAgentesAduanaWithFalse = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var allAgentesAduana;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _agentes_aduana["default"].findAll({
              attributes: ['id', 'nombre', 'apellido', 'correo', 'numero_cuenta', 'rut'],
              order: [['id', 'DESC']]
            });

          case 3:
            allAgentesAduana = _context8.sent;
            res.json({
              resultado: true,
              message: "",
              agentes_aduana: allAgentesAduana
            });
            _context8.next = 11;
            break;

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              agentes_aduana: null
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));

  return function getAllAgentesAduanaWithFalse(_x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getAllAgentesAduanaWithFalse = getAllAgentesAduanaWithFalse;

var getAgentesAduanaId = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var id, agente_aduana;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            id = req.params.id;
            _context9.next = 4;
            return _agentes_aduana["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'nombre', 'apellido', 'correo', 'numero_cuenta', 'rut']
            });

          case 4:
            agente_aduana = _context9.sent;
            res.json({
              resultado: true,
              message: "",
              agentes_aduana: agente_aduana
            });
            _context9.next = 12;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              agentes_aduana: null
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 8]]);
  }));

  return function getAgentesAduanaId(_x14, _x15) {
    return _ref9.apply(this, arguments);
  };
}();

exports.getAgentesAduanaId = getAgentesAduanaId;