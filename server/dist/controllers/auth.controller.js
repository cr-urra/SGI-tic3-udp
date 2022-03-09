"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyUsr = exports.verifySup = exports.verifyAdm = exports.signUp = exports.signIn = exports.logOut = exports.getRol = exports.encryptPassword = exports.encryptData = exports.decryptData = exports.consulRol = exports.confirmUser = void 0;

var _usuarios = _interopRequireDefault(require("../models/usuarios"));

var _roles = _interopRequireDefault(require("../models/roles"));

var _config = _interopRequireDefault(require("../config"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var mail = _interopRequireWildcard(require("./mail.controller"));

var _nodeForge = _interopRequireDefault(require("node-forge"));

var _cryptoJs = _interopRequireDefault(require("crypto-js"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var decryptData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(encrypted, localCsrf) {
    var decrypted;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            decrypted = _cryptoJs["default"].AES.decrypt(_cryptoJs["default"].enc.Utf8.stringify(encrypted), "Ñ_nñ*@119Bgˀ¬ø*&&3/!dk" + localCsrf.substring(10, 20), {
              iv: localCsrf.substring(20, 30) + "@?bBÑ4"
            });
            return _context.abrupt("return", _cryptoJs["default"].enc.Utf8.stringify(decrypted));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function decryptData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.decryptData = decryptData;

var encryptData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(message, localCsrf) {
    var encrypted;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            encrypted = _cryptoJs["default"].AES.encrypt(message, "Ñ_nñ*@119Bgˀ¬ø*&&3/!dk" + localCsrf.substring(10, 20), {
              iv: localCsrf.substring(20, 30) + "@?bBÑ4"
            });
            return _context2.abrupt("return", _cryptoJs["default"].enc.Utf8.parse(encrypted));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function encryptData(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.encryptData = encryptData;

var comparePassword = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(receivePassword, password) {
    var decipher, pass, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            decipher = _nodeForge["default"].cipher.createDecipher('AES-GCM', _config["default"].KEY);
            decipher.start({
              iv: _config["default"].IV,
              additionalData: 'binary-encoded string',
              tagLength: 128,
              tag: _nodeForge["default"].util.hexToBytes(password.toString().substring(120, password.toString().length))
            });
            decipher.update(_nodeForge["default"].util.createBuffer(_nodeForge["default"].util.hexToBytes(password.toString().substring(0, 120))));
            pass = decipher.finish();
            result = null;
            console.log(decipher.output.toString());

            if (!pass) {
              _context3.next = 12;
              break;
            }

            _context3.next = 9;
            return _bcryptjs["default"].compare(receivePassword.words.toString(), decipher.output.toString());

          case 9:
            result = _context3.sent;
            _context3.next = 13;
            break;

          case 12:
            result = "F";

          case 13:
            return _context3.abrupt("return", result);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function comparePassword(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var encryptPassword = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(password) {
    var salt, hash, cipher;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _bcryptjs["default"].genSalt(10);

          case 2:
            salt = _context4.sent;
            _context4.next = 5;
            return _bcryptjs["default"].hash(password.words.toString(), salt);

          case 5:
            hash = _context4.sent;
            console.log(hash);
            cipher = _nodeForge["default"].cipher.createCipher('AES-GCM', _config["default"].KEY);
            cipher.start({
              iv: _config["default"].IV,
              additionalData: 'binary-encoded string',
              tagLength: 128
            });
            cipher.update(_nodeForge["default"].util.createBuffer(hash));
            cipher.finish();
            console.log(cipher.output.toHex());
            console.log(cipher.mode.tag.toHex());
            return _context4.abrupt("return", cipher.output.toHex() + cipher.mode.tag.toHex());

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function encryptPassword(_x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.encryptPassword = encryptPassword;

var consulRol = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
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

  return function consulRol(_x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.consulRol = consulRol;

var signUp = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var localCsrf, rut, nombre, apellido, roles_id, contraseña, correo, usr, mailToken, body, from, subject, r, userId;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            localCsrf = req.get('X-CSRF-Token');
            _context6.next = 4;
            return decryptData(req.body.rut, localCsrf);

          case 4:
            rut = _context6.sent;
            _context6.next = 7;
            return decryptData(req.body.nombre, localCsrf);

          case 7:
            nombre = _context6.sent;
            _context6.next = 10;
            return decryptData(req.body.apellido, localCsrf);

          case 10:
            apellido = _context6.sent;
            _context6.next = 13;
            return decryptData(req.body.roles_id, localCsrf);

          case 13:
            roles_id = _context6.sent;
            contraseña = req.body.contraseña;
            _context6.next = 17;
            return decryptData(req.body.correo, localCsrf);

          case 17:
            correo = _context6.sent;
            _context6.t0 = _usuarios["default"];
            _context6.t1 = rut;
            _context6.t2 = nombre;
            _context6.t3 = apellido;
            _context6.t4 = roles_id;
            _context6.next = 25;
            return encryptPassword(contraseña);

          case 25:
            _context6.t5 = _context6.sent;
            _context6.t6 = correo;
            _context6.t7 = {
              rut: _context6.t1,
              nombre: _context6.t2,
              apellido: _context6.t3,
              roles_id: _context6.t4,
              contraseña: _context6.t5,
              correo: _context6.t6,
              verificacion: false
            };
            _context6.t8 = {
              fields: ['rut', 'nombre', 'apellido', 'roles_id', 'contraseña', 'correo', 'verificacion']
            };
            _context6.next = 31;
            return _context6.t0.create.call(_context6.t0, _context6.t7, _context6.t8);

          case 31:
            usr = _context6.sent;
            mailToken = _jsonwebtoken["default"].sign({
              rut: rut,
              correo: correo
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            body = mail.templateBienvenida(nombre + " " + apellido, mailToken);
            from = "'SGI PROMA CHILE <web@promachile.cl>'";
            subject = "Correo de bienvenida";
            _context6.next = 38;
            return mail.sendMail(body, from, correo, subject);

          case 38:
            r = _context6.sent;
            if (!r.resultado) console.log("Error al enviar el mensaje");
            _context6.next = 42;
            return encryptData(usr.dataValues.id.toString(), localCsrf);

          case 42:
            userId = _context6.sent;
            res.json({
              resultado: true,
              message: "Usuario registrado correctamente",
              usuario: {
                id: userId
              }
            });
            _context6.next = 50;
            break;

          case 46:
            _context6.prev = 46;
            _context6.t9 = _context6["catch"](0);
            console.log(_context6.t9);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
            });

          case 50:
            ;

          case 51:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 46]]);
  }));

  return function signUp(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signIn = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var rut, localCsrf, rutDecrypt, user, addr, matchPassword, user_token, codRol, result, body, from, subject, r;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            rut = req.body.rut;
            localCsrf = req.get('X-CSRF-Token');
            _context7.next = 5;
            return decryptData(rut, localCsrf);

          case 5:
            rutDecrypt = _context7.sent;
            _context7.next = 8;
            return _usuarios["default"].findOne({
              where: {
                rut: rutDecrypt
              },
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'contraseña', 'verificacion']
            });

          case 8:
            user = _context7.sent;

            if (!user) {
              _context7.next = 51;
              break;
            }

            _context7.next = 12;
            return decryptData(req.body.address, localCsrf);

          case 12:
            addr = _context7.sent;
            _context7.next = 15;
            return comparePassword(req.body.contraseña, user.contraseña);

          case 15:
            matchPassword = _context7.sent;
            user_token = null;

            if (!matchPassword) {
              _context7.next = 47;
              break;
            }

            if (!user.verificacion) {
              _context7.next = 44;
              break;
            }

            user_token = _jsonwebtoken["default"].sign({
              id: user.id,
              antiCsrf: req.get('CSRF-Token')
            }, _config["default"].SECRET, {
              expiresIn: 1200000000
            });
            res.cookie('token', user_token, {
              httpOnly: true
            });
            _context7.next = 23;
            return consulRol(user.roles_id);

          case 23:
            codRol = _context7.sent;
            _context7.next = 26;
            return encryptData(user.nombre, localCsrf);

          case 26:
            _context7.t0 = _context7.sent;
            _context7.next = 29;
            return encryptData(user.apellido, localCsrf);

          case 29:
            _context7.t1 = _context7.sent;
            _context7.next = 32;
            return encryptData(codRol.cod_rol, localCsrf);

          case 32:
            _context7.t2 = _context7.sent;
            result = {
              nombre: _context7.t0,
              apellido: _context7.t1,
              cod_rol: _context7.t2
            };
            body = mail.templateAlerta(result.nombre + " " + result.apellido, user.dataValues.rut, addr);
            from = "'SGI PROMA CHILE <web@promachile.cl>'";
            subject = "Alerta de inicio de sesión";
            _context7.next = 39;
            return mail.sendMail(body, from, "edf1ff78d6@emailnax.com", subject);

          case 39:
            r = _context7.sent;
            if (!r.resultado) console.log("Error al enviar el correo de alerta");
            res.json({
              resultado: true,
              usuario: result
            });
            _context7.next = 45;
            break;

          case 44:
            res.json({
              resultado: false,
              message: "El usuario ingresado no se encuentra verificado"
            });

          case 45:
            _context7.next = 48;
            break;

          case 47:
            res.json({
              resultado: false,
              message: "Usuario o contraseña incorrectos"
            });

          case 48:
            ;
            _context7.next = 52;
            break;

          case 51:
            res.json({
              resultado: false,
              message: "Usuario o contraseña incorrectos"
            });

          case 52:
            ;
            _context7.next = 59;
            break;

          case 55:
            _context7.prev = 55;
            _context7.t3 = _context7["catch"](0);
            console.log(_context7.t3);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
            });

          case 59:
            ;

          case 60:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 55]]);
  }));

  return function signIn(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

exports.signIn = signIn;

var verifyAdm = /*#__PURE__*/function () {
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
            ;

          case 19:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function verifyAdm(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

exports.verifyAdm = verifyAdm;

var verifySup = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var token, verifyDecoded, decoded, id, user, rol;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
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
              _context9.next = 8;
              break;
            }

            res.json({
              resul: null,
              cod_rol: "",
              message: "Su sesión ha expirado"
            });
            _context9.next = 18;
            break;

          case 8:
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            id = decoded.id;
            _context9.next = 12;
            return _usuarios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['roles_id']
            });

          case 12:
            user = _context9.sent;
            id = user.roles_id;
            _context9.next = 16;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['cod_rol']
            });

          case 16:
            rol = _context9.sent;
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
            ;

          case 19:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function verifySup(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();

exports.verifySup = verifySup;

var verifyUsr = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var token, verifyDecoded, aux, decoded, id, user, rol;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
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
              _context10.next = 8;
              break;
            }

            res.json({
              resul: null,
              cod_rol: "",
              message: "Su sesión ha expirado"
            });
            _context10.next = 18;
            break;

          case 8:
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            id = decoded.id;
            _context10.next = 12;
            return _usuarios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['roles_id']
            });

          case 12:
            user = _context10.sent;
            id = user.roles_id;
            _context10.next = 16;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['cod_rol']
            });

          case 16:
            rol = _context10.sent;
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
            ;

          case 19:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function verifyUsr(_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}();

