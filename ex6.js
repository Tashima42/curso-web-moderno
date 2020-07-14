/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    const juros = capitalInicial * taxaDeJuros * tempoDeAplicacao
    return capitalInicial+=juros
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    const final = capitalInicial * ((1 + taxaDeJuros) ** tempoDeAplicacao )
    return final
}

console.log(jurosSimples(100, 0.2, 10))
console.log(jurosCompostos(100, 0.2, 10))