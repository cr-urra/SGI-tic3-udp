"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTelefonosUsuarios = exports.getTelefonosUsuariosIdForUsuariosId = exports.getTelefonosUsuariosId = exports.getAllTelefonosUsuarios = exports.deleteTelefonosUsuarios = exports.createTelefonosUsuarios = void 0;

var _telefonos_usuarios = _interopRequireDefault(require("../models/telefonos_usuarios"));

var authController = _interopRequireWildcard(require("./auth.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createTelefonosUsuarios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var localCsrf, telefono, usuarios_id, newTelefonoUsuario;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            localCsrf = req.get('X-CSRF-Token');
            _context.next = 4;
            return authController.decryptData(req.body.telefono, localCsrf);

          case 4:
            telefono = _context.sent;
            _context.next = 7;
            return authController.decryptData(req.body.usuarios_id, localCsrf);

          case 7:
            usuarios_id = _context.sent;
            _context.next = 10;
            return _telefonos_usuarios["default"].create({
              telefono: telefono,
              usuarios_id: usuarios_id
            }, {
              fields: ['telefono', 'usuarios_id']
            });

          case 10:
            newTelefonoUsuario = _context.sent;
            res.json({
              resultado: true,
              message: "Telefono de usuario creado correctamente"
            });
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
            });

          case 18:
            ;

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function createTelefonosUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTelefonosUsuarios = createTelefonosUsuarios;

var updateTelefonosUsuarios = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, telefonoUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _telefonos_usuarios["default"].update(body, {
              where: {
                usuarios_id: id
              }
            });

          case 5:
            telefonoUpdate = _context2.sent;
            res.json({
              message: 'Teléfono de usuario actualizado correctamente',
              resultado: true,
              telefonos: telefonoUpdate
            });
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: true,
              telefonos: null
            });

          case 13:
            ;

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateTelefonosUsuarios(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateTelefonosUsuarios = updateTelefonosUsuarios;

var deleteTelefonosUsuarios = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var body, id;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = req.body;
            _context3.prev = 1;
            id = req.params.id;
            _context3.next = 5;
            return _telefonos_usuarios["default"].destroy({
              where: {
                id: id
              }
            });

          case 5:
            if (!body.cascade) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", {
              resultado: true
            });

          case 9:
            res.json({
              message: 'Teléfono de usuario eliminado correctamente',
              resultado: true
            });

          case 10:
            ;
            _context3.next = 21;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

            if (!body.cascade) {
              _context3.next = 20;
              break;
            }

            return _context3.abrupt("return", {
              resultado: false
            });

          case 20:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 21:
            ;

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 13]]);
  }));

  return function deleteTelefonosUsuarios(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteTelefonosUsuarios = deleteTelefonosUsuarios;

var getTelefonosUsuariosId = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, telefono;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _telefonos_usuarios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'telefono', 'usuarios_id']
            });

          case 4:
            telefono = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              telefono: telefono
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
              telefono: null
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function getTelefonosUsuariosId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getTelefonosUsuariosId = getTelefonosUsuariosId;

var getTelefonosUsuariosIdForUsuariosId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var usuarios_id, localCsrf, telefono, id, tel, telefonoEncrypt;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            usuarios_id = req.params.usuarios_id;
            localCsrf = req.get('X-CSRF-Token');
            _context5.next = 5;
            return _telefonos_usuarios["default"].findOne({
              where: {
                usuarios_id: usuarios_id
              },
              attributes: ['id', 'telefono', 'usuarios_id']
            });

          case 5:
            telefono = _context5.sent;
            _context5.next = 8;
            return authController.encryptData(telefono.dataValues.id.toString(), localCsrf);

          case 8:
            id = _context5.sent;
            _context5.next = 11;
            return authController.encryptData(telefono.dataValues.telefono, localCsrf);

          case 11:
            tel = _context5.sent;
            telefonoEncrypt = {
              telefono: tel,
              id: id
            };
            res.json({
              resultado: true,
              message: "",
              telefono: telefonoEncrypt
            });
            _context5.next = 20;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              telefono: null
            });

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 16]]);
  }));

  return function getTelefonosUsuariosIdForUsuariosId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getTelefonosUsuariosIdForUsuariosId = getTelefonosUsuariosIdForUsuariosId;

var getAllTelefonosUsuarios = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var allTelefonos;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _telefonos_usuarios["default"].findAll({
              attributes: ['id', 'telefono', 'usuarios_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allTelefonos = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              telefonos: allTelefonos
            });
            _context6.next = 11;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              telefonos: null
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function getAllTelefonosUsuarios(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAllTelefonosUsuarios = getAllTelefonosUsuarios;