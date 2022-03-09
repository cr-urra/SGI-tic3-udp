"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePaises = exports.getPaisesId = exports.getAllPaisesWithFalse = exports.getAllPaises = exports.deletePaises = exports.createPaises = void 0;

var _paises = _interopRequireDefault(require("../models/paises"));

var _cuentas_bancos = _interopRequireDefault(require("../models/cuentas_bancos"));

var cuentaBancosController = _interopRequireWildcard(require("./cuentas_bancos.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createPaises = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, pais, codigo_iban, newPais;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, pais = _req$body.pais, codigo_iban = _req$body.codigo_iban;
            _context.next = 4;
            return _paises["default"].create({
              pais: pais,
              codigo_iban: codigo_iban,
              vigencia: true
            }, {
              fields: ['pais', 'codigo_iban', 'vigencia']
            });

          case 4:
            newPais = _context.sent;
            res.json({
              resultado: true,
              message: "País creado correctamente",
              paises: newPais
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
              paises: null
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

  return function createPaises(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPaises = createPaises;

var updatePaises = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, pais;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _paises["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            pais = _context2.sent;
            res.json({
              message: 'País actualizado',
              resultado: true,
              paises: pais
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
              paises: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updatePaises(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updatePaises = updatePaises;

var deletePaises = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, pais, aux, paisUpdate;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _paises["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'pais', 'codigo_iban'],
              include: [_cuentas_bancos["default"]]
            });

          case 4:
            pais = _context4.sent;

            if (!pais) {
              _context4.next = 20;
              break;
            }

            aux = {
              resultado: true
            };
            req.body = {
              cascade: true
            };
            pais.dataValues.cuentas_bancos.forEach( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(element) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        req.params = {
                          id: parseInt(element.dataValues.id)
                        };

                        if (!aux.resultado) {
                          _context3.next = 7;
                          break;
                        }

                        _context3.next = 4;
                        return cuentaBancosController.deleteCuentasBancos(req, res);

                      case 4:
                        aux = _context3.sent;
                        _context3.next = 8;
                        break;

                      case 7:
                        res.json({
                          resultado: false,
                          message: "Ha ocurrido un error, porfavor contactese con el administrador"
                        });

                      case 8:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x7) {
                return _ref4.apply(this, arguments);
              };
            }());
            paisUpdate = null;

            if (!aux.resultado) {
              _context4.next = 16;
              break;
            }

            _context4.next = 13;
            return _paises["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 13:
            paisUpdate = _context4.sent;
            _context4.next = 17;
            break;

          case 16:
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 17:
            res.json({
              resultado: true,
              message: 'País eliminado correctamente'
            });
            _context4.next = 21;
            break;

          case 20:
            res.json({
              resultado: true,
              message: 'País no encontrado'
            });

          case 21:
            ;
            _context4.next = 28;
            break;

          case 24:
            _context4.prev = 24;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador"
            });

          case 28:
            ;

          case 29:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 24]]);
  }));

  return function deletePaises(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deletePaises = deletePaises;

var getAllPaises = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var allPaises;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _paises["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'pais', 'codigo_iban'],
              order: [['id', 'DESC']]
            });

          case 3:
            allPaises = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              paises: allPaises
            });
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              resultado: false,
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              paises: null
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function getAllPaises(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getAllPaises = getAllPaises;

var getPaisesId = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, pais;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _paises["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'pais', 'codigo_iban']
            });

          case 4:
            pais = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              paises: pais
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
              paises: null
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

  return function getPaisesId(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getPaisesId = getPaisesId;

var getAllPaisesWithFalse = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var allPaises;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _paises["default"].findAll({
              attributes: ['id', 'pais', 'codigo_iban'],
              order: [['id', 'DESC']]
            });

          case 3:
            allPaises = _context7.sent;
            res.json({
              resultado: true,
              message: "",
              paises: allPaises
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
              paises: null
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

  return function getAllPaisesWithFalse(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getAllPaisesWithFalse = getAllPaisesWithFalse;