"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateHistorialPrecios = exports.getHistorialPreciosMaxDate = exports.getHistorialPreciosIdForProductosId = exports.getHistorialPreciosId = exports.getHistorialPreciosBetweenDates = exports.getAllHistorialPreciosWithFalse = exports.getAllHistorialPrecios = exports.deleteHistorialPrecios = exports.createHistorialPrecios = void 0;

var _historial_precios = _interopRequireDefault(require("../models/historial_precios"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createHistorialPrecios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, precio, productos_id, newHistorialPrecios;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, precio = _req$body.precio, productos_id = _req$body.productos_id;
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
    var body, id, historialPrecio, historialPreciosUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = req.body;
            _context3.prev = 1;
            id = req.params.id;
            _context3.next = 5;
            return _historial_precios["default"].findAll({
              where: {
                id: id
              },
              attributes: ['id', 'precio', 'fecha', 'productos_id']
            });

          case 5:
            historialPrecio = _context3.sent;

            if (!historialPrecio) {
              _context3.next = 17;
              break;
            }

            _context3.next = 9;
            return _historial_precios["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 9:
            historialPreciosUpdate = _context3.sent;

            if (!body.cascade) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", {
              resultado: true
            });

          case 14:
            res.json({
              resultado: true,
              message: 'Precio de historial eliminado correctamente'
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
              resultado: true,
              message: 'Precio en historial no encontrado'
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

  return function deleteHistorialPrecios(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteHistorialPrecios = deleteHistorialPrecios;

var getAllHistorialPrecios = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, allHistorialPrecios, arr;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _historial_precios["default"].findAll({
              where: {
                productos_id: id,
                vigencia: true
              },
              attributes: ['id', 'precio', 'fecha', 'productos_id'],
              order: [['id', 'DESC']]
            });

          case 4:
            allHistorialPrecios = _context4.sent;
            arr = [];
            allHistorialPrecios.forEach(function (element) {
              arr.push(element.dataValues.precio);
            });
            res.json({
              resultado: true,
              message: "",
              historialPrecios: arr
            });
            _context4.next = 14;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              historialPrecios: null
            });

          case 14:
            ;

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
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
                productos_id: id,
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

var getHistorialPreciosBetweenDates = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var id, minDate, maxDate, lastYear, maxHistorialPrecios, filter;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            id = req.body.Producto.id;
            minDate = req.body.fecha1;
            maxDate = req.body.fecha2;
            if (minDate == null) minDate = new Date(0, 0, 0);
            lastYear = new Date().getFullYear() + 1;
            if (maxDate == null) maxDate = new Date(lastYear, 11, 11);
            _context9.next = 9;
            return _historial_precios["default"].findAll({
              where: {
                vigencia: true,
                productos_id: id
              },
              attributes: ['id', 'precio', 'fecha', 'productos_id']
            });

          case 9:
            maxHistorialPrecios = _context9.sent;
            filter = maxHistorialPrecios.filter(function (element) {
              return new Date(element.dataValues.fecha.getFullYear().toString() + "-" + (element.dataValues.fecha.getMonth() + 1 <= 9 ? "0" + (element.dataValues.fecha.getMonth() + 1).toString() : (element.dataValues.fecha.getMonth() + 1).toString()) + "-" + element.dataValues.fecha.getDate().toString()) <= new Date(maxDate) && new Date(element.dataValues.fecha.getFullYear().toString() + "-" + (element.dataValues.fecha.getMonth() + 1 <= 9 ? "0" + (element.dataValues.fecha.getMonth() + 1).toString() : (element.dataValues.fecha.getMonth() + 1).toString()) + "-" + element.dataValues.fecha.getDate().toString()) >= new Date(minDate);
            });
            res.json({
              resultado: true,
              message: "",
              historialPrecios: filter
            });
            _context9.next = 18;
            break;

          case 14:
            _context9.prev = 14;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              historialPrecios: null
            });

          case 18:
            ;

          case 19:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 14]]);
  }));

  return function getHistorialPreciosBetweenDates(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.getHistorialPreciosBetweenDates = getHistorialPreciosBetweenDates;