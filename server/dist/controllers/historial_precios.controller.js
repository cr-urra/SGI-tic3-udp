"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHistorialPreciosMaxDate = exports.getAllHistorialPreciosWithFalse = exports.getHistorialPreciosIdForProductosId = exports.getHistorialPreciosId = exports.getAllHistorialPrecios = exports.deleteHistorialPrecios = exports.updateHistorialPrecios = exports.createHistorialPrecios = void 0;

var _historial_precios = _interopRequireDefault(require("../models/historial_precios"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createHistorialPrecios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, precio, productos_id, fecha, newHistorialPrecios;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, precio = _req$body.precio, productos_id = _req$body.productos_id, fecha = _req$body.fecha;
            _context.next = 4;
            return _historial_precios["default"].create({
              precio: precio,
              productos_id: productos_id,
              fecha: _sequelize["default"].literal('CURRENT_TIMESTAMP'),
              vigencia: true
            }, {
              fields: ['precio', 'productos_id', 'fecha', 'vigencia']
            });

          case 4:
            newHistorialPrecios = _context.sent;
            res.json({
              resultado: true,
              message: "Precio creado correctamente en Historial",
              historialPrecios: newHistorialPrecios
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false,
              historialPrecios: null
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

  return function createHistorialPrecios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createHistorialPrecios = createHistorialPrecios;

var updateHistorialPrecios = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, historialPreciosUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _historial_precios["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            historialPreciosUpdate = _context2.sent;
            res.json({
              message: 'Precio actualizado correctamente en historial',
              resultado: true,
              historialPrecios: historialPreciosUpdate
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
              historialPrecios: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateHistorialPrecios(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateHistorialPrecios = updateHistorialPrecios;

var deleteHistorialPrecios = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, historialPrecio, historialPreciosUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _historial_precios["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'precio', 'fecha', 'productos_id']
            });

          case 4:
            historialPrecio = _context3.sent;

            if (!historialPrecio) {
              _context3.next = 9;
              break;
            }

            _context3.next = 8;
            return _historial_precios["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 8:
            historialPreciosUpdate = _context3.sent;

          case 9:
            res.json({
              resultado: true,
              message: 'Precio eliminado correctamente de historial'
            });
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 16:
            ;

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function deleteHistorialPrecios(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteHistorialPrecios = deleteHistorialPrecios;

var getAllHistorialPrecios = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allHistorialPrecios;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _historial_precios["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'precio', 'fecha', 'productos_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allHistorialPrecios = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              historialPrecios: allHistorialPrecios
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
              historialPrecios: null
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

  return function getAllHistorialPrecios(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllHistorialPrecios = getAllHistorialPrecios;

var getHistorialPreciosId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, historialPrecio;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _historial_precios["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'precio', 'fecha', 'productos_id']
            });

          case 4:
            historialPrecio = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              historialPrecios: historialPrecio
            });
            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              historialPrecios: null
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

  return function getHistorialPreciosId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getHistorialPreciosId = getHistorialPreciosId;

var getHistorialPreciosIdForProductosId = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, historialPrecio;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _historial_precios["default"].findOne({
              where: {
                productos_id: id,
                vigencia: true
              },
              attributes: ['id', 'precio', 'fecha', 'productos_id']
            });

          case 4:
            historialPrecio = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              historialPrecios: historialPrecio
            });
            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              historialPrecios: null
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function getHistorialPreciosIdForProductosId(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getHistorialPreciosIdForProductosId = getHistorialPreciosIdForProductosId;

var getAllHistorialPreciosWithFalse = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var allHistorialPrecios;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _historial_precios["default"].findAll({
              attributes: ['id', 'precio', 'fecha', 'productos_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allHistorialPrecios = _context7.sent;
            res.json({
              resultado: true,
              message: "",
              historialPrecios: allHistorialPrecios
            });
            _context7.next = 11;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              historialPrecios: null
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function getAllHistorialPreciosWithFalse(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getAllHistorialPreciosWithFalse = getAllHistorialPreciosWithFalse;

var getHistorialPreciosMaxDate = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var id, maxHistorialPrecios, datesPrecios, producto, maxDate;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            id = req.params.id;
            _context8.next = 4;
            return _historial_precios["default"].findAll({
              where: {
                vigencia: true,
                productos_id: id
              },
              attributes: ['id', 'precio', 'fecha', 'productos_id']
            });

          case 4:
            maxHistorialPrecios = _context8.sent;
            datesPrecios = [];
            producto = null;
            maxHistorialPrecios.forEach(function (element) {
              datesPrecios.push(element.dataValues.fecha);
            });
            maxDate = new Date(Math.max.apply(null, datesPrecios));
            maxHistorialPrecios.forEach(function (element) {
              if (String(element.dataValues.fecha) == String(maxDate)) {
                producto = element.dataValues;
              }
            });
            res.json({
              resultado: true,
              message: "",
              historialPrecios: producto
            });
            _context8.next = 17;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              historialPrecios: null
            });

          case 17:
            ;

          case 18:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 13]]);
  }));

  return function getHistorialPreciosMaxDate(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getHistorialPreciosMaxDate = getHistorialPreciosMaxDate;