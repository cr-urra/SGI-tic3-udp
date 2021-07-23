"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPedidosWithFalse = exports.getPedidosId = exports.getAllPedidos = exports.deletePedidos = exports.updatePedidos = exports.createPedidos = void 0;

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

var _usuarios = _interopRequireDefault(require("../models/usuarios"));

var _historial_dolar = _interopRequireDefault(require("../models/historial_dolar"));

var _detalles_dolar = _interopRequireDefault(require("../models/detalles_dolar"));

var _productos = _interopRequireDefault(require("../models/productos"));

var _detalles_pedidos = _interopRequireDefault(require("../models/detalles_pedidos"));

var _documentos = _interopRequireDefault(require("../models/documentos"));

var _observaciones = _interopRequireDefault(require("../models/observaciones"));

var _gastos_extras = _interopRequireDefault(require("../models/gastos_extras"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var detallesPedidosController = _interopRequireWildcard(require("./detalles_pedidos.controller"));

var documentosController = _interopRequireWildcard(require("./documentos.controller"));

var observacionesController = _interopRequireWildcard(require("./observaciones.controller"));

var gastosExtrasController = _interopRequireWildcard(require("./gastos_extras.controller"));

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
    var _req$body, codigo, pago_inicial, estado, tipo_de_envio, flete, valor_cif, fecha_vencimiento, tipo_pago, fecha_inicial, seguro, proveedores_id, token, decoded, user_id, newPedido, user;

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
            _context.next = 10;
            return _usuarios["default"].findOne({
              where: {
                id: user_id
              },
              attributes: ['id']
            });

          case 10:
            user = _context.sent;
            newPedido.addUsuarios([user]);
            res.json({
              resultado: true,
              message: "Pedido creado correctamente",
              pedido: newPedido
            });
            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false,
              pedido: null
            });

          case 19:
            ;

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, pedido, idsObservaciones, idsDocumentos, idsGastosExtras, productosIds, historialDolarIds, pedidoDetId, findedProductos, findedHistorialDolar, aux, pedidoUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _pedidos["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id'],
              include: [_detalles_pedidos["default"], _documentos["default"], _observaciones["default"], _gastos_extras["default"], _productos["default"], _historial_dolar["default"]]
            });

          case 4:
            pedido = _context3.sent;

            if (!pedido) {
              _context3.next = 69;
              break;
            }

            idsObservaciones = [];
            idsDocumentos = [];
            idsGastosExtras = [];
            productosIds = [];
            historialDolarIds = [];
            pedidoDetId = pedido.dataValues.detalles_pedido.dataValues.id;
            pedido.dataValues.observaciones.forEach(function (element) {
              idsObservaciones.push(parseInt(element.dataValues.id));
            });
            pedido.dataValues.documentos.forEach(function (element) {
              idsDocumentos.push(parseInt(element.dataValues.id));
            });
            pedido.dataValues.gastos_extras.forEach(function (element) {
              idsGastosExtras.push(parseInt(element.dataValues.id));
            });
            productosIds = pedido.dataValues.productos.forEach(function (element) {
              productosIds.push(parseInt(element.dataValues.id));
            });
            historialDolarIds = pedido.dataValues.historial_dolar.forEach(function (element) {
              historialDolarIds.push(parseInt(element.dataValues.id));
            });
            findedProductos = _productos["default"].findAll({
              where: {
                id: productosIds
              },
              attributes: ['id']
            });
            findedHistorialDolar = _productos["default"].findAll({
              where: {
                id: historialDolarIds
              },
              attributes: ['id']
            });
            req.params = {
              id: pedidoDetId
            };
            _context3.next = 22;
            return detallesPedidosController.deleteDetallesPedidos(req, res);

          case 22:
            aux = _context3.sent;
            req.params = {
              id: idsObservaciones
            };

            if (!aux.resultado) {
              _context3.next = 30;
              break;
            }

            _context3.next = 27;
            return observacionesController.deleteObservaciones(req, res);

          case 27:
            aux = _context3.sent;
            _context3.next = 31;
            break;

          case 30:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 31:
            req.params = {
              id: idsDocumentos
            };

            if (!aux.resultado) {
              _context3.next = 38;
              break;
            }

            _context3.next = 35;
            return documentosController.deleteDocumentos(req, res);

          case 35:
            aux = _context3.sent;
            _context3.next = 39;
            break;

          case 38:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 39:
            req.params = {
              id: idsGastosExtras
            };

            if (!aux.resultado) {
              _context3.next = 46;
              break;
            }

            _context3.next = 43;
            return gastosExtrasController.deleteGastosExtras(req, res);

          case 43:
            aux = _context3.sent;
            _context3.next = 47;
            break;

          case 46:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 47:
            if (!aux.resultado) {
              _context3.next = 52;
              break;
            }

            _context3.next = 50;
            return pedido.removeProductos([findedProductos]);

          case 50:
            _context3.next = 53;
            break;

          case 52:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 53:
            if (!aux.resultado) {
              _context3.next = 58;
              break;
            }

            _context3.next = 56;
            return pedido.removeHistorial_dolar([findedHistorialDolar]);

          case 56:
            _context3.next = 59;
            break;

          case 58:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 59:
            if (!aux.resultado) {
              _context3.next = 65;
              break;
            }

            _context3.next = 62;
            return _pedidos["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 62:
            pedidoUpdate = _context3.sent;
            _context3.next = 66;
            break;

          case 65:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 66:
            res.json({
              resultado: true,
              message: 'Pedido eliminado correctamente'
            });
            _context3.next = 70;
            break;

          case 69:
            res.json({
              resultado: false,
              message: "El pedido ingresado no existe"
            });

          case 70:
            ;
            _context3.next = 77;
            break;

          case 73:
            _context3.prev = 73;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 77:
            ;

          case 78:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 73]]);
  }));

  return function deletePedidos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deletePedidos = deletePedidos;

var getAllPedidos = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allPedidos;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
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
            allPedidos = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              pedidos: allPedidos
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
              pedidos: null
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

  return function getAllPedidos(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllPedidos = getAllPedidos;

var getPedidosId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, pedido;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
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
            pedido = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              pedidos: pedido
            });
            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              pedidos: null
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function getPedidosId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getPedidosId = getPedidosId;

var getAllPedidosWithFalse = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var allPedidos;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
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
            allPedidos = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              pedidos: allPedidos
            });
            _context6.next = 11;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              pedidos: null
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function getAllPedidosWithFalse(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAllPedidosWithFalse = getAllPedidosWithFalse;