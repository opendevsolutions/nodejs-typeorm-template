import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import {ExampleClass} from "../modelos/ExampleClass";

export class Repository {

    private static connection: Connection;

    public static getInstace = async () : Promise<Connection> => {
        if(!Repository.connection) {
            if(Repository.connection) {
                return Repository.connection;
            } else {

                /* */
                let options:any = {
                    type: process.env.DB_TYPE,
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT),
                    username: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    sid: process.env.DB_SID,
                    database :process.env.DB_NAME,
                    entities : [
                        ExampleClass
                    ],
                    synchronize : false,
                    logging : true
                }
                const connection = await createConnection(options);
                Repository.connection = connection;
            }
        }
        return Repository.connection;
    }

    public static getConnection = async () => {
        const connection = await Repository.getInstace();
        return connection;
    }
}

