"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllDolarMensualWithFalse = exports.getDolarMensualId = exports.getAllDolarMensual = exports.deleteDolarMensual = exports.updateDolarMensual = exports.createDolarMensual = void 0;

var _dolar_mensual = _interopRequireDefault(require("../models/dolar_mensual"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _pedidos = _interopRequireDefault(require("../models/pedidos"));

var _historial_dolar = _interopRequireDefault(require("../models/historial_dolar"));

var pedidosController = _interopRequireWildcard(require("./pedidos.controller"));

var historialDolarController = _interopRequireWildcard(require("./historial_dolar.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createDolarMensual = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var valor_mensual, newDolarMensual;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            valor_mensual = req.body.valor_mensual;
            _context.next = 4;
            return _dolar_mensual["default"].create({
              valor_mensual: valor_mensual,
              fecha_registro: _sequelize["default"].literal('CURRENT_TIMESTAMP'),
              vigencia: true
            }, {
              fields: ['valor_mensual', 'fecha_registro', 'vigencia']
            });

          case 4:
            newDolarMensual = _context.sent;
            res.json({
              resultado: true,
              message: "Dolar mensual creado correctamente",
              dolarMensual: newDolarMensual
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
              dolarMensual: null
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

  return function createDolarMensual(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createDolarMensual = createDolarMensual;

var updateDolarMensual = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, dolarMensualUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _dolar_mensual["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            dolarMensualUpdate = _context2.sent;
            res.json({
              message: 'Dolar mensual actualizado correctamente',
              resultado: true,
              dolarMensual: dolarMensualUpdate
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
              dolarMensual: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateDolarMensual(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateDolarMensual = updateDolarMensual;

var deleteDolarMensual = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _dolarMensual, pedidosIds, historialDolarIds, aux, dolarMensualUpdate;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _dolarMensual.findOne({
              where: {
                id: id
              },
              attributes: ['id', 'valor_mensual', 'fecha_registro'],
              include: [_pedidos["default"], _historial_dolar["default"]]
            });

          case 4:
            _dolarMensual = _context3.sent;

            if (!_dolarMensual) {
              _context3.next = 29;
              break;
            }

            pedidosIds = [];
            historialDolarIds = [];

            _dolarMensual.dataValues.pedidos.forEach(function (element) {
              pedidosIds.push(parseInt(element.dataValues.id));
            });

            _dolarMensual.dataValues.historial_dolar.forEach(function (element) {
              historialDolarIds.push(parseInt(element.dataValues.id));
            });

            req.params = {
              id: pedidosIds
            };
            _context3.next = 13;
            return pedidosController.deletePedidos(req, res);

          case 13:
            aux = _context3.sent;
            req.params = {
              id: historialDolarIds
            };

            if (!aux.resultado) {
              _context3.next = 21;
              break;
            }

            _context3.next = 18;
            return historialDolarController.deleteHistorialDolar(req, res);

          case 18:
            aux = _context3.sent;
            _context3.next = 22;
            break;

          case 21:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 22:
            if (!aux.resultado) {
              _context3.next = 28;
              break;
            }

            _context3.next = 25;
            return _dolarMensual.update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 25:
            dolarMensualUpdate = _context3.sent;
            _context3.next = 29;
            break;

          case 28:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 29:
            res.json({
              resultado: true,
              message: 'Dolar mensual eliminado correctamente'
            });
            _context3.next = 36;
            break;

          case 32:
            _context3.prev = 32;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 36:
            ;

          case 37:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 32]]);
  }));

  return function deleteDolarMensual(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteDolarMensual = deleteDolarMensual;

var getAllDolarMensual = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allDolarMensual;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _dolar_mensual["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'valor_mensual', 'fecha_registro'],
              order: [['id', 'DESC']]
            });

          case 3:
            allDolarMensual = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              dolarMensual: allDolarMensual
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
              dolarMensual: null
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

  return function getAllDolarMensual(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllDolarMensual = getAllDolarMensual;

var getDolarMensualId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, getDolarMensual;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _dolar_mensual["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'valor_mensual', 'fecha_registro']
            });

          case 4:
            getDolarMensual = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              dolarMensual: getDolarMensual
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
              dolarMensual: null
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

  return function getDolarMensualId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getDolarMensualId = getDolarMensualId;

var getAllDolarMensualWithFalse = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var allDolarMensual;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _dolar_mensual["default"].findAll({
              attributes: ['id', 'valor_mensual', 'fecha_registro'],
              order: [['id', 'DESC']]
            });

          case 3:
            allDolarMensual = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              dolarMensual: allDolarMensual
            });
            _context6.next = 11;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              dolarMensual: null
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function getAllDolarMensualWithFalse(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAllDolarMensualWithFalse = getAllDolarMensualWithFalse;