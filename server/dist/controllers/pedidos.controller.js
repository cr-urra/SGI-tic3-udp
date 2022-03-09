"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePedidos = exports.getPedidosId = exports.getAllPedidosWithFalse = exports.getAllPedidosDashboards = exports.getAllPedidosBetweenDates = exports.getAllPedidos = exports.deletePedidos = exports.createPedidos = void 0;

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

var _usuarios = _interopRequireDefault(require("../models/usuarios"));

var _historial_dolar = _interopRequireDefault(require("../models/historial_dolar"));

var _detalles_dolar = _interopRequireDefault(require("../models/detalles_dolar"));

var _productos = _interopRequireDefault(require("../models/productos"));

var _proveedores = _interopRequireDefault(require("../models/proveedores"));

var _unidad_productos = _interopRequireDefault(require("../models/unidad_productos"));

var _detalles_pedidos = _interopRequireDefault(require("../models/detalles_pedidos"));

var _tiene = _interopRequireDefault(require("../models/tiene"));

var _documentos = _interopRequireDefault(require("../models/documentos"));

var _observaciones = _interopRequireDefault(require("../models/observaciones"));

var _gastos_extras = _interopRequireDefault(require("../models/gastos_extras"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var detallesPedidosController = _interopRequireWildcard(require("./detalles_pedidos.controller"));

var documentosController = _interopRequireWildcard(require("./documentos.controller"));

var observacionesController = _interopRequireWildcard(require("./observaciones.controller"));

var gastosExtrasController = _interopRequireWildcard(require("./gastos_extras.controller"));

var historialDolarController = _interopRequireWildcard(require("./historial_dolar.controller"));

var _config = _interopRequireDefault(require("../config"));

var _agentes_aduana = _interopRequireDefault(require("../models/agentes_aduana"));

var _cuentas_corrientes = _interopRequireDefault(require("../models/cuentas_corrientes"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createPedidos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, codigo, pago_inicial, estado, tipo_de_envio, flete, valor_cif, fecha_vencimiento, tipo_pago, fecha_inicial, seguro, proveedores_id, token, decoded, user_id, newPedido, newDetallePedido, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, codigo = _req$body.codigo, pago_inicial = _req$body.pago_inicial, estado = _req$body.estado, tipo_de_envio = _req$body.tipo_de_envio, flete = _req$body.flete, valor_cif = _req$body.valor_cif, fecha_vencimiento = _req$body.fecha_vencimiento, tipo_pago = _req$body.tipo_pago, fecha_inicial = _req$body.fecha_inicial, seguro = _req$body.seguro, proveedores_id = _req$body.proveedores_id;
            token = req.cookies.token;
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            user_id = decoded.id;
            _context.next = 7;
            return _pedidos["default"].create({
              codigo: codigo,
              pago_inicial: pago_inicial,
              pago_final: 0,
              fecha_pago: _sequelize["default"].literal('CURRENT_TIMESTAMP'),
              fecha_salida: _sequelize["default"].literal('CURRENT_TIMESTAMP'),
              fecha_llegada_real: _sequelize["default"].literal('CURRENT_TIMESTAMP'),
              fecha_llegada_estimada: _sequelize["default"].literal('CURRENT_TIMESTAMP'),
              fecha_aduana: _sequelize["default"].literal('CURRENT_TIMESTAMP'),
              estado: estado,
              tipo_de_envio: tipo_de_envio,
              flete: flete,
              valor_cif: valor_cif,
              honorarios: 0,
              arancel: 0,
              gastos_agencia: 0,
              numero_din: 0,
              cuentas_bancos_id: null,
              agentes_aduana_id: null,
              proveedores_id: proveedores_id,
              dolar_mensual_id: null,
              fecha_vencimiento: fecha_vencimiento,
              tipo_pago: tipo_pago,
              fecha_inicial: fecha_inicial,
              seguro: seguro,
              vigencia: true
            }, {
              fields: ['codigo', 'pago_inicial', 'pago_final', 'fecha_pago', 'fecha_salida', 'fecha_llegada_real', 'fecha_llegada_estimada', 'fecha_aduana', 'estado', 'tipo_de_envio', 'flete', 'valor_cif', 'honorarios', 'arancel', 'gastos_agencia', 'numero_din', 'cuentas_bancos_id', 'agentes_aduana_id', 'proveedores_id', 'dolar_mensual_id', 'fecha_vencimiento', 'tipo_pago', 'fecha_inicial', 'seguro', 'vigencia']
            });

          case 7:
            newPedido = _context.sent;
            req.body = {
              diferencia_de_costos: 0,
              pedidos_id: newPedido.dataValues.id
            };
            _context.next = 11;
            return _detalles_pedidos["default"].create({
              diferencia_de_costos: 0,
              pedidos_id: newPedido.dataValues.id,
              vigencia: true
            }, {
              fields: ['diferencia_de_costos', 'pedidos_id', 'vigencia']
            });

          case 11:
            newDetallePedido = _context.sent;
            _context.next = 14;
            return _usuarios["default"].findOne({
              where: {
                id: user_id
              },
              attributes: ['id']
            });

          case 14:
            user = _context.sent;
            newPedido.addUsuarios([user]);
            res.json({
              resultado: true,
              message: "Pedido creado correctamente",
              pedido: newPedido
            });
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false,
              pedido: null
            });

          case 23:
            ;

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19]]);
  }));

  return function createPedidos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPedidos = createPedidos;

