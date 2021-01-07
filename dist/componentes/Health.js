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
class Health {
    constructor() {
        this.iniciar = (express) => {
            this.enrutador = express.Router();
            this.enrutador.get('/', (_req, res, _next) => __awaiter(this, void 0, void 0, function* () {
                const healthcheck = {
                    uptime: process.uptime(),
                    message: 'OK',
                    timestamp: Date.now()
                };
                try {
                    res.json({ status: 'UP' });
                    res.status(200).send();
                }
                catch (e) {
                    healthcheck.message = e;
                    res.status(503).send();
                }
            }));
        };
    }
    obtenerRutas() {
        return this.enrutador;
    }
}
exports.Health = Health;
