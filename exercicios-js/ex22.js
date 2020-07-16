/*
22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
A função recebe comoparâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. 
A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juroscompostos). 
O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function valorAnuidade(mes, valor){
    let anuidadeComJuros = valor * ((1 + 0.05) ** mes )
    return `Você tem que pagar R$${(anuidadeComJuros).toFixed(2)}`
}

console.log(valorAnuidade(6,1000))