var updatePedidos = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, pedidoUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _pedidos["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            pedidoUpdate = _context2.sent;
            res.json({
              message: 'Pedido actualizado',
              resultado: true,
              pedidos: pedidoUpdate
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
              pedidos: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updatePedidos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updatePedidos = updatePedidos;

var deletePedidos = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var body, id, pedido, aux, pedidoUpdate;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            body = req.body;
            _context7.prev = 1;
            id = req.params.id;
            _context7.next = 5;
            return _pedidos["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id'],
              include: [_detalles_pedidos["default"], _documentos["default"], _historial_dolar["default"], _gastos_extras["default"], _observaciones["default"]]
            });

          case 5:
            pedido = _context7.sent;

            if (!pedido) {
              _context7.next = 43;
              break;
            }

            aux = {
              resultado: true
            };
            req.body = {
              cascade: true
            };
            req.params = {
              id: pedido.detalles_pedido.dataValues.id
            };

            if (!aux.resultado) {
              _context7.next = 16;
              break;
            }

            _context7.next = 13;
            return detallesPedidosController.deleteDetallesPedidos(req, res);

          case 13:
            aux = _context7.sent;
            _context7.next = 21;
            break;

          case 16:
            if (!(aux.resultado == false && body.cascade == true)) {
              _context7.next = 20;
              break;
            }

            return _context7.abrupt("return", {
              resultado: false
            });

          case 20:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 21:
            pedido.dataValues.documentos.forEach( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(element) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        req.params = {
                          id: element.dataValues.id
                        };

                        if (!aux.resultado) {
                          _context3.next = 7;
                          break;
                        }

                        _context3.next = 4;
                        return documentosController.deleteDocumentos(req, res);

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
            pedido.dataValues.observaciones.forEach( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(element) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        req.params = {
                          id: element.dataValues.id
                        };

                        if (!aux.resultado) {
                          _context4.next = 7;
                          break;
                        }

                        _context4.next = 4;
                        return observacionesController.deleteObservaciones(req, res);

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
            pedido.dataValues.gastos_extras.forEach( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(element) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        req.params = {
                          id: element.dataValues.id
                        };

                        if (!aux.resultado) {
                          _context5.next = 7;
                          break;
                        }

                        _context5.next = 4;
                        return gastosExtrasController.deleteGastosExtras(req, req);

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
            pedido.dataValues.historial_dolars.forEach( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(element) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        req.params = {
                          id: element.dataValues.id
                        };

                        if (!aux.resultado) {
                          _context6.next = 7;
                          break;
                        }

                        _context6.next = 4;
                        return historialDolarController.deleteHistorialDolar(req, req);

                      case 4:
                        aux = _context6.sent;
                        _context6.next = 12;
                        break;

                      case 7:
                        if (!(aux.resultado == false && body.cascade == true)) {
                          _context6.next = 11;
                          break;
                        }

                        return _context6.abrupt("return", {
                          resultado: false
                        });

                      case 11:
                        res.json({
                          resultado: false,
                          message: "Ha ocurrido un error, porfavor contactese con el administrador"
                        });

                      case 12:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x10) {
                return _ref7.apply(this, arguments);
              };
            }());

            if (!aux.resultado) {
              _context7.next = 31;
              break;
            }

            _context7.next = 28;
            return _pedidos["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 28:
            pedidoUpdate = _context7.sent;
            _context7.next = 36;
            break;

          case 31:
            if (!(aux.resultado == false && body.cascade == true)) {
              _context7.next = 35;
              break;
            }

            return _context7.abrupt("return", {
              resultado: false
            });

          case 35:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 36:
            if (!body.cascade) {
              _context7.next = 40;
              break;
            }

            return _context7.abrupt("return", {
              resultado: true
            });

          case 40:
            res.json({
              resultado: true,
              message: 'Pedido eliminado correctamente'
            });

          case 41:
            _context7.next = 48;
            break;

          case 43:
            if (!body.cascade) {
              _context7.next = 47;
              break;
            }

            return _context7.abrupt("return", {
              resultado: false
            });

          case 47:
            res.json({
              resultado: true,
              message: "Pedido no encontrado"
            });

          case 48:
            ;
            _context7.next = 59;
            break;

          case 51:
            _context7.prev = 51;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);

            if (!body.cascade) {
              _context7.next = 58;
              break;
            }

            return _context7.abrupt("return", {
              resultado: false
            });

          case 58:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 59:
            ;

          case 60:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 51]]);
  }));

  return function deletePedidos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deletePedidos = deletePedidos;

