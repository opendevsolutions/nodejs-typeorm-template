"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const ExampleClass_1 = require("../modelos/ExampleClass");
class Repository {
}
exports.Repository = Repository;
Repository.getInstace = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!Repository.connection) {
        if (Repository.connection) {
            return Repository.connection;
        }
        else {
            /* Estas son variables de entorno para Typeorm*/
            let options = {
                type: process.env.DB_TYPE,
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                sid: process.env.DB_SID,
                database: process.env.DB_NAME,
                entities: [
                    ExampleClass_1.ExampleClass
                ],
                synchronize: false,
                logging: true
            };
            const connection = yield typeorm_1.createConnection(options);
            Repository.connection = connection;
        }
    }
    return Repository.connection;
});
Repository.getConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield Repository.getInstace();
    return connection;
});
