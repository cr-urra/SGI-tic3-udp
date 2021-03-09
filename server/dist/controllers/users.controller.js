"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUsers = updateUsers;
exports.deleteUsers = deleteUsers;
exports.getUsersId = getUsersId;
exports.getAllUsers = getAllUsers;

var _users = _interopRequireDefault(require("../models/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function updateUsers(_x, _x2) {
  return _updateUsers.apply(this, arguments);
}

function _updateUsers() {
  _updateUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, _req$body, rut, nombre, apellido, password, users, userUpdate;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _req$body = req.body, rut = _req$body.rut, nombre = _req$body.nombre, apellido = _req$body.apellido, password = _req$body.password;
            _context.next = 4;
            return _users["default"].findOne({
              attributes: ['rut', 'nombre', 'apellido', 'password'],
              where: {
                id: id
              }
            });

          case 4:
            users = _context.sent;
            _context.next = 7;
            return _users["default"].update({
              rut: rut,
              nombre: nombre,
              apellido: apellido,
              password: password
            }, {
              where: {
                id: id
              }
            });

          case 7:
            userUpdate = _context.sent;
            res.json({
              message: 'Usuario actualizado',
              userUpdate: userUpdate
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _updateUsers.apply(this, arguments);
}

;

function deleteUsers(_x3, _x4) {
  return _deleteUsers.apply(this, arguments);
}

function _deleteUsers() {
  _deleteUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _users["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            res.json({
              message: 'Usuario eliminado'
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _deleteUsers.apply(this, arguments);
}

;

function getUsersId(_x5, _x6) {
  return _getUsersId.apply(this, arguments);
}

function _getUsersId() {
  _getUsersId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _users["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'password']
            });

          case 3:
            user = _context3.sent;
            res.json(user);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getUsersId.apply(this, arguments);
}

;

function getAllUsers(_x7, _x8) {
  return _getAllUsers.apply(this, arguments);
}

function _getAllUsers() {
  _getAllUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allUsers;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _users["default"].findAll({
              attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'password'],
              order: [['id', 'DESC']]
            });

          case 2:
            allUsers = _context4.sent;
            res.json({
              allUsers: allUsers
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getAllUsers.apply(this, arguments);
}

;