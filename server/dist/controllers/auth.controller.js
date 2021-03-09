"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = comparePassword;
exports.encryptPassword = encryptPassword;
exports.consulRol = consulRol;
exports.signIn = exports.signUp = void 0;

var _users = _interopRequireDefault(require("../models/users"));

var _roles = _interopRequireDefault(require("../models/roles"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _config = _interopRequireDefault(require("../config"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function comparePassword(_x, _x2) {
  return _comparePassword.apply(this, arguments);
}

function _comparePassword() {
  _comparePassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(password, receivePassword) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _bcryptjs["default"].compare(password, receivePassword);

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _comparePassword.apply(this, arguments);
}

;

function encryptPassword(_x3) {
  return _encryptPassword.apply(this, arguments);
}

function _encryptPassword() {
  _encryptPassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(password) {
    var salt;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _bcryptjs["default"].genSalt(10);

          case 2:
            salt = _context4.sent;
            _context4.next = 5;
            return _bcryptjs["default"].hash(password, salt);

          case 5:
            return _context4.abrupt("return", _context4.sent);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _encryptPassword.apply(this, arguments);
}

;

function consulRol(_x4) {
  return _consulRol.apply(this, arguments);
}

function _consulRol() {
  _consulRol = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
    var codRol;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['cod_rol']
            });

          case 2:
            codRol = _context5.sent;
            return _context5.abrupt("return", codRol);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _consulRol.apply(this, arguments);
}

;

var signUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, rut, nombre, apellido, roles_id, password, newUsers, user_token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, rut = _req$body.rut, nombre = _req$body.nombre, apellido = _req$body.apellido, roles_id = _req$body.roles_id, password = _req$body.password;
            _context.prev = 1;
            _context.t0 = _users["default"];
            _context.t1 = rut;
            _context.t2 = nombre;
            _context.t3 = apellido;
            _context.t4 = roles_id;
            _context.next = 9;
            return encryptPassword(password);

          case 9:
            _context.t5 = _context.sent;
            _context.t6 = {
              rut: _context.t1,
              nombre: _context.t2,
              apellido: _context.t3,
              roles_id: _context.t4,
              password: _context.t5
            };
            _context.t7 = {
              fields: ['rut', 'nombre', 'apellido', 'roles_id', 'password']
            };
            _context.next = 14;
            return _context.t0.create.call(_context.t0, _context.t6, _context.t7);

          case 14:
            newUsers = _context.sent;

            if (newUsers) {
              user_token = _jsonwebtoken["default"].sign({
                id: newUsers.id
              }, _config["default"].SECRET, {
                expiresIn: 120
              });
              res.json({
                message: "Usuario registrado correctamente",
                data: newUsers,
                token: user_token
              });
            }

            ;
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t8 = _context["catch"](1);
            console.log(_context.t8);
            res.status(500).json({
              message: "Problemas al registrar usuario, contactese con el administrador del sistema",
              data: {}
            });

          case 23:
            ;

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 19]]);
  }));

  return function signUp(_x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var rut, bool, user, matchPassword, user_token, codRol, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            rut = req.body.rut;
            bool = false;
            _context2.next = 4;
            return _users["default"].findOne({
              where: {
                rut: rut
              },
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'password']
            });

          case 4:
            user = _context2.sent;

            if (!user) {
              _context2.next = 25;
              break;
            }

            _context2.next = 8;
            return comparePassword(req.body.password, user.password);

          case 8:
            matchPassword = _context2.sent;
            user_token = null;

            if (!matchPassword) {
              _context2.next = 21;
              break;
            }

            user_token = _jsonwebtoken["default"].sign({
              id: user.id
            }, _config["default"].SECRET, {
              expiresIn: 120
            });
            res.cookie('user_token', user_token, {
              httpOnly: true
            });
            _context2.next = 15;
            return consulRol(user.roles_id);

          case 15:
            codRol = _context2.sent;
            result = {
              nombre: user.nombre,
              apellido: user.apellido,
              cod_rol: codRol.cod_rol
            };
            bool = true;
            res.json({
              Resultado: bool,
              Usuario: result,
              token: user_token
            });
            _context2.next = 22;
            break;

          case 21:
            res.json({
              resultado: bool,
              message: "Password incorrecta"
            });

          case 22:
            ;
            _context2.next = 26;
            break;

          case 25:
            res.json({
              resultado: bool,
              message: "Usuario no encontrado"
            });

          case 26:
            ;

          case 27:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signIn(_x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signIn = signIn;