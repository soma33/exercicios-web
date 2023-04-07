const fs = require('fs');
const { json } = require('stream/consumers');

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(config.db.host, ":", config.db.port)
})

// no caso especifico de um arquivo ser no formato json...
// podemos faer da seguite forma:
const config = require('./arquivo.json')
console.log(config.db)

// leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log("Este são os arquivos...")
    console.log(arquivos)
})
