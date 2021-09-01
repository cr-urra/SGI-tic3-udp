"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTelefonosProveedoresWithFalse = exports.getAllTelefonosProveedores = exports.getTelefonosProveedoresForProveedoresId = exports.getTelefonosProveedoresId = exports.deleteTelefonosProveedores = exports.updateTelefonosProveedores = exports.createTelefonosProveedores = void 0;

var _telefonos_proveedores = _interopRequireDefault(require("../models/telefonos_proveedores"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createTelefonosProveedores = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, telefono, proveedores_id, newTelefonoProveedor;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, telefono = _req$body.telefono, proveedores_id = _req$body.proveedores_id;
            _context.next = 4;
            return _telefonos_proveedores["default"].create({
              telefono: telefono,
              proveedores_id: proveedores_id,
              vigencia: true
            }, {
              fields: ['telefono', 'proveedores_id', 'vigencia']
            });

          case 4:
            newTelefonoProveedor = _context.sent;
            res.json({
              resultado: true,
              message: "Telefono de proveedor creado correctamente",
              telefono: newTelefonoProveedor
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

  return function createTelefonosProveedores(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTelefonosProveedores = createTelefonosProveedores;

var updateTelefonosProveedores = /*#__PURE__*/function () {
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
            return _telefonos_proveedores["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            telefonoUpdate = _context2.sent;
            res.json({
              message: 'Teléfono de proveedor actualizado correctamente',
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

  return function updateTelefonosProveedores(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateTelefonosProveedores = updateTelefonosProveedores;

var deleteTelefonosProveedores = /*#__PURE__*/function () {
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
            return _telefonos_proveedores["default"].findAll({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'telefono', 'proveedores_id']
            });

          case 5:
            telefono = _context3.sent;

            if (!telefono) {
              _context3.next = 17;
              break;
            }

            _context3.next = 9;
            return _telefonos_proveedores["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 9:
            telefonoUpdate = _context3.sent;

            if (!body.cascade) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", {
              resultado: true
            });

          case 14:
            res.json({
              message: 'Teléfono de proveedor eliminado correctamente',
              resultado: true
            });

          case 15:
            _context3.next = 22;
            break;

          case 17:
            if (!body.cascade) {
              _context3.next = 21;
              break;
            }

            return _context3.abrupt("return", {
              resultado: false
            });

          case 21:
            res.json({
              message: 'Teléfono de proveedor no encontrado',
              resultado: true
            });

          case 22:
            ;
            _context3.next = 33;
            break;

          case 25:
            _context3.prev = 25;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

            if (!body.cascade) {
              _context3.next = 32;
              break;
            }

            return _context3.abrupt("return", {
              resultado: false
            });

          case 32:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 33:
            ;

          case 34:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 25]]);
  }));

  return function deleteTelefonosProveedores(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteTelefonosProveedores = deleteTelefonosProveedores;

var getTelefonosProveedoresId = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, telefono;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _telefonos_proveedores["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'telefono', 'proveedores_id']
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

  return function getTelefonosProveedoresId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getTelefonosProveedoresId = getTelefonosProveedoresId;

var getTelefonosProveedoresForProveedoresId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, telefono;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _telefonos_proveedores["default"].findOne({
              where: {
                proveedores_id: id,
                vigencia: true
              },
              attributes: ['id', 'telefono', 'proveedores_id']
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

  return function getTelefonosProveedoresForProveedoresId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getTelefonosProveedoresForProveedoresId = getTelefonosProveedoresForProveedoresId;

var getAllTelefonosProveedores = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var allTelefonos;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _telefonos_proveedores["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'telefono', 'proveedores_id'],
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

  return function getAllTelefonosProveedores(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAllTelefonosProveedores = getAllTelefonosProveedores;

var getAllTelefonosProveedoresWithFalse = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var allTelefonos;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _telefonos_proveedores["default"].findAll({
              attributes: ['id', 'telefono', 'proveedores_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allTelefonos = _context7.sent;
            res.json({
              resultado: true,
              message: "",
              telefonos: allTelefonos
            });
            _context7.next = 11;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              telefonos: null
            });

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function getAllTelefonosProveedoresWithFalse(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getAllTelefonosProveedoresWithFalse = getAllTelefonosProveedoresWithFalse;