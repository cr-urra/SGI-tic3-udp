"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyAntiCsrfToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyAntiCsrfToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, localCsrf, decoded, antiCsrf;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              token = req.cookies.token;
              !token && res.json({
                resultado: null,
                message: "Ha ocurrido un problema con la autenticación"
              });
              localCsrf = req.get('X-CSRF-Token');
              decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
              antiCsrf = decoded.antiCsrf;
              antiCsrf == localCsrf ? next() : res.json({
                resultado: null,
                message: "Ha ocurrido un problema con la autenticación"
              });
            } catch (error) {
              console.log(error);
              res.json({
                resultado: false,
                message: "Ha ocurrido un problema, token expirado"
              });
            }

            ;

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function verifyAntiCsrfToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyAntiCsrfToken = verifyAntiCsrfToken;