/*
29)​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

function numerosNoIntervalo(arrayDeNumeros) {
    let noIntervalo = 0
    let foraDoIntervalo = 0

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] >= 10 && arrayDeNumeros[i] <= 20) noIntervalo++
        else foraDoIntervalo++
    }

    return `Números no intervalo [10,20]: ${noIntervalo} | Fora do intervalo: ${foraDoIntervalo}`
}

console.log(numerosNoIntervalo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]))
console.log(numerosNoIntervalo([1,23,52,245,5,1,243,52,1,4,41,5,7,56,7,2,56,2,19,434,231,21,1,3,35,6,26,75,12,10,12,14,15,16,14,13]))