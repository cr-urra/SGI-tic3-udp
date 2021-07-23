"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMail = exports.sendTest = exports.templateBienvenida = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var transporter = _nodemailer["default"].createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b105f20bca2103",
    pass: "63c6bcb6ac5444"
  }
});

var templateBienvenida = function templateBienvenida(name, token) {
  return "\n        <div style=\"color: black;\">\n            <p>\n                <p>\n                    Estimado ".concat(name, ", \n                </p>\n                <p>\n                    Bienvenido al Sistema de Gesti&oacuten para Importaciones de PROMACHILE. Para poder acceder a su interfaz, porfavor verifique su correo ingresando al siguiente \n                    <a href=\"http://localhost:4000/auth/confirm/").concat(token, "\">Link</a>.\n                </p>\n            </p>\n            <p>\n                Saludos.\n            </p>\n            <p>\n                Pd: Este es un mensaje automatizado, por ende no responder a el.\n            </p>\n            <p \n                style=\"margin: 10px 0px\"\n            >\n                ---\n            </p>\n            <p>\n                Este correo fue enviado desde la aplicaci&oacuten SGI (Sistema de Gesti&oacuten para Importaciones) de PROMACHILE.\n            </p>\n        </div>\n    ");
};

exports.templateBienvenida = templateBienvenida;

var sendTest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var info;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return transporter.sendMail({
              from: "'Tetoko Tukulo <tukulito@promachile.cl>'",
              to: 'cristobal.urra@mail.udp.cl',
              subject: 'test',
              html: templateBienvenida()
            });

          case 3:
            info = _context.sent;
            console.log("Message sent: ", info.messageId);
            info ? res.json({
              resultado: true,
              message: "Correo enviado correctamente",
              html: info
            }) : res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              correo: null
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              correo: null
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function sendTest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.sendTest = sendTest;

var sendMail = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(body, from, to, subject) {
    var info, r;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return transporter.sendMail({
              from: from,
              to: to,
              subject: subject,
              html: body
            });

          case 3:
            info = _context2.sent;
            console.log("Message sent: ", info.messageId);
            r = null;

            if (info) {
              r = {
                correo: info,
                resultado: true
              };
            } else {
              r = {
                correo: null,
                resultado: false
              };
            }

            return _context2.abrupt("return", r);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false,
              correo: null
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function sendMail(_x3, _x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.sendMail = sendMail;