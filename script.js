//importando o módulo HTTP
const http = require('http');


//Configurando as informações do servidor
const Hostname = '127.0.0.1';
const port = 3000;


//Criando servidor usando função com nome diferente
const meuServidor = http.createServer((req,res)=> {



//Configurando o cabeçalho de respostas
res.statusCode = 200;
res.setHeader('Content-type', 'text/plain');

//enviando mensagem de resposta
res.end('Bem vindos ao server inicial 1!!')

})









