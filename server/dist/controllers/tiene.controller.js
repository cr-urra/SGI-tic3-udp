"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTiene = exports.deleteTienePedidos = exports.deleteTieneProductos = exports.createTiene = void 0;

var _tiene = _interopRequireDefault(require("../models/tiene"));

var _productos = _interopRequireDefault(require("../models/productos"));

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createTiene = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, productos_id, pedidos_id, cantidad, newTiene;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, productos_id = _req$body.productos_id, pedidos_id = _req$body.pedidos_id, cantidad = _req$body.cantidad;
            console.log(productos_id, pedidos_id, cantidad);
            _context.next = 5;
            return _tiene["default"].create({
              productos_id: productos_id,
              pedidos_id: pedidos_id,
              cantidad: cantidad
            }, {
              fields: ['productos_id', 'pedidos_id', 'cantidad']
            });

          case 5:
            newTiene = _context.sent;
            res.json({
              resultado: true,
              message: "Relación Tiene creada correctamente",
              Tiene: newTiene
            });
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false,
              Tiene: null
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

  return function createTiene(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTiene = createTiene;

var deleteTieneProductos = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _tiene["default"].destroy({
              where: {
                productos_id: id
              }
            });

          case 4:
            res.json({
              resultado: true,
              message: 'Relación Tiene eliminada correctamente'
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

  return function deleteTieneProductos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deleteTieneProductos = deleteTieneProductos;

var deleteTienePedidos = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _tiene["default"].destroy({
              where: {
                pedidos_id: id
              }
            });

          case 4:
            res.json({
              resultado: true,
              message: 'Relación Tiene eliminada correctamente'
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

  return function deleteTienePedidos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteTienePedidos = deleteTienePedidos;

var getTiene = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, pedido, _getTiene;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _pedidos["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id']
            });

          case 4:
            pedido = _context4.sent;

            if (!pedido) {
              _context4.next = 12;
              break;
            }

            _context4.next = 8;
            return _tiene["default"].findAll({
              where: {
                pedidos_id: id
              },
              attributes: ['productos_id', 'pedidos_id', 'cantidad'],
              include: [_productos["default"]]
            });

          case 8:
            _getTiene = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              tiene: _getTiene
            });
            _context4.next = 13;
            break;

          case 12:
            res.json({
              resultado: false,
              message: "",
              tiene: null
            });

          case 13:
            _context4.next = 19;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              tiene: null
            });

          case 19:
            ;

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 15]]);
  }));

  return function getTiene(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getTiene = getTiene;