"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteExtraePedidos = exports.deleteExtraeHistorialPrecios = exports.createExtrae = void 0;

var _extrae = _interopRequireDefault(require("../models/extrae"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createExtrae = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, pedidos_id, historial_precios_id, newextrae;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, pedidos_id = _req$body.pedidos_id, historial_precios_id = _req$body.historial_precios_id;
            _context.next = 4;
            return _extrae["default"].create({
              pedidos_id: pedidos_id,
              historial_precios_id: historial_precios_id
            }, {
              fields: ['pedidos_id', 'historial_precios_id']
            });

          case 4:
            newextrae = _context.sent;
            res.json({
              resultado: true,
              message: "Relación extrae creada correctamente",
              extrae: newextrae
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
              extrae: null
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

  return function createExtrae(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createExtrae = createExtrae;

var deleteExtraePedidos = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _extrae["default"].destroy({
              where: {
                pedidos_id: id
              }
            });

          case 4:
            res.json({
              resultado: true,
              message: 'Relación extrae eliminada correctamente'
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function deleteExtraePedidos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deleteExtraePedidos = deleteExtraePedidos;

var deleteExtraeHistorialPrecios = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _extrae["default"].destroy({
              where: {
                historial_precios_id: id
              }
            });

          case 4:
            res.json({
              resultado: true,
              message: 'Relación extrae eliminada correctamente'
            });
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function deleteExtraeHistorialPrecios(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteExtraeHistorialPrecios = deleteExtraeHistorialPrecios;