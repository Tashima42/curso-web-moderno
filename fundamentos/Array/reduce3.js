const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Implementação padrão
const todosSaoBolsistas = (resultado, bolsista) => resultado && bolsista
const algumEBolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce((todosSaoBolsistas), true))
console.log(alunos.map(a => a.bolsista).reduce((algumEBolsista), false))

//Minha implementação
Array.prototype.reduce2 = function(callback) {
    let acumulador = [0]
    for (let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

console.log(alunos.map(a => a.bolsista).reduce2((todosSaoBolsistas), true))
console.log(alunos.map(a => a.bolsista).reduce2((algumEBolsista), false))