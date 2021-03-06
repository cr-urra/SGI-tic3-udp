"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCuentasBancosWithFalse = exports.getCuentasBancosForProovedoresId = exports.getCuentasBancosId = exports.getAllCuentasBancos = exports.deleteCuentasBancos = exports.updateCuentasBancos = exports.createCuentasBancos = void 0;

var _cuentas_bancos = _interopRequireDefault(require("../models/cuentas_bancos"));

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

var pedidosController = _interopRequireWildcard(require("./pedidos.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createCuentasBancos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, numero_cuenta, nombre_banco, swift_code, codigo_iban, referencia, paises_id, numeros_aba_id, proveedores_id, newCuentaBanco;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, numero_cuenta = _req$body.numero_cuenta, nombre_banco = _req$body.nombre_banco, swift_code = _req$body.swift_code, codigo_iban = _req$body.codigo_iban, referencia = _req$body.referencia, paises_id = _req$body.paises_id, numeros_aba_id = _req$body.numeros_aba_id, proveedores_id = _req$body.proveedores_id;
            _context.next = 4;
            return _cuentas_bancos["default"].create({
              numero_cuenta: numero_cuenta,
              nombre_banco: nombre_banco,
              swift_code: swift_code,
              codigo_iban: codigo_iban,
              referencia: referencia,
              paises_id: paises_id,
              numeros_aba_id: numeros_aba_id,
              proveedores_id: proveedores_id,
              vigencia: true
            }, {
              fields: ['numero_cuenta', 'nombre_banco', 'swift_code', 'codigo_iban', 'referencia', 'paises_id', 'numeros_aba_id', 'proveedores_id', 'vigencia']
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, cuenta_banco, pedidosIds, aux, cuentaBancoUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _cuentas_bancos["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'numero_cuenta', 'nombre_banco', 'swift_code', 'codigo_iban', 'referencia', 'paises_id', 'numeros_aba_id', 'proveedores_id'],
              include: [_pedidos["default"]]
            });

          case 4:
            cuenta_banco = _context3.sent;

            if (!cuenta_banco) {
              _context3.next = 19;
              break;
            }

            pedidosIds = [];
            cuenta_banco.dataValues.pedidos.forEach(function (element) {
              pedidosIds.push(parseInt(element.dataValues.id));
            });
            req.params = {
              id: pedidosIds
            };
            _context3.next = 11;
            return pedidosController.deletePedidos(req, res);

          case 11:
            aux = _context3.sent;

            if (!aux.resultado) {
              _context3.next = 18;
              break;
            }

            _context3.next = 15;
            return _cuentas_bancos["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 15:
            cuentaBancoUpdate = _context3.sent;
            _context3.next = 19;
            break;

          case 18:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 19:
            res.json({
              resultado: true,
              message: 'Cuenta de banco eliminada correctamente'
            });
            _context3.next = 26;
            break;

          case 22:
            _context3.prev = 22;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 26:
            ;

          case 27:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 22]]);
  }));

  return function deleteCuentasBancos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteCuentasBancos = deleteCuentasBancos;

var getAllCuentasBancos = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allCuentasBancos;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _cuentas_bancos["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'numero_cuenta', 'nombre_banco', 'swift_code', 'codigo_iban', 'referencia', 'paises_id', 'numeros_aba_id', 'proveedores_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allCuentasBancos = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              cuentas_bancos: allCuentasBancos
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
              cuentas_bancos: null
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

  return function getAllCuentasBancos(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllCuentasBancos = getAllCuentasBancos;

var getCuentasBancosId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, cuenta_banco;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _cuentas_bancos["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'numero_cuenta', 'nombre_banco', 'swift_code', 'codigo_iban', 'referencia', 'paises_id', 'numeros_aba_id', 'proveedores_id']
            });

          case 4:
            cuenta_banco = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              cuentas_bancos: cuenta_banco
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
              cuentas_bancos: null
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

  return function getCuentasBancosId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getCuentasBancosId = getCuentasBancosId;

var getCuentasBancosForProovedoresId = /*#__PURE__*/function () {
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
                proveedores_id: id,
                vigencia: true
              },
              attributes: ['id', 'numero_cuenta', 'nombre_banco', 'swift_code', 'codigo_iban', 'referencia', 'paises_id', 'numeros_aba_id', 'proveedores_id']
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

  return function getCuentasBancosForProovedoresId(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getCuentasBancosForProovedoresId = getCuentasBancosForProovedoresId;

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
              attributes: ['id', 'numero_cuenta', 'nombre_banco', 'swift_code', 'codigo_iban', 'referencia', 'paises_id', 'numeros_aba_id', 'proveedores_id'],
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

  return function getAllCuentasBancosWithFalse(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getAllCuentasBancosWithFalse = getAllCuentasBancosWithFalse;