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
const Conexion_1 = require("../conexiones/Conexion");
const ExampleClass_1 = require("../modelos/ExampleClass");
class ExampleClassService {
    constructor() {
        this.getExampleClassRepository = () => __awaiter(this, void 0, void 0, function* () {
            const connection = yield Conexion_1.Repository.getConnection();
            const autorizacionRepository = yield connection.getRepository(ExampleClass_1.ExampleClass);
            return autorizacionRepository;
        });
        this.getExampleClassById = (params) => __awaiter(this, void 0, void 0, function* () {
            /* Primero traemos la AutorizacionPractica para obtener su ID mediante los parametros Tipo, Subtipo, Activo */
            const exampleClassRepository = yield this.getExampleClassRepository();
            const object = yield exampleClassRepository.findOne(params.id);
            return object;
        });
    }
}
exports.ExampleClassService = ExampleClassService;
