"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const http = require('http');
const express = new App_1.App().obtenerExpress();
const port = 8080;
express.set('port', port);
const onError = (error) => {
    if (error.syscall !== 'listen')
        throw error;
    let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
};
const onListening = () => {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
};
const server = http.createServer(express);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
module.exports = server;
