/*
13)​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente aodia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/
//TODO: Exercício 13

function diaUtil(dia){
    switch (dia) {
        case ((dia % 7) == 0):
            return `fim de semana`
        case (2):
            return `Dia útil`
    }
}


console.log(diaUtil(7))