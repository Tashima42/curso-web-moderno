const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
//Implementação do JS
const pegarPreco = (e) => {
    let linhaString = JSON.parse(e)
    return linhaString.preco
}

console.log(carrinho.map(pegarPreco))
//Minha Implementação
Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

console.log(carrinho.map2(pegarPreco))