"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var DEFAULT_LOG_LEVEL = 'silent';
var Logger = function (name) {
    this.name = name || 'log';
    this.level = DEFAULT_LOG_LEVEL;
};
Logger.prototype.getLevels = function () {
    return levels;
};
var levels = {
    silent: -1,
    debug: 0,
    info: 1,
    log: 2,
    warn: 3,
    error: 4,
    fatal: 5
};
_.each(levels, function (level, levelName) {
    if (levelName === 'silent') {
        return;
    }
    Logger.prototype[levelName] = function () {
        if (this.level === 'silent') {
            return;
        }
        if (level >= levels[this.level]) {
            if (Error.stackTraceLimit && this.level == 'debug') {
                var old = Error.stackTraceLimit;
                Error.stackTraceLimit = 2;
                var stack;
                try {
                    console.trace();
                }
                catch (e) {
                    stack = e.stack;
                }
                if (stack) {
                    var lines = stack.split('\n');
                    var caller = lines[2];
                    caller = ':' + caller.substr(6);
                }
                Error.stackTraceLimit = old;
            }
            var str = '[' + levelName + (caller || '') + '] ' + arguments[0], extraArgs, extraArgs = [].slice.call(arguments, 1);
            if (console[levelName]) {
                extraArgs.unshift(str);
                console[levelName].apply(console, extraArgs);
            }
            else {
                if (extraArgs.length) {
                    str += JSON.stringify(extraArgs);
                }
                console.log(str);
            }
        }
    };
});
Logger.prototype.setLevel = function (level) {
    this.level = level;
};
var logger = new Logger('copay');
module.exports = logger;
//# sourceMappingURL=log.js.map