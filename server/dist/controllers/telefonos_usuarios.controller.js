"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTelefonosUsuarios = exports.getTelefonosUsuariosIdForUsuariosId = exports.getTelefonosUsuariosId = exports.deleteTelefonosUsuarios = exports.updateTelefonosUsuarios = exports.createTelefonosUsuarios = void 0;

var _telefonos_usuarios = _interopRequireDefault(require("../models/telefonos_usuarios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createTelefonosUsuarios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, telefono, usuarios_id, newTelefonoUsuario;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, telefono = _req$body.telefono, usuarios_id = _req$body.usuarios_id;
            _context.next = 4;
            return _telefonos_usuarios["default"].create({
              telefono: telefono,
              usuarios_id: usuarios_id
            }, {
              fields: ['telefono', 'usuarios_id']
            });

          case 4:
            newTelefonoUsuario = _context.sent;
            res.json({
              resultado: true,
              message: "Telefono de usuario creado correctamente",
              telefono: newTelefonoUsuario
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: "Ha ocurrido un error, por favor contactese con el administrador",
              resultado: false,
              telefono: null
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
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
    var id;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _telefonos_usuarios["default"].destroy({
              where: {
                usuarios_id: id
              }
            });

          case 4:
            if (!req.body.cascade) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", {
              message: 'Teléfono de usuario eliminado correctamente',
              resultado: true
            });

          case 8:
            res.json({
              message: 'Teléfono de usuario eliminado correctamente',
              resultado: true
            });

          case 9:
            ;
            _context3.next = 20;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

            if (!req.body.cascade) {
              _context3.next = 19;
              break;
            }

            return _context3.abrupt("return", {
              resultado: false
            });

          case 19:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 20:
            ;

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
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
    var id, telefono;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _telefonos_usuarios["default"].findOne({
              where: {
                usuarios_id: id
              },
              attributes: ['id', 'telefono', 'usuarios_id']
            });

          case 4:
            telefono = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              telefono: telefono
            });
            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              telefono: null
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
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