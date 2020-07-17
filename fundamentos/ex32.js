/*
32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/
const vetorInteiros = [2,2,13,54,53,23,12,24,5,6,8,3,12]
let somaVetorInteiros = 0
let mediaAritimetica = 0

vetorInteiros.forEach((item, index) => {
    somaVetorInteiros += vetorInteiros[index]
})

mediaAritimetica = somaVetorInteiros / vetorInteiros.length

console.log(somaVetorInteiros)