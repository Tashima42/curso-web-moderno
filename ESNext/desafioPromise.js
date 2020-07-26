const fs = require('fs')
const path = require('path')
const { reject } = require('lodash')
const { resolve } = require('path')

const caminho = path.join(__dirname, 'dados.txt')

const receberDados = (caminho) => {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            try {
                resolve(conteudo.toString())
            } catch (err) {
                reject(`Ocorreu um erro: ${err}`)
            }
        })
    })
}

let conteudo = receberDados(caminho)
    .then(console.log)
    .catch(err => console.log(`ATENÇÃO ${err}`))