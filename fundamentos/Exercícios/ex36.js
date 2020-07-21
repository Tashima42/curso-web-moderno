/*
36)​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function multiplicaVetorPorQualquerElemento(vetor, elemento) {
    let vetorMultiplicado = vetor
    vetor.forEach((item, index) => {
        vetorMultiplicado[index] = vetor[index] * elemento
    })
    return vetorMultiplicado
}

function multiplicaVetorPorElementoMaiorQue(vetor, elemento) {
    let vetorMultiplicado = vetor
    if(elemento > 5){
        vetor.forEach((item, index) => {
            vetorMultiplicado[index] = vetor[index] * elemento
        })
    } else return `O multiplicador tem que ser maior que 5`
    return vetorMultiplicado
}

console.log(multiplicaVetorPorQualquerElemento([1,2,3,4,5], 2))
console.log(multiplicaVetorPorElementoMaiorQue([1,2,3,4,5], 6))
console.log(multiplicaVetorPorElementoMaiorQue([1,2,3,4,5], 4))