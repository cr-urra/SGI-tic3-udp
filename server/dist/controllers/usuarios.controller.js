"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUsuarios = exports.getUsuariosId = exports.getAllUsuarios = exports.deleteUsuarios = void 0;

var _usuarios = _interopRequireDefault(require("../models/usuarios"));

var _telefonos_usuarios = _interopRequireDefault(require("../models/telefonos_usuarios"));

var ct = _interopRequireWildcard(require("./telefonos_usuarios.controller"));

var authController = _interopRequireWildcard(require("./auth.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var updateUsuarios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, localCsrf, body, userUpdate;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;
            localCsrf = req.get('X-CSRF-Token');
            _context.next = 5;
            return authController.decryptData(req.body.nombre, localCsrf);

          case 5:
            _context.t0 = _context.sent;
            _context.next = 8;
            return authController.decryptData(req.body.apellido, localCsrf);

          case 8:
            _context.t1 = _context.sent;
            _context.next = 11;
            return authController.decryptData(req.body.rut, localCsrf);

          case 11:
            _context.t2 = _context.sent;
            _context.next = 14;
            return authController.decryptData(req.body.correo, localCsrf);

          case 14:
            _context.t3 = _context.sent;
            _context.next = 17;
            return authController.decryptData(req.body.roles_id, localCsrf);

          case 17:
            _context.t4 = _context.sent;
            body = {
              nombre: _context.t0,
              apellido: _context.t1,
              rut: _context.t2,
              correo: _context.t3,
              roles_id: _context.t4
            };
            userUpdate = null;

            if (!(req.body.contraseña != "default")) {
              _context.next = 37;
              break;
            }

            _context.t5 = _usuarios["default"];
            _context.t6 = body.nombre;
            _context.t7 = body.apellido;
            _context.t8 = body.rut;
            _context.t9 = body.correo;
            _context.t10 = body.roles_id;
            _context.next = 29;
            return authController.encryptPassword(req.body.contraseña);

          case 29:
            _context.t11 = _context.sent;
            _context.t12 = {
              nombre: _context.t6,
              apellido: _context.t7,
              rut: _context.t8,
              correo: _context.t9,
              roles_id: _context.t10,
              contraseña: _context.t11
            };
            _context.t13 = {
              where: {
                id: id
              }
            };
            _context.next = 34;
            return _context.t5.update.call(_context.t5, _context.t12, _context.t13);

          case 34:
            userUpdate = _context.sent;
            _context.next = 40;
            break;

          case 37:
            _context.next = 39;
            return _usuarios["default"].update(body, {
              where: {
                id: id
              }
            });

          case 39:
            userUpdate = _context.sent;

          case 40:
            res.json({
              message: 'Usuario actualizado correctamente',
              resultado: true
            });
            _context.next = 47;
            break;

          case 43:
            _context.prev = 43;
            _context.t14 = _context["catch"](0);
            console.log(_context.t14);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 47:
            ;

          case 48:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 43]]);
  }));

  return function updateUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.updateUsuarios = updateUsuarios;

var deleteUsuarios = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var body, id, user, aux;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = req.body;
            _context3.prev = 1;
            id = req.params.id;
            _context3.next = 5;
            return _usuarios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id'],
              include: [_telefonos_usuarios["default"]]
            });

          case 5:
            user = _context3.sent;

            if (!user) {
              _context3.next = 20;
              break;
            }

            req.body = {
              cascade: true
            };
            aux = {
              resultado: true
            };
            user.dataValues.telefonos_usuarios.forEach( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(element) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        req.params = {
                          id: element.dataValues.id
                        };

                        if (!aux.resultado) {
                          _context2.next = 7;
                          break;
                        }

                        _context2.next = 4;
                        return ct.deleteTelefonosUsuarios(req, res);

                      case 4:
                        aux = _context2.sent;
                        _context2.next = 8;
                        break;

                      case 7:
                        res.json({
                          resultado: false,
                          message: "Ha ocurrido un error, porfavor contactese con el administrador"
                        });

                      case 8:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x5) {
                return _ref3.apply(this, arguments);
              };
            }());

            if (!aux.resultado) {
              _context3.next = 16;
              break;
            }

            _context3.next = 13;
            return _usuarios["default"].destroy({
              where: {
                id: id
              }
            });

          case 13:
            res.json({
              message: 'Usuario eliminado correctamente',
              resultado: true
            });
            _context3.next = 17;
            break;

          case 16:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 17:
            ;
            _context3.next = 21;
            break;

          case 20:
            res.json({
              message: 'Usuario no encontrado',
              resultado: false
            });

          case 21:
            ;
            _context3.next = 27;
            break;

          case 24:
            _context3.prev = 24;
            _context3.t0 = _context3["catch"](1);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 27:
            ;

          case 28:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 24]]);
  }));

  return function deleteUsuarios(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deleteUsuarios = deleteUsuarios;

var getUsuariosId = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _usuarios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'correo', 'verificacion', 'contraseña']
            });

          case 4:
            user = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              usuario: user
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              usuario: null
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function getUsuariosId(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getUsuariosId = getUsuariosId;

var getAllUsuarios = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var localCsrf, allUsers, encryptAllUsers, len, i, id, rut, nombre, apellido, roles_id, correo, obj;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            localCsrf = req.get('X-CSRF-Token');
            _context5.next = 4;
            return _usuarios["default"].findAll({
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'correo'],
              order: [['id', 'DESC']]
            });

          case 4:
            allUsers = _context5.sent;
            encryptAllUsers = [];
            len = allUsers.length;
            i = 0;

          case 8:
            if (!(i < len)) {
              _context5.next = 32;
              break;
            }

            _context5.next = 11;
            return authController.encryptData(allUsers[i].dataValues.id.toString(), localCsrf);

          case 11:
            id = _context5.sent;
            _context5.next = 14;
            return authController.encryptData(allUsers[i].dataValues.rut, localCsrf);

          case 14:
            rut = _context5.sent;
            _context5.next = 17;
            return authController.encryptData(allUsers[i].dataValues.nombre, localCsrf);

          case 17:
            nombre = _context5.sent;
            _context5.next = 20;
            return authController.encryptData(allUsers[i].dataValues.apellido, localCsrf);

          case 20:
            apellido = _context5.sent;
            _context5.next = 23;
            return authController.encryptData(allUsers[i].dataValues.roles_id.toString(), localCsrf);

          case 23:
            roles_id = _context5.sent;
            _context5.next = 26;
            return authController.encryptData(allUsers[i].dataValues.correo, localCsrf);

          case 26:
            correo = _context5.sent;
            obj = {
              id: id,
              rut: rut,
              nombre: nombre,
              apellido: apellido,
              roles_id: roles_id,
              correo: correo
            };
            encryptAllUsers.push(obj);

          case 29:
            i++;
            _context5.next = 8;
            break;

          case 32:
            ;
            res.json({
              resultado: true,
              message: "",
              usuarios: encryptAllUsers
            });
            _context5.next = 40;
            break;

          case 36:
            _context5.prev = 36;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              usuarios: false
            });

          case 40:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 36]]);
  }));

  return function getAllUsuarios(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getAllUsuarios = getAllUsuarios;