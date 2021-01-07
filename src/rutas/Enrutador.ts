
import { Controlador } from "../controladores/Controlador";

export class Enrutador {

    private rutas: any;
    
    private controller: Controlador;

    constructor(){
        this.controller = new Controlador();
    }

    public iniciar(express: any) {
        this.rutas = express.Router();
        this.rutas.route("/example").get(this.controller.getSimpleExample);
        this.rutas.route("/exampleClass").get(this.controller.getExampleFromService);
    }


    public obtenerRutas(){
        return this.rutas;
    }

}

