/*
Esse arquivo faz o trabalho do 'client', ou seja, ele está pegando os arquivos que
estão no 'servidor' e importando as variáveis que estão sendo eviadas globalmente
*/
const moduloA = require('./modulo-a')
const moduloB = require('./modulo-b')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bemVindo)
console.log(moduloB.ateLogo())