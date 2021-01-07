"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let cors = require('cors');
//For SWAGGER
const swaggerDocument = require('./swagger.json');
const swaggerUi = require('swagger-ui-express');
const Enrutador_1 = require("./rutas/Enrutador");
const Health_1 = require("./componentes/Health");
// Create and configure ExpressJS.
class App {
    constructor() {
        this.obtenerExpress = () => {
            return this.express;
        };
        this.enrutador = new Enrutador_1.Enrutador();
        this.health = new Health_1.Health();
        this.express = express();
        this.configurarMiddleware();
        this.configurarApi();
    }
    // Config Express configurarMiddleware.
    configurarMiddleware() {
        this.express.use(bodyParser.json({ limit: "50mb" }));
        this.express.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
        this.express.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        this.express.use(methodOverride('X-HTTP-Method-Override'));
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cors());
    }
    // Init Routes.
    configurarApi() {
        this.enrutador.iniciar(express);
        this.health.iniciar(express);
        this.express.use('/asociados', this.enrutador.obtenerRutas());
        this.express.use('/health', this.health.obtenerRutas());
        //Configurar documento swagger antes de descomentar
        this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }
}
exports.App = App;
