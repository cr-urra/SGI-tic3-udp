"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDocumentos = exports.getDocumentosId = exports.getAllDocumentosWithFalse = exports.getAllDocumentos = exports.deleteDocumentos = exports.createDocumentos = void 0;

var _documentos = _interopRequireDefault(require("../models/documentos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createDocumentos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre_documento, pedidos_id, newDocumento;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, nombre_documento = _req$body.nombre_documento, pedidos_id = _req$body.pedidos_id;
            _context.next = 4;
            return _documentos["default"].create({
              nombre_documento: nombre_documento,
              pedidos_id: pedidos_id,
              vigencia: true
            }, {
              fields: ['nombre_documento', 'pedidos_id', 'vigencia']
            });

          case 4:
            newDocumento = _context.sent;
            res.json({
              resultado: true,
              message: "Documento creado correctamente",
              documentos: newDocumento
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: "Ha ocurrido un error, porfavor contactese con el administrador",
              resultado: false
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

  return function createDocumentos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createDocumentos = createDocumentos;

var updateDocumentos = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, body, documentoUpdate;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            body = req.body;
            _context2.next = 5;
            return _documentos["default"].update(body, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 5:
            documentoUpdate = _context2.sent;
            res.json({
              message: 'Documento actualizado correctamente',
              resultado: true,
              documentos: documentoUpdate
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
              documentos: null
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function updateDocumentos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateDocumentos = updateDocumentos;

var deleteDocumentos = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, documento, documentoUpdate;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _documentos["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'nombre_documento', 'pedidos_id']
            });

          case 4:
            documento = _context3.sent;

            if (!documento) {
              _context3.next = 16;
              break;
            }

            _context3.next = 8;
            return _documentos["default"].update({
              vigencia: false
            }, {
              where: {
                id: id,
                vigencia: true
              }
            });

          case 8:
            documentoUpdate = _context3.sent;

            if (!req.body.cascade) {
              _context3.next = 13;
              break;
            }

            return _context3.abrupt("return", {
              resultado: true
            });

          case 13:
            res.json({
              resultado: true,
              message: 'Documento eliminado correctamente'
            });

          case 14:
            _context3.next = 21;
            break;

          case 16:
            if (!req.body.cascade) {
              _context3.next = 20;
              break;
            }

            return _context3.abrupt("return", {
              resultado: false
            });

          case 20:
            res.json({
              resultado: true,
              message: 'Documento no encontrado'
            });

          case 21:
            ;
            _context3.next = 32;
            break;

          case 24:
            _context3.prev = 24;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

            if (!req.body.cascade) {
              _context3.next = 31;
              break;
            }

            return _context3.abrupt("return", {
              resultado: false
            });

          case 31:
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });

          case 32:
            ;

          case 33:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 24]]);
  }));

  return function deleteDocumentos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteDocumentos = deleteDocumentos;

var getAllDocumentos = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allDocumentos;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _documentos["default"].findAll({
              where: {
                vigencia: true
              },
              attributes: ['id', 'nombre_documento', 'pedidos_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allDocumentos = _context4.sent;
            res.json({
              resultado: true,
              message: "",
              documentos: allDocumentos
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
              documentos: null
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

  return function getAllDocumentos(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getAllDocumentos = getAllDocumentos;

var getDocumentosId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, documento;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _documentos["default"].findOne({
              where: {
                id: id,
                vigencia: true
              },
              attributes: ['id', 'nombre_documento', 'pedidos_id']
            });

          case 4:
            documento = _context5.sent;
            res.json({
              resultado: true,
              message: "",
              documentos: documento
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
              documentos: null
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

  return function getDocumentosId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getDocumentosId = getDocumentosId;

var getAllDocumentosWithFalse = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var allDocumentos;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _documentos["default"].findAll({
              attributes: ['id', 'nombre_documento', 'pedidos_id'],
              order: [['id', 'DESC']]
            });

          case 3:
            allDocumentos = _context6.sent;
            res.json({
              resultado: true,
              message: "",
              documentos: allDocumentos
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
              documentos: null
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

  return function getAllDocumentosWithFalse(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getAllDocumentosWithFalse = getAllDocumentosWithFalse;