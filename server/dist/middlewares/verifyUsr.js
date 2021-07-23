"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.existUser = exports.verifyUser = void 0;

var _usuarios = _interopRequireDefault(require("../models/usuarios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var rut, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rut = req.body.rut;
            _context.next = 3;
            return _usuarios["default"].findOne({
              where: {
                rut: rut
              },
              attributes: ['id', 'rut']
            });

          case 3:
            user = _context.sent;
            user ? res.json({
              message: "El rut ingresado ya existe",
              rut: user.rut
            }) : next();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function verifyUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyUser = verifyUser;

var existUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var rut, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            rut = req.body.rut;
            _context2.next = 3;
            return _usuarios["default"].findOne({
              where: {
                rut: rut
              },
              attributes: ['rut']
            });

          case 3:
            user = _context2.sent;
            user ? next() : res.json({
              message: "El rut ingresado no existe",
              rut: user.rut
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function existUser(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.existUser = existUser;