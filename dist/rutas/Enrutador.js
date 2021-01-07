"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controlador_1 = require("../controladores/Controlador");
class Enrutador {
    constructor() {
        this.controller = new Controlador_1.Controlador();
    }
    iniciar(express) {
        this.rutas = express.Router();
        this.rutas.route("/exampleClass")
            .get(this.controller.getExample);
    }
    obtenerRutas() {
        return this.rutas;
    }
}
exports.Enrutador = Enrutador;
