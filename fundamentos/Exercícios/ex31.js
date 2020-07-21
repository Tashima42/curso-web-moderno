/*
31)​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.
*/

const vetorInteiros = [2,4,6,-1,2,-5,-3,-2,12,-890,-12,-42,1,5,7,23,-12]
let quantidadeNegativos = 0

vetorInteiros.forEach((item, index) => {
    if (vetorInteiros[index] < 0) quantidadeNegativos++ 
})

console.log(quantidadeNegativos)