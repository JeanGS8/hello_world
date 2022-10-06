"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var spring = express();
var port = 3000;
spring.get('/', function (request, response) {
    response.send('Hello World!');
});
spring.get('/bsm', function (request, response) {
    response.send('*** Lista de BSM\´s da Generation Brasil *** <br><br>' +
        '** Mentalidades **<br>' +
        '-= Persistencia <br>' +
        '-= Responsabilidade pessoal <br>' +
        '-= Orientação ao futuro <br>' +
        '-= Mentalidade de crescimento <br>' +
        '<br>** Habilidades **<br>' +
        '-= Trabalho em equipe <br>' +
        '-= atenção aos detalhes <br>' +
        '-= Proatividade <br>' +
        '-= Comunicação <br>');
});
spring.get('/bsm/lista', function (request, response) {
    response.send('*** Objetivos de aprendizagem desta semana *** <br>' +
        '* Banco de dados <br>' +
        '* Join BD<br>' +
        '* Express');
});
spring.listen(port, function () {
    console.log("Server is running at port ".concat(port));
});
