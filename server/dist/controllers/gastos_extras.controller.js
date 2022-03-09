"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateGastosExtras = exports.getGastosExtrasId = exports.getAllGastosExtrasWithFalse = exports.getAllGastosExtras = exports.deleteGastosExtras = exports.createGastosExtras = void 0;

var _gastos_extras = _interopRequireDefault(require("../models/gastos_extras"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createGastosExtras = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, monto, pedidos_id, observaciones_id, newGastoExtra;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, monto = _req$body.monto, pedidos_id = _req$body.pedidos_id, observaciones_id = _req$body.observaciones_id;
            _context.next = 4;
            return _gastos_extras["default"].create({
              monto: monto,
              pedidos_id: pedidos_id,
              observaciones_id: observaciones_id,
              vigencia: true
            }, {
              fields: ['monto', 'pedidos_id', 'observaciones_id', 'vigencia']
            });

          case 4:
            newGastoExtra = _context.sent;
            res.json({
              resultado: true,
              message: "Gasto extra creado correctamente",
              gastosExtras: newGastoExtra
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
              gastosExtras: null
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

  return function createGastosExtras(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createGastosExtras = createGastosExtras;

var updateGastosExtras = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, gastoExtraUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _gastos_extras["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            gastoExtraUpdate = _context2.sent;
            res.json({
              message: 'Gasto extra actualizado correctamente',
              resultado: true,
              gastosExtras: gastoExtraUpdate
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
              gastosExtras: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateGastosExtras(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateGastosExtras = updateGastosExtras;

var deleteGastosExtras = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var body, id, gastoExtra, gastoExtraUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = req.body;
            _context3.prev = 1;
            id = req.params.id;
            _context3.next = 5;
            return _gastos_extras["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'monto', 'pedidos_id', 'observaciones_id']
            });

          case 5:
            gastoExtra = _context3.sent;

            if (!gastoExtra) {
              _context3.next = 17;
              break;
            }

            _context3.next = 9;
            return _gastos_extras["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 9:
            gastoExtraUpdate = _context3.sent;

            if (!body.cascade) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", {
              resultado: true
            });

          case 14:
            res.json({
              resultado: true,
              message: 'Gasto extra eliminado correctamente'
            });

          case 15:
            _context3.next = 22;
            break;

          case 17:
            if (!body.cascade) {
              _context3.next = 21;
              break;
            }

            return _context3.abrupt("return", {
              resultado: false
            });

          case 21:
            res.json({
              resultado: true,
              message: 'Gasto extra no encontrado'
            });

          case 22:
            ;
            _context3.next = 33;
            break;

          case 25:
            _context3.prev = 25;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

            if (!body.cascade) {
              _context3.next = 32;
              break;
            }

            return _context3.abrupt("return", {
              resultado: false
            });

          case 32:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 33:
            ;

          case 34:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 25]]);
  }));

  return function deleteGastosExtras(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteGastosExtras = deleteGastosExtras;

var getAllGastosExtras = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allGastosExtras;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _gastos_extras["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'monto', 'pedidos_id', 'observaciones_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allGastosExtras = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              gastosExtras: allGastosExtras
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
              gastosExtras: null
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

  return function getAllGastosExtras(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllGastosExtras = getAllGastosExtras;

var getGastosExtrasId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, gastoExtra;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _gastos_extras["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'monto', 'pedidos_id', 'observaciones_id']
            });

          case 4:
            gastoExtra = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              gastosExtras: gastoExtra
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
              gastosExtras: null
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

  return function getGastosExtrasId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getGastosExtrasId = getGastosExtrasId;

var getAllGastosExtrasWithFalse = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var allGastosExtras;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _gastos_extras["default"].findAll({
              attributes: ['id', 'monto', 'pedidos_id', 'observaciones_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allGastosExtras = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              gastosExtras: allGastosExtras
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
              gastosExtras: null
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

  return function getAllGastosExtrasWithFalse(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAllGastosExtrasWithFalse = getAllGastosExtrasWithFalse;