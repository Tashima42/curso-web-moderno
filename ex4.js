/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

const divisaoEResto = (dividendo, divisor) => {
    const divisao = dividendo/divisor
    const resto = dividendo%divisor
    
    return (`Resultado: ${divisao.toFixed(2)}, Resto: ${resto.toFixed(2)}`)
}

console.log(divisaoEResto(10,2))
console.log(divisaoEResto(90,4))
console.log(divisaoEResto(8,3))
