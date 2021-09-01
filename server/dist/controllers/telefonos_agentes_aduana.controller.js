"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTelefonosAgentesAduanaForAgentesId = exports.getAllTelefonosAgentesAduana = exports.getAllTelefonosAgentesAduanaWithFalse = exports.getTelefonosAgentesAduanaId = exports.deleteTelefonosAgentesAduana = exports.updateTelefonosAgentesAduana = exports.createTelefonosAgentesAduana = void 0;

var _telefonos_agentes_aduana = _interopRequireDefault(require("../models/telefonos_agentes_aduana"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createTelefonosAgentesAduana = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, telefono, agentes_aduana_id, newTelefonoUsuario;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, telefono = _req$body.telefono, agentes_aduana_id = _req$body.agentes_aduana_id;
            _context.next = 4;
            return _telefonos_agentes_aduana["default"].create({
              telefono: telefono,
              agentes_aduana_id: agentes_aduana_id,
              vigencia: true
            }, {
              fields: ['telefono', 'agentes_aduana_id', 'vigencia']
            });

          case 4:
            newTelefonoUsuario = _context.sent;
            res.json({
              resultado: true,
              message: "Telefono de agente de aduana creado correctamente",
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

  return function createTelefonosAgentesAduana(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTelefonosAgentesAduana = createTelefonosAgentesAduana;

var updateTelefonosAgentesAduana = /*#__PURE__*/function () {
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
            return _telefonos_agentes_aduana["default"].update(body, {
              where: {
                agentes_aduana_id: id,
                vigencia: true
              }
            });

          case 5:
            telefonoUpdate = _context2.sent;
            res.json({
              message: 'Teléfono de agente de aduana actualizado correctamente',
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

  return function updateTelefonosAgentesAduana(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateTelefonosAgentesAduana = updateTelefonosAgentesAduana;

var deleteTelefonosAgentesAduana = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var body, id, telefono, telefonoUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = req.body;
            _context3.prev = 1;
            id = req.params.id;
            _context3.next = 5;
            return _telefonos_agentes_aduana["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'telefono', 'agentes_aduana_id']
            });

          case 5:
            telefono = _context3.sent;

            if (!telefono) {
              _context3.next = 10;
              break;
            }

            _context3.next = 9;
            return _telefonos_agentes_aduana["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 9:
            telefonoUpdate = _context3.sent;

          case 10:
            if (!body.cascade) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", {
              message: 'Teléfono de agente de aduana eliminado correctamente',
              resultado: true
            });

          case 14:
            res.json({
              message: 'Teléfono de agente de aduana eliminado correctamente',
              resultado: true
            });

          case 15:
            _context3.next = 25;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

            if (!body.cascade) {
              _context3.next = 24;
              break;
            }

            return _context3.abrupt("return", {
              resultado: false
            });

          case 24:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 25:
            ;

          case 26:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 17]]);
  }));

  return function deleteTelefonosAgentesAduana(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteTelefonosAgentesAduana = deleteTelefonosAgentesAduana;

var getTelefonosAgentesAduanaId = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, telefono;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _telefonos_agentes_aduana["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'telefono', 'agentes_aduana_id']
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

  return function getTelefonosAgentesAduanaId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getTelefonosAgentesAduanaId = getTelefonosAgentesAduanaId;

var getAllTelefonosAgentesAduanaWithFalse = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var allTelefonos;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _telefonos_agentes_aduana["default"].findAll({
              attributes: ['id', 'telefono', 'agentes_aduana_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allTelefonos = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              telefonos: allTelefonos
            });
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              telefonos: null
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function getAllTelefonosAgentesAduanaWithFalse(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getAllTelefonosAgentesAduanaWithFalse = getAllTelefonosAgentesAduanaWithFalse;

var getAllTelefonosAgentesAduana = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var allTelefonos;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _telefonos_agentes_aduana["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'telefono', 'agentes_aduana_id'],
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

  return function getAllTelefonosAgentesAduana(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAllTelefonosAgentesAduana = getAllTelefonosAgentesAduana;

var getTelefonosAgentesAduanaForAgentesId = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, telefonos;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _context7.next = 4;
            return _telefonos_agentes_aduana["default"].findAll({
              where: {
                agentes_aduana_id: id,
                vigencia: true
              },
              attributes: ['id', 'telefono', 'agentes_aduana_id']
            });

          case 4:
            telefonos = _context7.sent;
            res.json({
              resultado: true,
              message: "",
              telefono: telefonos
            });
            _context7.next = 12;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              telefono: null
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));

  return function getTelefonosAgentesAduanaForAgentesId(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getTelefonosAgentesAduanaForAgentesId = getTelefonosAgentesAduanaForAgentesId;