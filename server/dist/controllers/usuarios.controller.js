"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllUsuarios = exports.getUsuariosId = exports.deleteUsuarios = exports.updateUsuarios = void 0;

var _usuarios = _interopRequireDefault(require("../models/usuarios"));

var _ips = _interopRequireDefault(require("../models/ips"));

var _telefonos_usuarios = _interopRequireDefault(require("../models/telefonos_usuarios"));

var ct = _interopRequireWildcard(require("./telefonos_usuarios.controller"));

var ipsc = _interopRequireWildcard(require("./ips.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var updateUsuarios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, body, userUpdate;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;
            body = req.body;
            _context.next = 5;
            return _usuarios["default"].update(body, {
              where: {
                id: id
              }
            });

          case 5:
            userUpdate = _context.sent;
            res.json({
              message: 'Usuario actualizado correctamente',
              resultado: true,
              usuarios: userUpdate
            });
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: true,
              usuarios: null
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

  return function updateUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.updateUsuarios = updateUsuarios;

var deleteUsuarios = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, user, r;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            user = _usuarios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id'],
              include: [_ips["default"], _telefonos_usuarios["default"]]
            });

            if (!user) {
              _context2.next = 24;
              break;
            }

            req.body = {
              cascade: true
            };
            _context2.next = 7;
            return ct.deleteTelefonosUsuarios(req, res);

          case 7:
            r = _context2.sent;

            if (!r.resultado) {
              _context2.next = 14;
              break;
            }

            _context2.next = 11;
            return ipsc.deleteIps(req, res);

          case 11:
            r = _context2.sent;
            _context2.next = 15;
            break;

          case 14:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 15:
            if (!r.resultado) {
              _context2.next = 21;
              break;
            }

            _context2.next = 18;
            return _usuarios["default"].destroy({
              where: {
                id: id
              }
            });

          case 18:
            res.json({
              message: 'Usuario eliminado correctamente',
              resultado: true
            });
            _context2.next = 22;
            break;

          case 21:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 22:
            _context2.next = 25;
            break;

          case 24:
            res.json({
              message: 'El usuario ingresado no se encuentra',
              resultado: false
            });

          case 25:
            _context2.next = 34;
            break;

          case 27:
            _context2.prev = 27;
            _context2.t0 = _context2["catch"](0);

            if (!req.body.cascade) {
              _context2.next = 33;
              break;
            }

            return _context2.abrupt("return", {
              resultado: false
            });

          case 33:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 34:
            ;

          case 35:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 27]]);
  }));

  return function deleteUsuarios(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deleteUsuarios = deleteUsuarios;

var getUsuariosId = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _usuarios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'correo', 'verificacion', 'contraseña']
            });

          case 4:
            user = _context3.sent;
            res.json({
              resultado: true,
              message: "",
              usuario: user
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              usuario: null
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getUsuariosId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUsuariosId = getUsuariosId;

var getAllUsuarios = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allUsers;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _usuarios["default"].findAll({
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'contraseña', 'correo', 'verificacion'],
              order: [['id', 'DESC']]
            });

          case 3:
            allUsers = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              usuarios: allUsers
            });
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              usuarios: false
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function getAllUsuarios(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllUsuarios = getAllUsuarios;