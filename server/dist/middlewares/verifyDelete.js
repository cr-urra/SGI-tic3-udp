"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyProveedores = exports.verifyProductos = exports.verifyAgentesAduana = void 0;

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

var _proveedores = _interopRequireDefault(require("../models/proveedores"));

var _productos = _interopRequireDefault(require("../models/productos"));

var _agentes_aduana = _interopRequireDefault(require("../models/agentes_aduana"));

var _tiene = _interopRequireDefault(require("../models/tiene"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyProveedores = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var id, proveedor;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return _proveedores["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id'],
              include: [_pedidos["default"]]
            });

          case 3:
            proveedor = _context.sent;
            proveedor.dataValues.pedidos.length > 0 ? res.json({
              message: "El proveedor ingresado se encuentra vinculado a un pedido",
              resultado: false
            }) : next();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function verifyProveedores(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyProveedores = verifyProveedores;

var verifyProductos = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id, producto;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _productos["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id'],
              include: [_tiene["default"]]
            });

          case 3:
            producto = _context2.sent;
            producto.dataValues.tienes.length > 0 ? res.json({
              message: "El producto ingresado se encuentra vinculado a un pedido",
              resultado: false
            }) : next();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function verifyProductos(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.verifyProductos = verifyProductos;

var verifyAgentesAduana = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var id, agenteAduana;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _agentes_aduana["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id'],
              include: [_pedidos["default"]]
            });

          case 3:
            agenteAduana = _context3.sent;
            agenteAduana.dataValues.pedidos.length > 0 ? res.json({
              message: "El agente de aduana ingresado se encuentra vinculado a un pedido",
              resultado: false
            }) : next();

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function verifyAgentesAduana(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.verifyAgentesAduana = verifyAgentesAduana;