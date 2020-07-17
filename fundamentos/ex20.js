/*
20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário 
considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.Seu programa deve mostrar apenas as notas utilizadas. 
Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação 
(note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/
function trocoCedulas(valor) {
    const notas = [100, 50, 10, 5, 1]
    let notas100 = 0, notas50 = 0, notas10 = 0, notas5 = 0, notas1 = 0

    while (valor > 0) {
        while (valor > 100) {
            valor -= 100
            notas100++
        }
        while (valor > 50) {
            valor -= 50
            notas50++
        }
        while (valor > 10) {
            valor -= 10
            notas10++
        }
        while (valor > 5) {
            valor -= 5
            notas5++
        }
        while (valor >= 1) {
            valor -= 1
            notas1++
        }
    }

    return `${notas1} nota(s) de R$1, ${notas5} nota(s) de R$5, ${notas10} nota(s) de R$10, ${notas50} nota(s) de R$50, ${notas100} nota(s) de R$100`
}

console.log(trocoCedulas(289))