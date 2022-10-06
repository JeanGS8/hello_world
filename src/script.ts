import * as express from 'express';

const spring = express();
const port: number = 3000;

spring.get('/', (request, response) => {
    response.send('Hello World!');
});

spring.get('/bsm', (request, response) => {
    response.send(
    '*** Lista de BSM\´s da Generation Brasil *** <br><br>' +

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

spring.get('/bsm/lista', (request, response) => {
    response.send('*** Objetivos de aprendizagem desta semana *** <br>' + 
    '* Banco de dados <br>' +
    '* Join BD<br>' +
    '* Express');
});

spring.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});