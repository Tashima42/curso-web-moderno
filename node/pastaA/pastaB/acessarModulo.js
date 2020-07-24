/*
Em uma situação de um projeto real, é comum utilizar diversas pastas dentro de 
outras pastas. Para fazer isso é possível usar uma notação de caminho realtivo
Usando ../../arquivo
*/

const moduloA = require('../../modulo-a')
console.log(moduloA.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)