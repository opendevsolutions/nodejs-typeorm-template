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

    /* Si hay una clase relaciona con OneToOne etc, se puede agregar el segundo parametro relations y poner el nombre de su atributo */
    getExampleClassById = async (params: any) => {
        const exampleClassRepository = await this.getExampleClassRepository();
        const object: ExampleClass = await exampleClassRepository.findOne(params.id, { relations : [ 'nombreAtributoClaseRelacionada si existe' ] });
        return object;
    }

    /* Encuentra objetos por array de Ids y trae hijos si declara relations */
    getExampleClassByIds = async (params: any) => {
        const exampleClassRepository = await this.getExampleClassRepository();
        const objects: ExampleClass[] = await exampleClassRepository.findByIds(params.arrayIds,  { relations : [ 'nombreAtributoClaseRelacionada si existe' ] });
        return objects;
    }

    /* Define una busqueda personalizada */
    getExampleClassByIdWithQueryBuilder = async (params: any) => {
        const exampleClassRepository = await this.getExampleClassRepository();
        const objects: ExampleClass[] = await exampleClassRepository.createQueryBuilder("item")
        .where("item.atributo = :atributo", {atributo: params.atributo})
        .andWhere("item.atributoExtra >= :atributoExtra" , {atributoExtra: params.atributoExtra}).getMany();
        return objects;
    }

    /* Busqueda avanzada:
       busca entidades relacionadas por un atributo con una condicion,
       luego agrega dos condiciones a la clase padre,
       
       esta busqueda te permite refinar mas personalizadamente por atributos que findByIds*/
    getExampleClassByIdWithLeftJoin = async (params) => {
        const exampleClassRepository = await this.getExampleClassRepository();
        return await exampleClassRepository.createQueryBuilder("item")
            .leftJoinAndSelect("item.entidadRelacionada", "entidadRelacionada", "entidadRelacionada.atributo = :atributo",{ atributo:`${params?.atributo?.toUpperCase()}` })
            .where("item.atributo = :atributo", { atributo:`${params?.atributo?.toUpperCase()}` })
            .andWhere("item.atributoExtra = :atributoExtra", { atributoExtra:`${params?.atributoExtra}` })
            .getMany();
    }



}