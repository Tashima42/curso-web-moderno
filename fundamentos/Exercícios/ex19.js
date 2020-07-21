function escolhaCardapio(codigo, quantidade){
    switch(codigo){
        case 100: return `Total do pedido: R$${(3 * quantidade).toFixed(2)}`;break
        case 200: return `Total do pedido: R$${(4 * quantidade).toFixed(2)}`;break
        case 300: return `Total do pedido: R$${(5.5 * quantidade).toFixed(2)}`;break
        case 400: return `Total do pedido: R$${(7.5 * quantidade).toFixed(2)}`;break
        case 500: return `Total do pedido: R$${(3.5 * quantidade).toFixed(2)}`;break
        case 600: return `Toatl do pedido R$${(2.8 * quantidade).toFixed(2)}`;break
        default: return `Produto inexistente`;break
    }
}

console.log(escolhaCardapio(100, 4))
console.log(escolhaCardapio(200, 2))
console.log(escolhaCardapio(300, 1))
console.log(escolhaCardapio(400, 7))
console.log(escolhaCardapio(500, 2))
console.log(escolhaCardapio(600, 5))
console.log(escolhaCardapio(700, 8))