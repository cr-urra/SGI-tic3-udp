"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCuentasBancos = exports.getCuentasBancosId = exports.getAllCuentasBancosWithFalse = exports.getAllCuentasBancos = exports.deleteCuentasBancos = exports.createCuentasBancos = void 0;

var _cuentas_bancos = _interopRequireDefault(require("../models/cuentas_bancos"));

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

var _proveedores = _interopRequireDefault(require("../models/proveedores"));

var pedidosController = _interopRequireWildcard(require("./pedidos.controller"));

var proveedoresController = _interopRequireWildcard(require("./proveedores.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createCuentasBancos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, numero_cuenta, nombre_banco, swift_code, codigo_iban, referencia, paises_id, numeros_aba_id, newCuentaBanco;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, numero_cuenta = _req$body.numero_cuenta, nombre_banco = _req$body.nombre_banco, swift_code = _req$body.swift_code, codigo_iban = _req$body.codigo_iban, referencia = _req$body.referencia, paises_id = _req$body.paises_id, numeros_aba_id = _req$body.numeros_aba_id;
            _context.next = 4;
            return _cuentas_bancos["default"].create({
              numero_cuenta: numero_cuenta,
              nombre_banco: nombre_banco,
              swift_code: swift_code,
              codigo_iban: codigo_iban,
              referencia: referencia,
              paises_id: paises_id,
              numeros_aba_id: numeros_aba_id,
              vigencia: true
            }, {
              fields: ['numero_cuenta', 'nombre_banco', 'swift_code', 'codigo_iban', 'referencia', 'paises_id', 'numeros_aba_id', 'vigencia']
            });

          case 4:
            newCuentaBanco = _context.sent;
            res.json({
              resultado: true,
              message: "Cuenta de banco creada correctamente",
              cuentas_bancos: newCuentaBanco
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
              cuentas_bancos: null
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

  return function createCuentasBancos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createCuentasBancos = createCuentasBancos;

var updateCuentasBancos = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, cuentaBancoUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _cuentas_bancos["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            cuentaBancoUpdate = _context2.sent;
            res.json({
              message: 'Cuenta de banco actualizada',
              resultado: true,
              cuentas_bancos: cuentaBancoUpdate
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
              cuentas_bancos: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateCuentasBancos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateCuentasBancos = updateCuentasBancos;

var deleteCuentasBancos = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var body, id, cuenta_banco, aux, cuentaBancoUpdate;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            body = req.body;
            _context4.prev = 1;
            id = req.params.id;
            _context4.next = 5;
            return _cuentas_bancos["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id'],
              include: [_pedidos["default"], _proveedores["default"]]
            });

          case 5:
            cuenta_banco = _context4.sent;

            if (!cuenta_banco) {
              _context4.next = 41;
              break;
            }

            aux = {
              resultado: true
            };
            req.body = {
              cascade: true
            };
            cuenta_banco.dataValues.pedidos.forEach( /*#__PURE__*/function () {
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
            req.params = {
              id: parseInt(cuenta_banco.dataValues.proveedore.dataValues.id)
            };

            if (!aux.resultado) {
              _context4.next = 17;
              break;
            }

            _context4.next = 14;
            return proveedoresController.deleteProveedores(req, res);

          case 14:
            aux = _context4.sent;
            _context4.next = 22;
            break;

          case 17:
            if (!(aux.resultado == false && body.cascade == true)) {
              _context4.next = 21;
              break;
            }

            return _context4.abrupt("return", {
              resultado: false
            });

          case 21:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 22:
            cuentaBancoUpdate = null;

            if (!aux.resultado) {
              _context4.next = 29;
              break;
            }

            _context4.next = 26;
            return _cuentas_bancos["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 26:
            cuentaBancoUpdate = _context4.sent;
            _context4.next = 34;
            break;

          case 29:
            if (!(aux.resultado == false && body.cascade == true)) {
              _context4.next = 33;
              break;
            }

            return _context4.abrupt("return", {
              resultado: false
            });

          case 33:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 34:
            if (!body.cascade) {
              _context4.next = 38;
              break;
            }

            return _context4.abrupt("return", {
              resultado: true
            });

          case 38:
            res.json({
              resultado: true,
              message: 'Cuenta de banco eliminada correctamente'
            });

          case 39:
            _context4.next = 46;
            break;

          case 41:
            if (!body.cascade) {
              _context4.next = 45;
              break;
            }

            return _context4.abrupt("return", {
              resultado: false
            });

          case 45:
            res.json({
              resultado: true,
              message: 'Cuenta de banco no encontrada'
            });

          case 46:
            ;
            _context4.next = 57;
            break;

          case 49:
            _context4.prev = 49;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);

            if (!body.cascade) {
              _context4.next = 56;
              break;
            }

            return _context4.abrupt("return", {
              resultado: false
            });

          case 56:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 57:
            ;

          case 58:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 49]]);
  }));

  return function deleteCuentasBancos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteCuentasBancos = deleteCuentasBancos;

var getAllCuentasBancos = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var allCuentasBancos;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _cuentas_bancos["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'numero_cuenta', 'nombre_banco', 'swift_code', 'codigo_iban', 'referencia', 'paises_id', 'numeros_aba_id'],
              include: [_proveedores["default"]],
              order: [['id', 'DESC']]
            });

          case 3:
            allCuentasBancos = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              cuentas_bancos: allCuentasBancos
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
              cuentas_bancos: null
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

  return function getAllCuentasBancos(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getAllCuentasBancos = getAllCuentasBancos;

var getCuentasBancosId = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, cuenta_banco;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _cuentas_bancos["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'numero_cuenta', 'nombre_banco', 'swift_code', 'codigo_iban', 'referencia', 'paises_id', 'numeros_aba_id']
            });

          case 4:
            cuenta_banco = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              cuentas_bancos: cuenta_banco
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
              cuentas_bancos: null
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

  return function getCuentasBancosId(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getCuentasBancosId = getCuentasBancosId;

var getAllCuentasBancosWithFalse = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var allCuentasBancos;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _cuentas_bancos["default"].findAll({
              attributes: ['id', 'numero_cuenta', 'nombre_banco', 'swift_code', 'codigo_iban', 'referencia', 'paises_id', 'numeros_aba_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allCuentasBancos = _context7.sent;
            res.json({
              resultado: true,
              message: "",
              cuentas_bancos: allCuentasBancos
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
              cuentas_bancos: null
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

  return function getAllCuentasBancosWithFalse(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getAllCuentasBancosWithFalse = getAllCuentasBancosWithFalse;