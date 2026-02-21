"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
const { v4: uuidv4 } = require('uuid'); // Forma ruda de CommonJS
const getUUID = () => {
    return uuidv4();
};
exports.getUUID = getUUID;
//# sourceMappingURL=get-id.plugin.js.map