var getAllPedidos = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var allPedidos;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _pedidos["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'codigo', 'pago_inicial', 'pago_final', 'fecha_pago', 'fecha_salida', 'fecha_llegada_real', 'fecha_llegada_estimada', 'fecha_aduana', 'estado', 'tipo_de_envio', 'flete', 'valor_cif', 'honorarios', 'arancel', 'gastos_agencia', 'numero_din', 'cuentas_bancos_id', 'agentes_aduana_id', 'proveedores_id', 'dolar_mensual_id', 'fecha_vencimiento', 'tipo_pago', 'fecha_inicial', 'seguro', 'vigencia'],
              order: [['id', 'DESC']],
              include: [_observaciones["default"], {
                model: _historial_dolar["default"],
                include: [_detalles_dolar["default"]]
              }, {
                model: _agentes_aduana["default"],
                include: [_cuentas_corrientes["default"]]
              }]
            });

          case 3:
            allPedidos = _context8.sent;
            res.json({
              resultado: true,
              message: "",
              pedidos: allPedidos
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
              pedidos: null
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

  return function getAllPedidos(_x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getAllPedidos = getAllPedidos;

var getAllPedidosBetweenDates = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var id, minDate, maxDate, lastYear, allPedidos, filter;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            id = req.body.Producto.id;
            minDate = req.body.fecha1;
            maxDate = req.body.fecha2;
            if (minDate == null) minDate = new Date(0, 0, 0);
            lastYear = new Date().getFullYear() + 1;
            if (maxDate == null) maxDate = new Date(lastYear, 11, 11);
            _context9.next = 9;
            return _pedidos["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'codigo', 'pago_inicial', 'pago_final', 'fecha_pago', 'fecha_salida', 'fecha_llegada_real', 'fecha_llegada_estimada', 'fecha_aduana', 'estado', 'tipo_de_envio', 'flete', 'valor_cif', 'honorarios', 'arancel', 'gastos_agencia', 'numero_din', 'cuentas_bancos_id', 'agentes_aduana_id', 'proveedores_id', 'dolar_mensual_id', 'fecha_vencimiento', 'tipo_pago', 'fecha_inicial', 'seguro', 'vigencia'],
              order: [['id', 'DESC']],
              include: [_proveedores["default"], {
                model: _tiene["default"],
                where: {
                  productos_id: id
                },
                include: [{
                  model: _productos["default"],
                  include: [_unidad_productos["default"]]
                }]
              }]
            });

          case 9:
            allPedidos = _context9.sent;
            filter = allPedidos.filter(function (element) {
              return new Date(element.dataValues.fecha_llegada_real) <= new Date(maxDate) && new Date(element.dataValues.fecha_llegada_real) >= new Date(minDate);
            });
            res.json({
              resultado: true,
              message: "",
              pedidos: filter
            });
            _context9.next = 18;
            break;

          case 14:
            _context9.prev = 14;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              pedidos: null
            });

          case 18:
            ;

          case 19:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 14]]);
  }));

  return function getAllPedidosBetweenDates(_x13, _x14) {
    return _ref9.apply(this, arguments);
  };
}();

