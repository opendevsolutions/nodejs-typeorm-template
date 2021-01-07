"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpRequestError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = "HttpRequestError";
        this.stack = new Error().stack;
    }
}
HttpRequestError.ERROR_TYPE = "ocurrio un error en el servidor";
exports.default = HttpRequestError;
