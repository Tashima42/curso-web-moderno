/*
27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/
//TODO: Exercício 27

function calculoAltura(alturaAtual1, taxaDeCrescimentoAnual1, alturaAtual2, taxaDeCrescimentoAnual2) {
    let alturaComTaxaDeCrescimento = 0
    let anosParaFicarMaior = 0

    if (alturaAtual1 < alturaAtual2) {
        do {
            alturaComTaxaDeCrescimento += taxaDeCrescimentoAnual1
            anosParaFicarMaior++
        }while(alturaComTaxaDeCrescimento < alturaAtual2)
    } else if (alturaAtual2 < alturaAtual1) { 
        do {
            alturaComTaxaDeCrescimento += taxaDeCrescimentoAnual2
            anosParaFicarMaior++
        }while (alturaComTaxaDeCrescimento < alturaAtual1)
    }

    return anosParaFicarMaior
}

console.log(calculoAltura(101, 1, 100, 2))