exports.getAllPedidosBetweenDates = getAllPedidosBetweenDates;

var getAllPedidosDashboards = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var allPedidos;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _pedidos["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'codigo', 'pago_inicial', 'pago_final', 'fecha_pago', 'fecha_salida', 'fecha_llegada_real', 'fecha_llegada_estimada', 'fecha_aduana', 'estado', 'tipo_de_envio', 'flete', 'valor_cif', 'honorarios', 'arancel', 'gastos_agencia', 'numero_din', 'cuentas_bancos_id', 'agentes_aduana_id', 'proveedores_id', 'dolar_mensual_id', 'fecha_vencimiento', 'tipo_pago', 'fecha_inicial', 'seguro', 'vigencia'],
              order: [['id', 'DESC']],
              include: [_proveedores["default"], {
                model: _tiene["default"],
                include: [{
                  model: _productos["default"],
                  include: [_unidad_productos["default"]]
                }]
              }]
            });

          case 3:
            allPedidos = _context10.sent;
            res.json({
              resultado: true,
              message: "",
              pedidos: allPedidos
            });
            _context10.next = 11;
            break;

          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10["catch"](0);
            console.log(_context10.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              pedidos: null
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 7]]);
  }));

  return function getAllPedidosDashboards(_x15, _x16) {
    return _ref10.apply(this, arguments);
  };
}();

exports.getAllPedidosDashboards = getAllPedidosDashboards;

var getPedidosId = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var id, pedido;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            id = req.params.id;
            _context11.next = 4;
            return _pedidos["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'codigo', 'pago_inicial', 'pago_final', 'fecha_pago', 'fecha_salida', 'fecha_llegada_real', 'fecha_llegada_estimada', 'fecha_aduana', 'estado', 'tipo_de_envio', 'flete', 'valor_cif', 'honorarios', 'arancel', 'gastos_agencia', 'numero_din', 'cuentas_bancos_id', 'agentes_aduana_id', 'proveedores_id', 'dolar_mensual_id', 'fecha_vencimiento', 'tipo_pago', 'fecha_inicial', 'seguro', 'vigencia'],
              include: [_observaciones["default"], {
                model: _historial_dolar["default"],
                include: [_detalles_dolar["default"]]
              }, {
                model: _agentes_aduana["default"],
                include: [_cuentas_corrientes["default"]]
              }]
            });

          case 4:
            pedido = _context11.sent;
            res.json({
              resultado: true,
              message: "",
              pedidos: pedido
            });
            _context11.next = 12;
            break;

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              pedidos: null
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 8]]);
  }));

  return function getPedidosId(_x17, _x18) {
    return _ref11.apply(this, arguments);
  };
}();

exports.getPedidosId = getPedidosId;

var getAllPedidosWithFalse = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(req, res) {
    var allPedidos;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return _pedidos["default"].findAll({
              attributes: ['id', 'codigo', 'pago_inicial', 'pago_final', 'fecha_pago', 'fecha_salida', 'fecha_llegada_real', 'fecha_llegada_estimada', 'fecha_aduana', 'estado', 'tipo_de_envio', 'flete', 'valor_cif', 'honorarios', 'arancel', 'gastos_agencia', 'numero_din', 'cuentas_bancos_id', 'agentes_aduana_id', 'proveedores_id', 'dolar_mensual_id', 'fecha_vencimiento', 'tipo_pago', 'fecha_inicial', 'seguro', 'vigencia'],
              order: [['id', 'DESC']],
              include: [_observaciones["default"], {
                model: _historial_dolar["default"],
                include: [_detalles_dolar["default"]]
              }, {
                model: _agentes_aduana["default"],
                include: [_cuentas_corrientes["default"]]
              }]
            });

          case 3:
            allPedidos = _context12.sent;
            res.json({
              resultado: true,
              message: "",
              pedidos: allPedidos
            });
            _context12.next = 11;
            break;

          case 7:
            _context12.prev = 7;
            _context12.t0 = _context12["catch"](0);
            console.log(_context12.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              pedidos: null
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 7]]);
  }));

  return function getAllPedidosWithFalse(_x19, _x20) {
    return _ref12.apply(this, arguments);
  };
}();

exports.getAllPedidosWithFalse = getAllPedidosWithFalse;