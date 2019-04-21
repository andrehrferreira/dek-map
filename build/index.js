"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _globby = require("globby");

var _globby2 = _interopRequireDefault(_globby);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(mapPath) {
        var mapPathResolve;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        mapPathResolve = _path2.default.join(process.cwd(), mapPath);
                        _context.next = 3;
                        return (0, _globby2.default)([mapPathResolve + "/*.js", mapPathResolve + "/**/*.js"]).then(function (paths) {
                            paths.forEach(function (filePath) {
                                var fileRequire = require(_path2.default.resolve(filePath));

                                if (typeof fileRequire == "function") fileRequire();else if (typeof fileRequire.default == "function") fileRequire.default();
                            });

                            return true;
                        });

                    case 3:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=index.js.map