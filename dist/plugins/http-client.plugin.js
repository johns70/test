"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientPlugin = void 0;
const axios_1 = __importDefault(require("axios"));
exports.httpClientPlugin = {
    get: async (url) => {
        try {
            const { data } = await axios_1.default.get(url);
            return data;
        }
        catch (err) {
            throw `Ha ocurrido un error`;
        }
        // const resp = await fetch( url );
        // return await resp.json();     
    },
    post: async (url, body) => {
        // const resPost = await axios.post(url, body)
        // return resPost
        throw new Error("POST method not found");
    },
    put: async (url, body) => {
        throw new Error("PUT method not found");
    },
    delete: async (url) => {
        throw new Error("DELETE method not found");
    },
};
//# sourceMappingURL=http-client.plugin.js.map