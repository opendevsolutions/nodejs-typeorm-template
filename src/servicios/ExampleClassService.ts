import { Connection } from "typeorm";
import { Repository } from "../conexiones/Conexion";
import { ExampleClass } from "../modelos/ExampleClass";

export class ExampleClassService {
    constructor() {}

    getExampleClassRepository = async () => {
        const connection: Connection = await Repository.getConnection();
        const autorizacionRepository = await connection.getRepository(ExampleClass);
        return autorizacionRepository;
    }

    getExampleClassById = async (params: any) => {
        /* Primero traemos la AutorizacionPractica para obtener su ID mediante los parametros Tipo, Subtipo, Activo */
        const exampleClassRepository = await this.getExampleClassRepository();
        const object: ExampleClass = await exampleClassRepository.findOne(params.id);
        return object;
    }

    

}