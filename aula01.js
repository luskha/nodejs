// importando o modulo path  nativo de node
// require vem do commonJs, é como importa e exporta modulos ('arvquios')


var path = require('path');

var filename = path.basename('/teste/teste.js')

console.log('Nome do arquivo', filename);

var folder = path.dirname('teste.js');

console.log('Nome da pasta' , folder);