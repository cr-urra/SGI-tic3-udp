"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usuario = exports.superUsuario = exports.administrador = exports.verifyToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _users = _interopRequireDefault(require("../models/users"));

var _roles = _interopRequireDefault(require("../models/roles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decoded, id, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers["x-access-token"];
            console.log(token);
            !token && res.status(403).json({
              message: "Ha ocurrido un problema con la autenticación"
            });
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            console.log("aqui", decoded);
            id = decoded.id;
            req.id = id;
            _context.next = 10;
            return _users["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id']
            });

          case 10:
            user = _context.sent;
            !user && res.status(404).json({
              message: "No se encuentra el usuario"
            });
            console.log("user: ", user);
            next();
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: "Ha ocurrido un problema con la autenticación"
            });

          case 20:
            ;

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var administrador = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id, user, rol;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.id;
            _context2.next = 3;
            return _users["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id']
            });

          case 3:
            user = _context2.sent;
            console.log(user.roles_id);
            id = user.roles_id;
            _context2.next = 8;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'cod_rol', 'nombre']
            });

          case 8:
            rol = _context2.sent;
            console.log(rol);
            rol.cod_rol === "adm" ? next() : res.status(403).json({
              message: "Su usuario no se encuentra autorizado"
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function administrador(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.administrador = administrador;

var superUsuario = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var id, user, rol;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.id;
            _context3.next = 3;
            return _users["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id']
            });

          case 3:
            user = _context3.sent;
            console.log(user.roles_id);
            id = user.roles_id;
            _context3.next = 8;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'cod_rol', 'nombre']
            });

          case 8:
            rol = _context3.sent;
            console.log(rol);
            rol.cod_rol === "sup" ? next() : res.status(403).json({
              message: "Su usuario no se encuentra autorizado"
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function superUsuario(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.superUsuario = superUsuario;

var usuario = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var id, user, rol;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.id;
            _context4.next = 3;
            return _users["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id']
            });

          case 3:
            user = _context4.sent;
            console.log(user.roles_id);
            id = user.roles_id;
            _context4.next = 8;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'cod_rol', 'nombre']
            });

          case 8:
            rol = _context4.sent;
            console.log(rol);
            rol.cod_rol === "usr" ? next() : res.status(403).json({
              message: "Su usuario no se encuentra autorizado"
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function usuario(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.usuario = usuario;