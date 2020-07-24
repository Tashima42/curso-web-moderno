const { min } = require('lodash')

require('./global')

console.log(MinhaApp.saudacao)

console.log(MinhaApp.nome)
MinhaApp.nome = 'aaa'
console.log(MinhaApp.nome)