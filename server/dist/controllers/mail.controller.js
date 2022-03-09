"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templateBienvenida = exports.templateAlerta = exports.sendTest = exports.sendMail = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var transporter = _nodemailer["default"].createTransport({
  host: "mail.vy9bogruz.tkk",
  port: 465,
  auth: {
    user: "sgi@vy9bogruz.tk",
    pass: "R4lyHN8Uo0)A"
  }
});

var mailTest = "\n    <div style=\"color: black;\">\n                <p>\n                    <p>\n                        Estimado, \n                    </p>\n                    <p>\n                        Usted ha recibido este mensaje de prueba de forma exitosa, \n                    </p>\n                </p>\n                <p>\n                    Saludos.\n                </p>\n                <p>\n                    Pd: Este es un mensaje automatizado, por ende no responder a \xE9l.\n                </p>\n                <p \n                    style=\"margin: 10px 0px\"\n                >\n                    ---\n                </p>\n                <p>\n                    Este correo fue enviado desde la aplicaci\xF3n SGI (Sistema de Gesti\xF3n para Importaciones) de PROMA CHILE.\n                </p>\n            </div>\n";

var templateBienvenida = function templateBienvenida(name, token) {
  return "\n        <div style=\"color: black;\">\n            <p>\n                <p>\n                    Estimado ".concat(name, ", \n                </p>\n                <p>\n                    Bienvenido al Sistema de Gesti\xF3n para Importaciones de PROMA CHILE. Para poder acceder a su interfaz, porfavor verifique su correo ingresando al siguiente \n                    <a href=\"http://localhost:4000/auth/confirm/").concat(token, "\">Link</a>.\n                </p>\n            </p>\n            <p>\n                Saludos.\n            </p>\n            <p>\n                Pd: Este es un mensaje automatizado, por ende no responder a \xE9l.\n            </p>\n            <p \n                style=\"margin: 10px 0px\"\n            >\n                ---\n            </p>\n            <p>\n                Este correo fue enviado desde la aplicaci\xF3n SGI (Sistema de Gesti\xF3n para Importaciones) de PROMA CHILE.\n            </p>\n        </div>\n    ");
};

exports.templateBienvenida = templateBienvenida;

var templateAlerta = function templateAlerta(name, rut, ip) {
  return "\n        <div style=\"color: black;\">\n            <p>\n                <p>\n                    Estimado ".concat(name, ", \n                </p>\n                <p>\n                    Se ha detectado un inicio de sesi\xF3n a la aplicaci\xF3n SGI con su cuenta con nombre de usuario: ").concat(rut, ", la IP P\xFAblica del origen es: ").concat(ip, ".\n                </p>\n            </p>\n            <p>\n                Saludos.\n            </p>\n            <p>\n                Pd: Este es un mensaje automatizado, por ende no responder a \xE9l.\n            </p>\n            <p \n                style=\"margin: 10px 0px\"\n            >\n                ---\n            </p>\n            <p>\n                Este correo fue enviado desde la aplicaci\xF3n SGI (Sistema de Gesti\xF3n para Importaciones) de PROMA CHILE.\n            </p>\n        </div>\n    ");
};

exports.templateAlerta = templateAlerta;

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
              from: "'Anónimo <undefined@promachile.cl>'",
              to: 'f4a0c35f8c@emailnax.com',
              subject: 'test',
              html: mailTest
            });

          case 3:
            info = _context.sent;
            console.log("Mensaje enviado: ", info.messageId);
            info ? res.json({
              resultado: true,
              message: "Correo enviado correctamente",
              html: info
            }) : res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: 'Ha ocurrido un error, porfavor contactese con el administrador',
              resultado: false
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
            console.log("Mensaje enviado: ", info.messageId);
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
            return _context2.abrupt("return", {
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