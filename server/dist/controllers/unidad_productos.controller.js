"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllUnidadProductosWithFalse = exports.getUnidadProductosId = exports.getAllUnidadProductos = exports.deleteUnidadProductos = exports.updateUnidadProductos = exports.createUnidadProductos = void 0;

var _unidad_productos = _interopRequireDefault(require("../models/unidad_productos"));

var _productos = _interopRequireDefault(require("../models/productos"));

var productosController = _interopRequireWildcard(require("./productos.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUnidadProductos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, valor_unidad, nombre_medida, newUnidadProducto;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, valor_unidad = _req$body.valor_unidad, nombre_medida = _req$body.nombre_medida;
            _context.next = 4;
            return _unidad_productos["default"].create({
              valor_unidad: valor_unidad,
              nombre_medida: nombre_medida,
              vigencia: true
            }, {
              fields: ['valor_unidad', 'nombre_medida', 'vigencia']
            });

          case 4:
            newUnidadProducto = _context.sent;
            res.json({
              resultado: true,
              message: "Unidad de producto creada correctamente",
              unidadProductos: newUnidadProducto
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
              unidadProductos: null
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

  return function createUnidadProductos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUnidadProductos = createUnidadProductos;

var updateUnidadProductos = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, _body, unidadProductosUpdate;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _body = req.body;
            _context2.next = 5;
            return _unidad_productos["default"].update(_body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            unidadProductosUpdate = _context2.sent;
            res.json({
              message: 'Unidad de producto actualizada correctamente',
              resultado: true,
              unidadProductos: unidadProductosUpdate
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
              unidadProductos: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateUnidadProductos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateUnidadProductos = updateUnidadProductos;

var deleteUnidadProductos = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, unidadProducto, aux, unidadProductosUpdate;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _unidad_productos["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'nombre_medida', 'valor_unidad'],
              include: [_productos["default"]]
            });

          case 4:
            unidadProducto = _context4.sent;

            if (!unidadProducto) {
              _context4.next = 19;
              break;
            }

            aux = {
              resultado: true
            };
            req.body = {
              cascade: true
            };
            unidadProducto.dataValues.productos.forEach( /*#__PURE__*/function () {
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
                        return productosController.deleteProductos(req, res);

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
                          message: 'Ha ocurrido un error, porfavor contactese con el administrador',
                          resultado: false
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

            if (!aux.resultado) {
              _context4.next = 15;
              break;
            }

            _context4.next = 12;
            return _unidad_productos["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 12:
            unidadProductosUpdate = _context4.sent;
            _context4.next = 16;
            break;

          case 15:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 16:
            res.json({
              resultado: true,
              message: 'Unidad de producto eliminada correctamente'
            });
            _context4.next = 20;
            break;

          case 19:
            res.json({
              message: 'Unidad de producto no encontrada',
              resultado: true
            });

          case 20:
            ;
            _context4.next = 27;
            break;

          case 23:
            _context4.prev = 23;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 27:
            ;

          case 28:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 23]]);
  }));

  return function deleteUnidadProductos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteUnidadProductos = deleteUnidadProductos;

var getAllUnidadProductos = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var allUnidadProductos;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _unidad_productos["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'nombre_medida', 'valor_unidad'],
              order: [['id', 'DESC']]
            });

          case 3:
            allUnidadProductos = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              unidadProductos: allUnidadProductos
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
              unidadProductos: null
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

  return function getAllUnidadProductos(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getAllUnidadProductos = getAllUnidadProductos;

var getUnidadProductosId = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, unidadProducto;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _unidad_productos["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'nombre_medida', 'valor_unidad']
            });

          case 4:
            unidadProducto = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              unidadProductos: unidadProducto
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
              unidadProductos: null
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

  return function getUnidadProductosId(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getUnidadProductosId = getUnidadProductosId;

var getAllUnidadProductosWithFalse = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var allUnidadProductos;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _unidad_productos["default"].findAll({
              attributes: ['id', 'nombre_medida', 'valor_unidad'],
              order: [['id', 'DESC']]
            });

          case 3:
            allUnidadProductos = _context7.sent;
            res.json({
              resultado: true,
              message: "",
              unidadProductos: allUnidadProductos
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
              unidadProductos: null
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

  return function getAllUnidadProductosWithFalse(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getAllUnidadProductosWithFalse = getAllUnidadProductosWithFalse;