exports.verifyUsr = verifyUsr;

var logOut = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
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
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function logOut(_x19, _x20) {
    return _ref11.apply(this, arguments);
  };
}();

exports.logOut = logOut;

var getRol = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(req, res) {
    var token, verifyDecoded, decoded, id, user, rol;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
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

            if (!(verifyDecoded !== null)) {
              _context12.next = 8;
              break;
            }

            res.json({
              resultado: false,
              cod_rol: "",
              message: ""
            });
            _context12.next = 23;
            break;

          case 8:
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            id = decoded.id;

            if (!(id !== undefined)) {
              _context12.next = 21;
              break;
            }

            _context12.next = 13;
            return _usuarios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['roles_id']
            });

          case 13:
            user = _context12.sent;
            id = user.roles_id;
            _context12.next = 17;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['cod_rol']
            });

          case 17:
            rol = _context12.sent;
            res.json({
              resultado: true,
              codRol: rol.cod_rol,
              message: ""
            });
            _context12.next = 22;
            break;

          case 21:
            res.json({
              resultado: false,
              cod_rol: "",
              message: ""
            });

          case 22:
            ;

          case 23:
            ;

          case 24:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function getRol(_x21, _x22) {
    return _ref12.apply(this, arguments);
  };
}();

exports.getRol = getRol;

