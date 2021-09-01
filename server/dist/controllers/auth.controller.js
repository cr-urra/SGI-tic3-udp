"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmUser = exports.getRol = exports.logOut = exports.verifyUsr = exports.verifySup = exports.verifyAdm = exports.signIn = exports.signUp = exports.consulRol = exports.encryptPassword = exports.comparePassword = void 0;

var _usuarios = _interopRequireDefault(require("../models/usuarios"));

var _roles = _interopRequireDefault(require("../models/roles"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _config = _interopRequireDefault(require("../config"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var mail = _interopRequireWildcard(require("./mail.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var comparePassword = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(password, receivePassword) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcryptjs["default"].compare(password, receivePassword);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function comparePassword(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.comparePassword = comparePassword;

var encryptPassword = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(password) {
    var salt;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _bcryptjs["default"].genSalt(10);

          case 2:
            salt = _context2.sent;
            _context2.next = 5;
            return _bcryptjs["default"].hash(password, salt);

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function encryptPassword(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.encryptPassword = encryptPassword;

var consulRol = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
    var codRol;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['cod_rol']
            });

          case 2:
            codRol = _context3.sent;
            return _context3.abrupt("return", codRol);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function consulRol(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.consulRol = consulRol;

var signUp = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, rut, nombre, apellido, roles_id, contraseña, correo, usr, mailToken, body, from, subject, r;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$body = req.body, rut = _req$body.rut, nombre = _req$body.nombre, apellido = _req$body.apellido, roles_id = _req$body.roles_id, contraseña = _req$body.contraseña, correo = _req$body.correo;
            _context4.t0 = _usuarios["default"];
            _context4.t1 = rut;
            _context4.t2 = nombre;
            _context4.t3 = apellido;
            _context4.t4 = roles_id;
            _context4.next = 9;
            return encryptPassword(contraseña);

          case 9:
            _context4.t5 = _context4.sent;
            _context4.t6 = correo;
            _context4.t7 = {
              rut: _context4.t1,
              nombre: _context4.t2,
              apellido: _context4.t3,
              roles_id: _context4.t4,
              contraseña: _context4.t5,
              correo: _context4.t6,
              verificacion: false
            };
            _context4.t8 = {
              fields: ['rut', 'nombre', 'apellido', 'roles_id', 'contraseña', 'correo', 'verificacion']
            };
            _context4.next = 15;
            return _context4.t0.create.call(_context4.t0, _context4.t7, _context4.t8);

          case 15:
            usr = _context4.sent;
            mailToken = _jsonwebtoken["default"].sign({
              rut: rut,
              correo: correo
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            body = mail.templateBienvenida(nombre + " " + apellido, mailToken);
            from = "'SGI PROMACHILE <web@promachile.cl>'";
            subject = "Correo de bienvenida";
            _context4.next = 22;
            return mail.sendMail(body, from, correo, subject);

          case 22:
            r = _context4.sent;
            r.resultado ? res.json({
              resultado: true,
              message: "Usuario registrado correctamente",
              usuario: usr
            }) : res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
            });
            _context4.next = 30;
            break;

          case 26:
            _context4.prev = 26;
            _context4.t9 = _context4["catch"](0);
            console.log(_context4.t9);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
            });

          case 30:
            ;

          case 31:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 26]]);
  }));

  return function signUp(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signIn = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var rut, user, addr, matchPassword, user_token, codRol, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            rut = req.body.rut;
            _context5.next = 4;
            return _usuarios["default"].findOne({
              where: {
                rut: rut
              },
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'contraseña']
            });

          case 4:
            user = _context5.sent;

            if (!user) {
              _context5.next = 26;
              break;
            }

            addr = req.body.address.data.ip;
            _context5.next = 9;
            return comparePassword(req.body.contraseña, user.contraseña);

          case 9:
            matchPassword = _context5.sent;
            user_token = null;

            if (!matchPassword) {
              _context5.next = 22;
              break;
            }

            console.log(user.id);
            user_token = _jsonwebtoken["default"].sign({
              id: user.id,
              antiCsrf: req.get('CSRF-Token')
            }, _config["default"].SECRET, {
              expiresIn: 1200000000
            });
            res.cookie('token', user_token, {
              httpOnly: true
            });
            _context5.next = 17;
            return consulRol(user.roles_id);

          case 17:
            codRol = _context5.sent;
            result = {
              nombre: user.nombre,
              apellido: user.apellido,
              cod_rol: codRol.cod_rol
            };
            res.json({
              resultado: true,
              usuario: result
            });
            _context5.next = 23;
            break;

          case 22:
            res.json({
              resultado: false,
              message: "Usuario o contraseña incorrectos"
            });

          case 23:
            ;
            _context5.next = 27;
            break;

          case 26:
            res.json({
              resultado: false,
              message: "Usuario o contraseña incorrectos"
            });

          case 27:
            ;
            _context5.next = 34;
            break;

          case 30:
            _context5.prev = 30;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
            });

          case 34:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 30]]);
  }));

  return function signIn(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.signIn = signIn;

var verifyAdm = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var token, verifyDecoded, aux, decoded, id, user, rol;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            token = req.cookies.token;
            !token && res.json({
              resul: null,
              cod_rol: "",
              message: "Ha ocurrido un problema con la autenticación"
            });
            verifyDecoded = null;
            aux = _jsonwebtoken["default"].verify(token, _config["default"].SECRET, function (err) {
              verifyDecoded = err;
            });

            if (!(verifyDecoded !== null)) {
              _context6.next = 8;
              break;
            }

            res.json({
              resul: null,
              cod_rol: "",
              message: "Su sesión ha expirado"
            });
            _context6.next = 18;
            break;

          case 8:
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            id = decoded.id;
            _context6.next = 12;
            return _usuarios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['roles_id']
            });

          case 12:
            user = _context6.sent;
            id = user.roles_id;
            _context6.next = 16;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['cod_rol']
            });

          case 16:
            rol = _context6.sent;
            rol.cod_rol === "adm" ? res.json({
              resul: true,
              cod_rol: rol.cod_rol,
              message: ""
            }) : res.json({
              resul: false,
              cod_rol: rol.cod_rol,
              message: "Su usuario no se encuentra autorizado para acceder a esta interfaz"
            });

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function verifyAdm(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.verifyAdm = verifyAdm;

var verifySup = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var token, verifyDecoded, decoded, id, user, rol;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            token = req.cookies.token;
            !token && res.json({
              resul: null,
              cod_rol: "",
              message: "Ha ocurrido un problema con la autenticación"
            });
            verifyDecoded = null;

            _jsonwebtoken["default"].verify(token, _config["default"].SECRET, function (err) {
              verifyDecoded = err;
            });

            if (!(verifyDecoded !== null)) {
              _context7.next = 8;
              break;
            }

            res.json({
              resul: null,
              cod_rol: "",
              message: "Su sesión ha expirado"
            });
            _context7.next = 18;
            break;

          case 8:
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            id = decoded.id;
            _context7.next = 12;
            return _usuarios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['roles_id']
            });

          case 12:
            user = _context7.sent;
            id = user.roles_id;
            _context7.next = 16;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['cod_rol']
            });

          case 16:
            rol = _context7.sent;
            rol.cod_rol === "sup" ? res.json({
              resul: true,
              cod_rol: rol.cod_rol,
              message: ""
            }) : res.json({
              resul: false,
              cod_rol: rol.cod_rol,
              message: "Su usuario no se encuentra autorizado para acceder a esta interfaz"
            });

          case 18:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function verifySup(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

exports.verifySup = verifySup;

var verifyUsr = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var token, verifyDecoded, aux, decoded, id, user, rol;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            token = req.cookies.token;
            !token && res.json({
              resul: null,
              cod_rol: "",
              message: "Ha ocurrido un problema con la autenticación"
            });
            verifyDecoded = null;
            aux = _jsonwebtoken["default"].verify(token, _config["default"].SECRET, function (err) {
              verifyDecoded = err;
            });

            if (!(verifyDecoded !== null)) {
              _context8.next = 8;
              break;
            }

            res.json({
              resul: null,
              cod_rol: "",
              message: "Su sesión ha expirado"
            });
            _context8.next = 18;
            break;

          case 8:
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            id = decoded.id;
            _context8.next = 12;
            return _usuarios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['roles_id']
            });

          case 12:
            user = _context8.sent;
            id = user.roles_id;
            _context8.next = 16;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['cod_rol']
            });

          case 16:
            rol = _context8.sent;
            rol.cod_rol === "usr" ? res.json({
              resul: true,
              cod_rol: rol.cod_rol,
              message: ""
            }) : res.json({
              resul: false,
              cod_rol: rol.cod_rol,
              message: "Su usuario no se encuentra autorizado para acceder a esta interfaz"
            });

          case 18:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function verifyUsr(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

exports.verifyUsr = verifyUsr;

var logOut = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return res.cookie('token', _jsonwebtoken["default"].sign({}, _config["default"].SECRET, {
              expiresIn: 1
            }), {
              httpOnly: true
            });

          case 2:
            res.json({
              resultado: true,
              message: "Se ha cerrado la sesión",
              logout: null
            });

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function logOut(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();

exports.logOut = logOut;

var getRol = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var token, verifyDecoded, decoded, id, user, rol;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            token = req.cookies.token;
            !token && res.json({
              resultado: false,
              cod_rol: "",
              message: ""
            });
            verifyDecoded = null;

            _jsonwebtoken["default"].verify(token, _config["default"].SECRET, function (err) {
              verifyDecoded = err;
            });

            console.log(verifyDecoded);

            if (!(verifyDecoded !== null)) {
              _context10.next = 9;
              break;
            }

            res.json({
              resultado: false,
              cod_rol: "",
              message: ""
            });
            _context10.next = 19;
            break;

          case 9:
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            id = decoded.id;
            _context10.next = 13;
            return _usuarios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['roles_id']
            });

          case 13:
            user = _context10.sent;
            id = user.roles_id;
            _context10.next = 17;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['cod_rol']
            });

          case 17:
            rol = _context10.sent;
            res.json({
              resultado: true,
              codRol: rol.cod_rol,
              message: ""
            });

          case 19:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function getRol(_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}();

