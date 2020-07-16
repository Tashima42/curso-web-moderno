/*
15)​Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso ocomprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certezaque não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:“Não trabalhamos com este tipo de automóvel aqui”.
*/
function revendaCarros(modelo){
    switch(modelo){
        case('hatch'): return `Compra efetuada com sucesso`; break
        case('sedan'):
        case('motocicleta'):
        case('caminhonete'): 
            return `Tem certeza que não prefere este modelo?`; break
        default: return `Não trabalhamos com este tipo de automóvel aqui`; break
    }
}

console.log(revendaCarros('hatch'))
console.log(revendaCarros('sedan'))
console.log(revendaCarros('motocicleta'))
console.log(revendaCarros('caminhonete'))
console.log(revendaCarros('triciclo'))