"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllProductosWithFalse = exports.getProductosId = exports.getAllProductos = exports.deleteProductos = exports.updateProductos = exports.createProductos = void 0;

var _productos = _interopRequireDefault(require("../models/productos"));

var _historial_precios = _interopRequireDefault(require("../models/historial_precios"));

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

var _tiene = _interopRequireDefault(require("../models/tiene"));

var historialPreciosController = _interopRequireWildcard(require("./historial_precios.controller"));

var pedidosController = _interopRequireWildcard(require("./pedidos.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createProductos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, codigo, nombre, tipo, proveedores_id, unidad_productos_id, newProducto;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, codigo = _req$body.codigo, nombre = _req$body.nombre, tipo = _req$body.tipo, proveedores_id = _req$body.proveedores_id, unidad_productos_id = _req$body.unidad_productos_id;
            _context.next = 4;
            return _productos["default"].create({
              codigo: codigo,
              nombre: nombre,
              tipo: tipo,
              proveedores_id: proveedores_id,
              unidad_productos_id: unidad_productos_id,
              vigencia: true
            }, {
              fields: ['codigo', 'nombre', 'precio_por_kg', 'tipo', 'proveedores_id', 'unidad_productos_id', 'vigencia']
            });

          case 4:
            newProducto = _context.sent;
            res.json({
              resultado: true,
              message: "Producto creado correctamente",
              productos: newProducto
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false,
              productos: null
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

  return function createProductos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProductos = createProductos;

var updateProductos = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, productoUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _productos["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            productoUpdate = _context2.sent;
            res.json({
              message: 'Producto actualizado',
              resultado: true,
              productos: productoUpdate
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
              productos: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateProductos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateProductos = updateProductos;

var deleteProductos = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var body, id, producto, productoUpdate, aux;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            body = req.body;
            _context5.prev = 1;
            id = req.params.id;
            _context5.next = 5;
            return _productos["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'codigo', 'nombre', 'tipo', 'proveedores_id', 'unidad_productos_id'],
              include: [_historial_precios["default"], _tiene["default"]]
            });

          case 5:
            producto = _context5.sent;

            if (!producto) {
              _context5.next = 30;
              break;
            }

            productoUpdate = null;
            aux = {
              resultado: true
            };
            req.body = {
              cascade: true
            };
            producto.dataValues.historial_precios.forEach( /*#__PURE__*/function () {
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
                        return historialPreciosController.deleteHistorialPrecios(req, res);

                      case 4:
                        aux = _context3.sent;
                        _context3.next = 12;
                        break;

                      case 7:
                        if (!(aux.resultado == false && body.cacade == true)) {
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
            producto.dataValues.tienes.forEach( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(element) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        req.params = {
                          id: element.dataValues.pedidos_id
                        };

                        if (!aux.resultado) {
                          _context4.next = 7;
                          break;
                        }

                        _context4.next = 4;
                        return pedidosController.deletePedidos(req, res);

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

            if (!aux.resultado) {
              _context5.next = 18;
              break;
            }

            _context5.next = 15;
            return _productos["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 15:
            productoUpdate = _context5.sent;
            _context5.next = 23;
            break;

          case 18:
            if (!(aux.resultado == false && body.cascade == true)) {
              _context5.next = 22;
              break;
            }

            return _context5.abrupt("return", {
              resultado: false
            });

          case 22:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 23:
            if (!body.cascade) {
              _context5.next = 27;
              break;
            }

            return _context5.abrupt("return", {
              resultado: true
            });

          case 27:
            res.json({
              resultado: true,
              message: 'Producto eliminado correctamente'
            });

          case 28:
            _context5.next = 35;
            break;

          case 30:
            if (!body.cascade) {
              _context5.next = 34;
              break;
            }

            return _context5.abrupt("return", {
              resultado: false
            });

          case 34:
            res.json({
              resultado: true,
              message: 'Producto no encontrado'
            });

          case 35:
            ;
            _context5.next = 46;
            break;

          case 38:
            _context5.prev = 38;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);

            if (!body.cascade) {
              _context5.next = 45;
              break;
            }

            return _context5.abrupt("return", {
              resultado: false
            });

          case 45:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 46:
            ;

          case 47:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 38]]);
  }));

  return function deleteProductos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteProductos = deleteProductos;

var getAllProductos = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var allProductos;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _productos["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'codigo', 'nombre', 'tipo', 'proveedores_id', 'unidad_productos_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allProductos = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              productos: allProductos
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
              productos: null
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

  return function getAllProductos(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAllProductos = getAllProductos;

var getProductosId = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, producto;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _context7.next = 4;
            return _productos["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'codigo', 'nombre', 'tipo', 'proveedores_id', 'unidad_productos_id']
            });

          case 4:
            producto = _context7.sent;
            res.json({
              resultado: true,
              message: "",
              productos: producto
            });
            _context7.next = 12;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              productos: null
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));

  return function getProductosId(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getProductosId = getProductosId;

var getAllProductosWithFalse = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var allProductos;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _productos["default"].findAll({
              attributes: ['id', 'codigo', 'nombre', 'tipo', 'proveedores_id', 'unidad_productos_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allProductos = _context8.sent;
            res.json({
              resultado: true,
              message: "",
              productos: allProductos
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
              productos: null
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

  return function getAllProductosWithFalse(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getAllProductosWithFalse = getAllProductosWithFalse;