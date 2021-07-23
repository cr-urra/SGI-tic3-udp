"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRolesId = exports.getAllRoles = exports.updateRoles = void 0;

var _roles = _interopRequireDefault(require("../models/roles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var updateRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, body, rolUpdate;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;
            body = req.body;
            _context.next = 5;
            return _roles["default"].update({
              body: body
            }, {
              where: {
                id: id
              }
            });

          case 5:
            rolUpdate = _context.sent;
            res.json({
              message: 'Rol actualizado',
              resultado: true,
              roles: rolUpdate
            });
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              roles: null
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function updateRoles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.updateRoles = updateRoles;

var getAllRoles = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var allRoles;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _roles["default"].findAll({
              attributes: ['id', 'cod_rol', 'nombre'],
              order: [['id', 'DESC']]
            });

          case 3:
            allRoles = _context2.sent;
            res.json({
              resultado: true,
              message: "",
              roles: allRoles
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              roles: null
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getAllRoles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllRoles = getAllRoles;

var getRolesId = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, rol;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _roles["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'nombre', 'cod_rol']
            });

          case 4:
            rol = _context3.sent;
            res.json({
              resultado: true,
              message: "",
              roles: rol
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              roles: null
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getRolesId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getRolesId = getRolesId;