var confirmUser = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(req, res) {
    var token, verifyDecoded, decoded, rut, user, userUpdate;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            token = req.params.token;
            !token && res.send("\n            <!DOCTYPE html>\n            <html lang=\"es\">\n                <head>\n                    <link rel=\"icon\" href=\"".concat(__dirname.replace('/controllers', '/files/media'), "/favicon.ico\" />\n                    <title>SGI - Proma Chile</title>\n                </head>\n                <body>\n                    <script>\n                        alert(\"Ha ocurrido un error, porfavor contactese con el administrador\");\n                        location.replace(\"http://localhost:3000/\");\n                    </script>\n                </body>\n            </html>\n        "));
            verifyDecoded = null;

            _jsonwebtoken["default"].verify(token, _config["default"].SECRET, function (err) {
              verifyDecoded = err;
            });

            if (!(verifyDecoded !== null)) {
              _context13.next = 9;
              break;
            }

            res.send("\n                <!DOCTYPE html>\n                <html lang=\"es\">\n                    <head>\n                        <link rel=\"icon\" href=\"".concat(__dirname.replace('/controllers', '/files/media'), "/favicon.ico\" />\n                        <title>SGI - Proma Chile</title>\n                    </head>\n                    <body>\n                        <script>\n                            alert(\"Ha ocurrido un error, porfavor contactese con el administrador\");\n                            location.replace(\"http://localhost:3000/\");\n                        </script>\n                    </body>\n                </html>\n            "));
            _context13.next = 35;
            break;

          case 9:
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            rut = decoded.rut;
            _context13.next = 13;
            return _usuarios["default"].findOne({
              where: {
                rut: rut
              },
              attributes: ['correo', 'verificacion']
            });

          case 13:
            user = _context13.sent;

            if (!user) {
              _context13.next = 33;
              break;
            }

            if (!(user.dataValues.verificacion == false)) {
              _context13.next = 28;
              break;
            }

            if (!(user.dataValues.correo == decoded.correo)) {
              _context13.next = 23;
              break;
            }

            _context13.next = 19;
            return _usuarios["default"].update({
              verificacion: true
            }, {
              where: {
                rut: rut
              }
            });

          case 19:
            userUpdate = _context13.sent;
            res.send("\n                            <!DOCTYPE html>\n                            <html lang=\"es\">\n                                <head>\n                                    <link rel=\"icon\" href=\"".concat(__dirname.replace('/controllers', '/files/media'), "/favicon.ico\" />\n                                    <title>SGI - Proma Chile</title>\n                                </head>\n                                <body>\n                                    <script>\n                                        alert(\"Su cuenta se ha verificado correctamente\");\n                                        location.replace(\"http://localhost:3000/\");\n                                    </script>\n                                </body>\n                            </html>\n                        "));
            _context13.next = 25;
            break;

          case 23:
            console.log("Error en verificación de cuenta, no coincide correo de rut: ", rut);
            res.send("\n                            <!DOCTYPE html>\n                            <html lang=\"es\">\n                                <head>\n                                    <link rel=\"icon\" href=\"".concat(__dirname.replace('/controllers', '/files/media'), "/favicon.ico\" />\n                                    <title>SGI - Proma Chile</title>\n                                </head>\n                                <body>\n                                    <script>\n                                        alert(\"Ha ocurrido un error, porfavor contactese con el administrador\");\n                                        location.replace(\"http://localhost:3000/\");\n                                    </script>\n                                </body>\n                            </html>\n                        "));

          case 25:
            ;
            _context13.next = 30;
            break;

          case 28:
            console.log("El rut recibido:", rut, "ya se encuentra activado");
            res.send("\n                        <!DOCTYPE html>\n                        <html lang=\"es\">\n                            <head>\n                                <link rel=\"icon\" href=\"".concat(__dirname.replace('/controllers', '/files/media'), "/favicon.ico\" />\n                                <title>SGI - Proma Chile</title>\n                            </head>\n                            <body>\n                                <script>\n                                    alert(\"Ha ocurrido un error, porfavor contactese con el administrador\");\n                                    location.replace(\"http://localhost:3000/\");\n                                </script>\n                            </body>\n                        </html>\n                    "));

          case 30:
            ;
            _context13.next = 35;
            break;

          case 33:
            console.log("Error en verificación de cuenta, no se encuentra rut: ", rut);
            res.send("\n                    <!DOCTYPE html>\n                    <html lang=\"es\">\n                        <head>\n                            <link rel=\"icon\" href=\"".concat(__dirname.replace('/controllers', '/files/media'), "/favicon.ico\" />\n                            <title>SGI - Proma Chile</title>\n                        </head>\n                        <body>\n                            <script>\n                                alert(\"Ha ocurrido un error, porfavor contactese con el administrador\");\n                                location.replace(\"http://localhost:3000/\");\n                            </script>\n                        </body>\n                    </html>\n                "));

          case 35:
            _context13.next = 41;
            break;

          case 37:
            _context13.prev = 37;
            _context13.t0 = _context13["catch"](0);
            console.log(_context13.t0);
            res.send("\n            <!DOCTYPE html>\n            <html lang=\"es\">\n                <head>\n                    <link rel=\"icon\" href=\"".concat(__dirname.replace('/controllers', '/files/media'), "/favicon.ico\" />\n                    <title>SGI - Proma Chile</title>\n                </head>\n                <body>\n                    <script>\n                        alert(\"Ha ocurrido un error, porfavor contactese con el administrador\");\n                        location.replace(\"http://localhost:3000/\");\n                    </script>\n                </body>\n            </html>\n        "));

          case 41:
            ;

          case 42:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 37]]);
  }));

  return function confirmUser(_x23, _x24) {
    return _ref13.apply(this, arguments);
  };
}();

exports.confirmUser = confirmUser;