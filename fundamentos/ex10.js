/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function verificaDivisivelPor3(numero) {
    if ((numero % 3) == 0) return `${numero} é divisível por 3`
    else return `${numero} não é divisível por 3`
}

console.log(verificaDivisivelPor3(3))
console.log(verificaDivisivelPor3(2))
console.log(verificaDivisivelPor3(6))
console.log(verificaDivisivelPor3(98))