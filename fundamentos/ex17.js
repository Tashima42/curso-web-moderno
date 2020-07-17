/*
17)​ Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
-----------------
|Plano | Aumento|
|------|--------|
|   A  |  10%   |
|------|--------|
|   B  |  15%   |
|------|--------|
|   C  |  20%   |
-----------------
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. 
Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumentoSalario(salarioAtual, planoDeSalario){
    switch(planoDeSalario){
        case('a'):
        case('A'):
            return `Seu salário teve um aumento de 10% e agora é: R$${Math.floor(salarioAtual * 1.1)}`;break
        case('b'):
        case('B'):
            return `Seu salário teve um aumento de 15% e agora é: R$${Math.floor(salarioAtual * 1.15)}`;break
        case('c'):
        case('C'):
            return `Seu salário teve um aumento de 20% e agora é: R$${Math.floor(salarioAtual * 1.2)}`;break
        default: return `Plano de salário inváliso`;break
    }
}

console.log(aumentoSalario(100, 'a'))
console.log(aumentoSalario(500, 'B'))
console.log(aumentoSalario(1500, 'c'))
