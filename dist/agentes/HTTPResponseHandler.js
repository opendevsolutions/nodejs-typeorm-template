"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HTTPResponseHandler {
    constructor() {
        this.unauthorized = "Unauthorized";
        this.forbidden = "Forbidden";
        this.badRequest = "Bad Request";
        this.notFound = "Not found";
        this.internalError = "Internal Server Error";
        this.sendCreate = (res) => {
            res.status(201);
            res.send();
        };
        this.sendEmpty = (res) => {
            res.status(204);
            res.send();
        };
        this.sendSuccess = (res, data) => {
            res.status(200);
            res.send(data);
        };
        this.sendInvalidToken = (res, message, code) => {
            let response = {};
            response.type = this.unauthorized;
            response.message = message;
            response.code = code;
            res.status(401);
            res.send(response);
        };
        this.sendForbidden = (res, message, code) => {
            let response = {};
            response.type = this.forbidden;
            response.message = message;
            response.code = code;
            res.status(403);
            res.send(response);
        };
        this.sendInvalidReq = (res, message, code) => {
            let response = {};
            response.type = this.notFound;
            response.message = message;
            response.code = code;
            res.status(400);
            res.send(response);
        };
        this.sendNotFoundReq = (res, message, code) => {
            let response = {};
            response.type = this.badRequest;
            response.message = message;
            response.code = code;
            res.status(404);
            res.send(response);
        };
        this.sendInternalError = (res, message, code) => {
            let response = {};
            response.type = this.internalError;
            response.message = message;
            response.code = code;
            res.status(500);
            res.send(response);
        };
        this.sendPermissionDenied = (res, message, code) => {
            let response = {};
            response.type = this.internalError;
            response.message = message;
            response.code = code;
            res.status(401);
            res.send(response);
        };
    }
}
exports.default = new HTTPResponseHandler();
