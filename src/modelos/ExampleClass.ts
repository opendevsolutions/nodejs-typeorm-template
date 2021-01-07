import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

/* database => usar variables de entorno => process.env.DB_NAME */
@Entity(`TABLE_NAME`, {database: process.env.DB_NAME})
export class ExampleClass {
    @PrimaryGeneratedColumn({name:"NAME_COLUMN_ID_PRIMARY_KEY"})
    id:number

    @Column({name:"FECHA_HORA"})
    exampleAttribute:Date

}