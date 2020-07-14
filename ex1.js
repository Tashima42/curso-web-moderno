/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function somaSubMultDiv(valor1, valor2) {
    const soma = valor1 + valor2
    const subtracao = valor1 - valor2
    const multiplicacao = valor1 * valor2
    const divisao = valor1 / valor2

    console.log(`Soma: ${soma}, Subtração: ${subtracao},  Multiplicação: ${multiplicacao}, Divisão: ${divisao}`)
}

const umUm = somaSubMultDiv(1,1)
const doisDois = somaSubMultDiv(2,2)
const vinteTrintaeDois = somaSubMultDiv(20,32)
