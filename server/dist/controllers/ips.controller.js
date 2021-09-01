"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIpsId = exports.getAllIps = exports.deleteIps = exports.updateIps = exports.createIps = void 0;

var _ips = _interopRequireDefault(require("../models/ips"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createIps = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, ip, usuarios_id, newIp;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, ip = _req$body.ip, usuarios_id = _req$body.usuarios_id;
            _context.next = 4;
            return _ips["default"].create({
              ip: ip,
              usuarios_id: usuarios_id
            }, {
              fields: ['ip', 'usuarios_id']
            });

          case 4:
            newIp = _context.sent;
            return _context.abrupt("return", {
              resultado: true,
              message: "Ip creada correctamente",
              ips: newIp
            });

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", {
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false,
              ips: null
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

  return function createIps(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createIps = createIps;

var updateIps = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, ipUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _ips["default"].update(body, {
              where: {
                id: id
              }
            });

          case 5:
            ipUpdate = _context2.sent;
            res.json({
              message: 'Ip actualizada correctamente',
              resultado: true,
              ips: ipUpdate
            });
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              ips: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateIps(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateIps = updateIps;

var deleteIps = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _ips["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            return _context3.abrupt("return", {
              resultado: true,
              message: 'Ip eliminada correctamente'
            });

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", {
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function deleteIps(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteIps = deleteIps;

var getAllIps = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allIps;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _ips["default"].findAll({
              attributes: ['id', 'ip', 'usuarios_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allIps = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              ips: allIps
            });
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              ips: null
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function getAllIps(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllIps = getAllIps;

var getIpsId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, ip;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _ips["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'ip', 'usuarios_id']
            });

          case 4:
            ip = _context5.sent;
            return _context5.abrupt("return", {
              resultado: true,
              message: "",
              ips: ip
            });

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            return _context5.abrupt("return", {
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              ips: null
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function getIpsId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getIpsId = getIpsId;