"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCuentasCorrientesForAgentesAduana = exports.getAllCuentasCorrientesWithFalse = exports.getCuentasCorrientesId = exports.getAllCuentasCorrientes = exports.deleteCuentasCorrientes = exports.updateCuentasCorrientes = exports.createCuentasCorrientes = void 0;

var _cuentas_corrientes = _interopRequireDefault(require("../models/cuentas_corrientes"));

var _movimientos = _interopRequireDefault(require("../models/movimientos"));

var movimientosController = _interopRequireWildcard(require("./movimientos.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createCuentasCorrientes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, debe, haber, agentes_aduana_id, newCuentasCorrientes, r;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, debe = _req$body.debe, haber = _req$body.haber, agentes_aduana_id = _req$body.agentes_aduana_id;
            _context.next = 4;
            return _cuentas_corrientes["default"].create({
              debe: debe,
              haber: haber,
              agentes_aduana_id: agentes_aduana_id,
              vigencia: true
            }, {
              fields: ['debe', 'haber', 'agentes_aduana_id', 'vigencia']
            });

          case 4:
            newCuentasCorrientes = _context.sent;
            r = {
              resultado: true,
              message: "Cuenta corriente creada correctamente",
              cuentasCorrientes: newCuentasCorrientes
            };
            return _context.abrupt("return", r);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false,
              cuentasCorrientes: null
            });

          case 13:
            ;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function createCuentasCorrientes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createCuentasCorrientes = createCuentasCorrientes;

var updateCuentasCorrientes = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, cuentasCorrientesUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _cuentas_corrientes["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            cuentasCorrientesUpdate = _context2.sent;
            res.json({
              message: 'Cuenta corriente actualizada correctamente',
              resultado: true,
              cuentasCorrientes: cuentasCorrientesUpdate
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
              cuentasCorrientes: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateCuentasCorrientes(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateCuentasCorrientes = updateCuentasCorrientes;

var deleteCuentasCorrientes = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, cuentaCorriente, movimientosIds, aux, cuentaCorrienteUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _cuentas_corrientes["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'debe', 'haber', 'agentes_aduana_id'],
              include: [_movimientos["default"]]
            });

          case 4:
            cuentaCorriente = _context3.sent;

            if (!cuentaCorriente) {
              _context3.next = 19;
              break;
            }

            movimientosIds = [];
            cuentaCorriente.dataValues.movimientos.forEach(function (element) {
              movimientosIds.push(parseInt(element.dataValues.id));
            });
            req.params = {
              id: movimientosIds
            };
            _context3.next = 11;
            return movimientosController.deleteMovimientos(req, res);

          case 11:
            aux = _context3.sent;

            if (!aux.resultado) {
              _context3.next = 18;
              break;
            }

            _context3.next = 15;
            return _cuentas_corrientes["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 15:
            cuentaCorrienteUpdate = _context3.sent;
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
              message: 'Cuenta corriente eliminada correctamente'
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

  return function deleteCuentasCorrientes(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteCuentasCorrientes = deleteCuentasCorrientes;

var getAllCuentasCorrientes = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allCuentasCorrientes;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _cuentas_corrientes["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'debe', 'haber', 'agentes_aduana_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allCuentasCorrientes = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              cuentasCorrientes: allCuentasCorrientes
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
              cuentasCorrientes: null
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

  return function getAllCuentasCorrientes(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllCuentasCorrientes = getAllCuentasCorrientes;

var getCuentasCorrientesId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, cuentaCorriente;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _cuentas_corrientes["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'debe', 'haber', 'agentes_aduana_id']
            });

          case 4:
            cuentaCorriente = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              cuentasCorrientes: cuentaCorriente
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
              cuentasCorrientes: null
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

  return function getCuentasCorrientesId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getCuentasCorrientesId = getCuentasCorrientesId;

var getAllCuentasCorrientesWithFalse = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var allCuentasCorrientes;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _cuentas_corrientes["default"].findAll({
              attributes: ['id', 'debe', 'haber', 'agentes_aduana_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allCuentasCorrientes = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              cuentasCorrientes: allCuentasCorrientes
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
              cuentasCorrientes: null
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

  return function getAllCuentasCorrientesWithFalse(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAllCuentasCorrientesWithFalse = getAllCuentasCorrientesWithFalse;

var updateCuentasCorrientesForAgentesAduana = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, body, cuentasCorrientesUpdate, cuentaCorriente;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            body = req.body;
            _context7.next = 5;
            return _cuentas_corrientes["default"].update(body, {
              where: {
                agentes_aduana_id: id,
                vigencia: true
              }
            });

          case 5:
            cuentasCorrientesUpdate = _context7.sent;
            _context7.next = 8;
            return _cuentas_corrientes["default"].findOne({
              where: {
                agentes_aduana_id: id,
                vigencia: true
              },
              attributes: ['id', 'debe', 'haber', 'agentes_aduana_id']
            });

          case 8:
            cuentaCorriente = _context7.sent;
            res.json({
              message: 'Cuenta corriente actualizada correctamente',
              resultado: true,
              cuentasCorrientes: cuentaCorriente
            });
            _context7.next = 16;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              cuentasCorrientes: null
            });

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 12]]);
  }));

  return function updateCuentasCorrientesForAgentesAduana(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.updateCuentasCorrientesForAgentesAduana = updateCuentasCorrientesForAgentesAduana;