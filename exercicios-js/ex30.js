/*
30)​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function maiorEMenor(vetor) {
    let menorNumero = 0
    let maiorNumero = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maiorNumero) maiorNumero = vetor[i]
    }
    menorNumero = maiorNumero
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] < menorNumero) menorNumero = vetor[i]
    }

    return `Maior número: ${maiorNumero} | Menor número: ${menorNumero}`
}

console.log(maiorEMenor([2,2,13,54,53,23,12,24,5,6,8,3,12]))