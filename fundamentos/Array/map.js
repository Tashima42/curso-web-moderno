const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const pegarPreco = (e) => {
    let linhaString = JSON.parse(e)
    return linhaString.preco
}

console.log(carrinho.map(pegarPreco))