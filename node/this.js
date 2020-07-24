/*
Dentro de uma função o this aponta para o global
Mas dentro, ela aponta para o module.exports =
*/
console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro')
    console.log(this === exports)
    console.log(this === global)
}

logThis()