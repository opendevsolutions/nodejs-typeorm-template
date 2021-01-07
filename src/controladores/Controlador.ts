import {Request, Response} from "express";
import { ExampleClassService } from "../servicios/ExampleClassService";

export class Controlador {
;
    private exampleClassService: ExampleClassService;

    
    constructor() {
        this.exampleClassService = new ExampleClassService();
    }

    getExample = async  (req: Request, res: Response) => {
        try {
            const response = await this.exampleClassService.getExampleClassById(req.query);
            res.send(response);
        } catch (e) {
            console.error(e);
            res.send(500);
            res.send({error: 'Hubo un error'})
        }
    }



}
