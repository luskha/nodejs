// importa o modulo http
const http = require('node:http');

const hostname = '127.0.0.1'; // configura o ip
const port = 3000; // configura a porta

// utiliza o modulo http e chama a função create server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n Ai mds');
});

// instancia do createServer e chama o metodo listen () que sobe o servidor em um ip e porta 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});