exports.getRol = getRol;

var confirmUser = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var token, verifyDecoded, decoded, rut, user, userUpdate;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            token = req.params.token;
            !token && res.json({
              resultado: false,
              cod_rol: "",
              message: ""
            });
            verifyDecoded = null;

            _jsonwebtoken["default"].verify(token, _config["default"].SECRET, function (err) {
              verifyDecoded = err;
            });

            if (!(verifyDecoded !== null)) {
              _context11.next = 9;
              break;
            }

            res.json({
              resultado: false,
              cod_rol: "",
              message: ""
            });
            _context11.next = 28;
            break;

          case 9:
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            rut = decoded.rut;
            _context11.next = 13;
            return _usuarios["default"].findOne({
              where: {
                rut: rut
              },
              attributes: ['correo']
            });

          case 13:
            user = _context11.sent;

            if (!user) {
              _context11.next = 26;
              break;
            }

            if (!(user.dataValues.correo == decoded.correo)) {
              _context11.next = 22;
              break;
            }

            _context11.next = 18;
            return _usuarios["default"].update({
              verificacion: true
            }, {
              where: {
                rut: rut
              }
            });

          case 18:
            userUpdate = _context11.sent;
            res.json({
              resultado: true,
              message: "Su cuenta se ha verificado correctamente"
            });
            _context11.next = 24;
            break;

          case 22:
            console.log("Error en verificación de cuenta, no coincide correo de rut: ", rut);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
            });

          case 24:
            _context11.next = 28;
            break;

          case 26:
            console.log("Error en verificación de cuenta, no se encuentra rut: ", rut);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
            });

          case 28:
            _context11.next = 34;
            break;

          case 30:
            _context11.prev = 30;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
            });

          case 34:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 30]]);
  }));

  return function confirmUser(_x19, _x20) {
    return _ref11.apply(this, arguments);
  };
}();

exports.confirmUser = confirmUser;