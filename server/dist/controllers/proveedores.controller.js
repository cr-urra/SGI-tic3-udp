"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllProveedoresWithFalse = exports.getProveedoresId = exports.getAllProveedores = exports.deleteProveedores = exports.updateProveedores = exports.createProveedores = void 0;

var _proveedores = _interopRequireDefault(require("../models/proveedores"));

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

var _productos = _interopRequireDefault(require("../models/productos"));

var pedidosController = _interopRequireWildcard(require("./pedidos.controller"));

var productosController = _interopRequireWildcard(require("./productos.controller"));

var telefonosProveedoresController = _interopRequireWildcard(require("./telefonos_proveedores.controller"));

var cuentasBancosController = _interopRequireWildcard(require("./cuentas_bancos.controller"));

var _telefonos_proveedores2 = _interopRequireDefault(require("../models/telefonos_proveedores"));

var _cuentas_bancos2 = _interopRequireDefault(require("../models/cuentas_bancos"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createProveedores = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, direccion, correo, pais, monedas_id, rut, cuentas_bancos_id, newProveedor;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, nombre = _req$body.nombre, direccion = _req$body.direccion, correo = _req$body.correo, pais = _req$body.pais, monedas_id = _req$body.monedas_id, rut = _req$body.rut, cuentas_bancos_id = _req$body.cuentas_bancos_id;
            _context.next = 4;
            return _proveedores["default"].create({
              nombre: nombre,
              direccion: direccion,
              correo: correo,
              pais: pais,
              monedas_id: monedas_id,
              rut: rut,
              cuentas_bancos_id: cuentas_bancos_id,
              vigencia: true
            }, {
              fields: ['nombre', 'direccion', 'correo', 'pais', 'monedas_id', 'rut', 'cuentas_bancos_id', 'vigencia']
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var body, id, proveedor, aux, proveedorUpdate;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            body = req.body;
            _context5.prev = 1;
            id = req.params.id;
            _context5.next = 5;
            return _proveedores["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id'],
              include: [_productos["default"], _telefonos_proveedores2["default"]]
            });

          case 5:
            proveedor = _context5.sent;

            if (!proveedor) {
              _context5.next = 29;
              break;
            }

            aux = {
              resultado: true
            };
            req.body = {
              cascade: true
            };
            proveedor.dataValues.productos.forEach( /*#__PURE__*/function () {
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
            proveedor.dataValues.telefonos_proveedores.forEach( /*#__PURE__*/function () {
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
                        return telefonosProveedoresController.deleteTelefonosProveedores(req, res);

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
              _context5.next = 17;
              break;
            }

            _context5.next = 14;
            return _proveedores["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 14:
            proveedorUpdate = _context5.sent;
            _context5.next = 22;
            break;

          case 17:
            if (!(aux.resultado == false && body.cascade == true)) {
              _context5.next = 21;
              break;
            }

            return _context5.abrupt("return", {
              resultado: false
            });

          case 21:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 22:
            if (!body.cascade) {
              _context5.next = 26;
              break;
            }

            return _context5.abrupt("return", {
              resultado: true
            });

          case 26:
            res.json({
              resultado: true,
              message: 'Proveedor eliminado correctamente'
            });

          case 27:
            _context5.next = 34;
            break;

          case 29:
            if (!body.cascade) {
              _context5.next = 33;
              break;
            }

            return _context5.abrupt("return", {
              resultado: false
            });

          case 33:
            res.json({
              resultado: true,
              message: 'Proveedor no encontrado'
            });

          case 34:
            ;
            _context5.next = 45;
            break;

          case 37:
            _context5.prev = 37;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);

            if (!req.body.cascade) {
              _context5.next = 44;
              break;
            }

            return _context5.abrupt("return", {
              resultado: false
            });

          case 44:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 45:
            ;

          case 46:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 37]]);
  }));

  return function deleteProveedores(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteProveedores = deleteProveedores;

var getAllProveedores = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var allProveedores;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _proveedores["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'nombre', 'direccion', 'correo', 'pais', 'monedas_id', 'rut', 'cuentas_bancos_id'],
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

  return function getAllProveedores(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAllProveedores = getAllProveedores;

var getProveedoresId = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, proveedor;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _context7.next = 4;
            return _proveedores["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'nombre', 'direccion', 'correo', 'pais', 'monedas_id', 'rut', 'cuentas_bancos_id']
            });

          case 4:
            proveedor = _context7.sent;
            res.json({
              resultado: true,
              message: "",
              proveedores: proveedor
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
              proveedores: null
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

  return function getProveedoresId(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getProveedoresId = getProveedoresId;

var getAllProveedoresWithFalse = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var allProveedores;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _proveedores["default"].findAll({
              attributes: ['id', 'nombre', 'direccion', 'correo', 'pais', 'monedas_id', 'rut', 'cuentas_bancos_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allProveedores = _context8.sent;
            res.json({
              resultado: true,
              message: "",
              proveedores: allProveedores
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
              proveedores: null
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

  return function getAllProveedoresWithFalse(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getAllProveedoresWithFalse = getAllProveedoresWithFalse;