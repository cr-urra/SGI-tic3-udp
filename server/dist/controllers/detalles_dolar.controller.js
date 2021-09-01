"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllDetallesDolarWithFalse = exports.getDetallesDolarId = exports.getAllDetallesDolar = exports.deleteDetallesDolar = exports.updateDetallesDolar = exports.createDetallesDolar = void 0;

var _detalles_dolar = _interopRequireDefault(require("../models/detalles_dolar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createDetallesDolar = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, precio_compra, historial_dolar_id, newDetalleDolar;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, precio_compra = _req$body.precio_compra, historial_dolar_id = _req$body.historial_dolar_id;
            _context.next = 4;
            return _detalles_dolar["default"].create({
              precio_compra: precio_compra,
              historial_dolar_id: historial_dolar_id,
              vigencia: true
            }, {
              fields: ['precio_compra', 'historial_dolar_id', 'vigencia']
            });

          case 4:
            newDetalleDolar = _context.sent;
            res.json({
              resultado: true,
              message: "Detalle de dólar creado correctamente",
              detallesDolar: newDetalleDolar
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
              detallesDolar: null
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

  return function createDetallesDolar(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createDetallesDolar = createDetallesDolar;

var updateDetallesDolar = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, detalleDolarUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _detalles_dolar["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            detalleDolarUpdate = _context2.sent;
            res.json({
              message: 'Detalle de dólar actualizado correctamente',
              resultado: true,
              detallesDolar: detalleDolarUpdate
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
              detallesDolar: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateDetallesDolar(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateDetallesDolar = updateDetallesDolar;

var deleteDetallesDolar = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var body, id, params, detalleDolar, detalleDolarUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = req.body;
            _context3.prev = 1;
            id = req.params.id;
            params = req.params;
            _context3.next = 6;
            return _detalles_dolar["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'precio_compra', 'historial_dolar_id']
            });

          case 6:
            detalleDolar = _context3.sent;

            if (!detalleDolar) {
              _context3.next = 18;
              break;
            }

            _context3.next = 10;
            return _detalles_dolar["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 10:
            detalleDolarUpdate = _context3.sent;

            if (!body.cascade) {
              _context3.next = 15;
              break;
            }

            return _context3.abrupt("return", {
              resultado: true
            });

          case 15:
            res.json({
              resultado: true,
              message: 'Detalle de dólar eliminado correctamente'
            });

          case 16:
            _context3.next = 23;
            break;

          case 18:
            if (!body.cascade) {
              _context3.next = 22;
              break;
            }

            return _context3.abrupt("return", {
              resultado: false
            });

          case 22:
            res.json({
              resultado: true,
              message: 'Detalle de dólar no encontrado'
            });

          case 23:
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

  return function deleteDetallesDolar(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteDetallesDolar = deleteDetallesDolar;

var getAllDetallesDolar = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allDetallesDolar;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _detalles_dolar["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'precio_compra', 'historial_dolar_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allDetallesDolar = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              detallesDolar: allDetallesDolar
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
              detallesDolar: null
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

  return function getAllDetallesDolar(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllDetallesDolar = getAllDetallesDolar;

var getDetallesDolarId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, detalleDolar;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _detalles_dolar["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'precio_compra', 'historial_dolar_id']
            });

          case 4:
            detalleDolar = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              detallesDolar: detalleDolar
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
              detallesDolar: null
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

  return function getDetallesDolarId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getDetallesDolarId = getDetallesDolarId;

var getAllDetallesDolarWithFalse = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var allDetallesDolar;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _detalles_dolar["default"].findAll({
              attributes: ['id', 'precio_compra', 'historial_dolar_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allDetallesDolar = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              detallesDolar: allDetallesDolar
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
              detallesDolar: null
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

  return function getAllDetallesDolarWithFalse(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAllDetallesDolarWithFalse = getAllDetallesDolarWithFalse;