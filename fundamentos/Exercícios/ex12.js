/*
12)​ Faça um algoritmo que calcule o fatorial de um número.
*/

let fatorial = 1

function calcularFatorial(numero) {
    for(let i = numero; i > 0; i--) {
        fatorial *= i
    }
    return fatorial
}

console.log(calcularFatorial(6))