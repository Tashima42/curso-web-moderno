//Sem promisses
const http = require('http')
const { get, result, reject } = require('lodash')

const getTurma = letra => {
    return new Promise((resolve, reject) => {
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', dados => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e))
