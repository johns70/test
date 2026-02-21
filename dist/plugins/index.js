"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = exports.getAge = exports.getUUID = void 0;
const http_client_plugin_1 = require("../plugins/http-client.plugin");
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_client_plugin_1.httpClientPlugin; } });
const get_id_plugin_1 = require("../plugins/get-id.plugin");
Object.defineProperty(exports, "getUUID", { enumerable: true, get: function () { return get_id_plugin_1.getUUID; } });
const get_age_plugin_1 = require("./get-age.plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
//# sourceMappingURL=index.js.map