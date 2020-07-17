/*
33)​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro 
valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

const vetorInteiro = [1, 32, 13,54]
const vetorString = ["Marcos", "Rogério", "Bruno", "Marcolino"]
const vetorDouble = [1.23, 4.23, 6.12, 2.34]

console.log(vetorDouble.concat(vetorInteiro, vetorString))
console.log(vetorInteiro.concat(vetorString))
