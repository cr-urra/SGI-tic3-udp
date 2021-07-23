"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllProveedoresWithFalse = exports.getProveedoresId = exports.getAllProveedores = exports.deleteProveedores = exports.updateProveedores = exports.createProveedores = void 0;

var _proveedores = _interopRequireDefault(require("../models/proveedores"));

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

var _productos = _interopRequireDefault(require("../models/productos"));

var _telefonos_proveedores = _interopRequireDefault(require("../models/telefonos_proveedores"));

var pedidosController = _interopRequireWildcard(require("./pedidos.controller"));

var productosController = _interopRequireWildcard(require("./productos.controller"));

var telefonosProveedoresController = _interopRequireWildcard(require("./telefonos_proveedores.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createProveedores = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, direccion, correo, pais, monedas_id, rut, newProveedor;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, nombre = _req$body.nombre, direccion = _req$body.direccion, correo = _req$body.correo, pais = _req$body.pais, monedas_id = _req$body.monedas_id, rut = _req$body.rut;
            _context.next = 4;
            return _proveedores["default"].create({
              nombre: nombre,
              direccion: direccion,
              correo: correo,
              pais: pais,
              monedas_id: monedas_id,
              rut: rut,
              vigencia: true
            }, {
              fields: ['nombre', 'direccion', 'correo', 'pais', 'monedas_id', 'rut', 'vigencia']
            });

          case 4:
            newProveedor = _context.sent;
            res.json({
              resultado: true,
              message: "Proveedor creado correctamente",
              proveedores: newProveedor
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: "Ha ocurrido un error, por favor contactese con el administrador",
              resultado: false,
              proveedores: null
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function createProveedores(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProveedores = createProveedores;

var updateProveedores = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, proveedorUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _proveedores["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            proveedorUpdate = _context2.sent;
            res.json({
              message: 'Proveedor actualizado',
              resultado: true,
              proveedores: proveedorUpdate
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
              proveedores: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateProveedores(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateProveedores = updateProveedores;

var deleteProveedores = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, proveedor, pedidosIds, productosIds, telefonosProveedoresIds, aux, proveedorUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _proveedores["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'nombre', 'direccion', 'correo', 'pais', 'monedas_id', 'rut'],
              include: [_pedidos["default"], _productos["default"], _telefonos_proveedores["default"]]
            });

          case 4:
            proveedor = _context3.sent;

            if (!proveedor) {
              _context3.next = 39;
              break;
            }

            pedidosIds = [];
            productosIds = [];
            telefonosProveedoresIds = [];
            proveedor.dataValues.pedidos.forEach(function (element) {
              pedidosIds.push(parseInt(element.dataValues.id));
            });
            proveedor.dataValues.productos.forEach(function (element) {
              productosIds.push(parseInt(element.dataValues.id));
            });
            proveedor.dataValues.telefonos_proveedores.forEach(function (element) {
              telefonosProveedoresIds.push(parseInt(element.dataValues.id));
            });
            req.params = {
              id: pedidosIds
            };
            _context3.next = 15;
            return pedidosController.deletePedidos(req, res);

          case 15:
            aux = _context3.sent;
            req.params = {
              id: productosIds
            };

            if (!aux.resultado) {
              _context3.next = 23;
              break;
            }

            _context3.next = 20;
            return productosController.deleteProductos(req, res);

          case 20:
            aux = _context3.sent;
            _context3.next = 24;
            break;

          case 23:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 24:
            req.params = {
              id: telefonosProveedoresIds
            };

            if (!aux.resultado) {
              _context3.next = 31;
              break;
            }

            _context3.next = 28;
            return telefonosProveedoresController.deleteTelefonosProveedores(req, res);

          case 28:
            aux = _context3.sent;
            _context3.next = 32;
            break;

          case 31:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 32:
            if (!aux.resultado) {
              _context3.next = 38;
              break;
            }

            _context3.next = 35;
            return _proveedores["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 35:
            proveedorUpdate = _context3.sent;
            _context3.next = 39;
            break;

          case 38:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 39:
            res.json({
              resultado: true,
              message: 'Proveedor eliminado correctamente'
            });
            _context3.next = 46;
            break;

          case 42:
            _context3.prev = 42;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 46:
            ;

          case 47:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 42]]);
  }));

  return function deleteProveedores(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteProveedores = deleteProveedores;

var getAllProveedores = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allProveedores;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _proveedores["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'nombre', 'direccion', 'correo', 'pais', 'monedas_id', 'rut'],
              order: [['id', 'DESC']]
            });

          case 3:
            allProveedores = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              proveedores: allProveedores
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
              proveedores: null
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

  return function getAllProveedores(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllProveedores = getAllProveedores;

var getProveedoresId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, proveedor;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _proveedores["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'nombre', 'direccion', 'correo', 'pais', 'monedas_id', 'rut']
            });

          case 4:
            proveedor = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              proveedores: proveedor
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
              proveedores: null
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

  return function getProveedoresId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getProveedoresId = getProveedoresId;

var getAllProveedoresWithFalse = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var allProveedores;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _proveedores["default"].findAll({
              attributes: ['id', 'nombre', 'direccion', 'correo', 'pais', 'monedas_id', 'rut'],
              order: [['id', 'DESC']]
            });

          case 3:
            allProveedores = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              proveedores: allProveedores
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
              proveedores: null
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

  return function getAllProveedoresWithFalse(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAllProveedoresWithFalse = getAllProveedoresWithFalse;