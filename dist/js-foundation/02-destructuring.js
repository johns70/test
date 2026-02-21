"use strict";
// console.log( process.env );
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const process_1 = __importDefault(require("process"));
const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process_1.default.env;
// console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });
exports.characters = ['Superman', 'Flash', 'Green Lantern', 'Batman'];
const [, , , batman] = exports.characters;
// console.log(batman);
//# sourceMappingURL=02-destructuring.js.map