const { log, error } = require('console')
const fs = require('fs')

// lendo conteudo do arquivo, se nao for informado o encoding, será retornado em formato de buffer,
// inserindo UTF8, após o path do arquivo, retorna o conteudo corretamente, assim como está no arquivo: 'CONTEUDO: EI EU TENHO CONTEUDO!!!.'

fs.readFile('texto.txt', 'utf8' , (err, data) => {
    if(err){
        console.log('Erro ao ler o arquivo!');
        return;
    }
    
    console.log('Conteudo:' , data)
})


fs.writeFile('texto.txt', 'O segundo conteúdo', 'utf8', (err) => {
    if(err) {
        console.log('Ta errado macho, mds!!', err);
        return
    }

    console.log('Agora foi! Aí sim!');
})