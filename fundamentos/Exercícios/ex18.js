/*
18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. 
Use o comandoswitch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function lerPorExtenso(numero){
    switch(numero){
        case 1: return `Um`;break
        case 2: return `Dois`;break
        case 3: return `Três`;break
        case 4: return `Quatro`;break
        case 5: return `Cinco`; break
        case 6: return `Seis`; break
        case 7: return `Sete`; break
        case 8: return `Oito`; break
        case 9: return `Nove`; break
        case 10: return `Dez`; break
        default: return `Número fora do intervalo`;break
    }
}

console.log(lerPorExtenso(1))
console.log(lerPorExtenso(2))
console.log(lerPorExtenso(3))
console.log(lerPorExtenso(4))
console.log(lerPorExtenso(5))
console.log(lerPorExtenso(6))
console.log(lerPorExtenso(7))
console.log(lerPorExtenso(8))
console.log(lerPorExtenso(9))
console.log(lerPorExtenso(10))
console.log(lerPorExtenso(11))