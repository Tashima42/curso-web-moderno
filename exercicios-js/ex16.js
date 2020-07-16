/*
16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebecomo parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas.
*/

function calculadora(numero1, operador, numero2) {
    switch(operador){
        case('+'): return `${numero1} + ${numero2} = ${numero1 + numero2}`;break
        case('-'): return `${numero1} - ${numero2} = ${numero1 - numero2}`;break
        case('*'): return `${numero1} * ${numero2} = ${numero1 * numero2}`;break
        case('/'): return `${numero1} / ${numero2} = ${numero1 / numero2}`;break
        default: return `Operador inválido`;break
    }
}

console.log(calculadora(3, '+', 5))
console.log(calculadora(3, '-', 5))
console.log(calculadora(3, '*', 5))
console.log(calculadora(3, '/', 5))
console.log(calculadora(3, '0', 5))