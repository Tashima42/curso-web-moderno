const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const verificaPreco = produto => produto.preco >= 500
const verificaFragil = produto => produto.fragil

//Implementação padrão
const produtosFrageisPreco = produtos.filter(verificaPreco).filter(verificaFragil)

console.log(produtosFrageisPreco)

//Minha implementação
Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtosFrageisPreco2 = produtos.filter2(verificaPreco).filter2(verificaFragil)

console.log(produtosFrageisPreco2)