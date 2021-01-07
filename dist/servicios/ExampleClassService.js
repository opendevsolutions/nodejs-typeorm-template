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
        /* Si hay una clase relaciona con OneToOne etc, se puede agregar el segundo parametro relations y poner el nombre de su atributo */
        this.getExampleClassById = (params) => __awaiter(this, void 0, void 0, function* () {
            const exampleClassRepository = yield this.getExampleClassRepository();
            const object = yield exampleClassRepository.findOne(params.id, { relations: ['nombreAtributoClaseRelacionada si existe'] });
            return object;
        });
        this.getExampleClassByIds = (params) => __awaiter(this, void 0, void 0, function* () {
            /* Encuentra por array de Ids */
            const exampleClassRepository = yield this.getExampleClassRepository();
            const objects = yield exampleClassRepository.findByIds(params.arrayIds, { relations: ['nombreAtributoClaseRelacionada si existe'] });
            return objects;
        });
        this.getExampleClassByIdWithQueryBuilder = (params) => __awaiter(this, void 0, void 0, function* () {
            /* Define una busqueda personalizada */
            const exampleClassRepository = yield this.getExampleClassRepository();
            const objects = yield exampleClassRepository.createQueryBuilder("item")
                .where("item.atributo = :atributo", { atributo: params.atributo })
                .andWhere("item.atributoExtra >= :atributoExtra", { atributoExtra: params.atributoExtra }).getMany();
            return objects;
        });
    }
}
exports.ExampleClassService = ExampleClassService;
