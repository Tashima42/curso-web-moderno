/*
27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function calculoAltura(alturaAtual1, taxaDeCrescimentoAnual1, alturaAtual2, taxaDeCrescimentoAnual2) {
    let alturaComTaxaDeCrescimento = 0
    let anosParaFicarMaior = 0

    if (alturaAtual1 < alturaAtual2) {
        console.log(`A Criança 2 é maior do que a Criança 1`)

        if (taxaDeCrescimentoAnual1 > taxaDeCrescimentoAnual2) {
            while (alturaAtual1 < alturaAtual2) {
                alturaAtual1 += taxaDeCrescimentoAnual1
                anosParaFicarMaior++
            }
            console.log(`A Criança 1 levará ${anosParaFicarMaior} anos para ficar maior que a Criança 2`)
        } else console.log('A Criança 1 não ultrapassará a Criança 2')
    
    } else if (alturaAtual2 < alturaAtual1) {
        console.log('A Criança 1 é maior do que a Criança 2')

        if (taxaDeCrescimentoAnual2 > taxaDeCrescimentoAnual1) {
            while (alturaAtual2 < alturaAtual1) {
                alturaAtual2 += taxaDeCrescimentoAnual2
                anosParaFicarMaior++
            }
            console.log(`A Criança 2 levará ${anosParaFicarMaior} anos para ficar maior que a Criança 1`)
        } else console.log('A Criança 2 não ultrapassará a Criança 1')
    
    } else console.log('As crianças tem o mesmo tamanho')


}

calculoAltura(102, 1, 80, 2)
calculoAltura(100, 2, 100, 1)
calculoAltura(90, 1, 107, 1)