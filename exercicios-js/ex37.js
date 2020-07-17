/*
37)​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,bem como a soma dos elementos.
*/
//TODO: Ver resolução
function progressaoAritimetica(n, a1, r) {
    let arrayProgressao = [a1]

    for (let i = 1; i < n; i++) {
        arrayProgressao[i] = arrayProgressao[i - 1] + r
    }
    return arrayProgressao
}

function progressaoGeometrica(n, a1, r) {
    let arrayProgressao = [a1]

    for (let i = 1; i < n; i++) {
        arrayProgressao[i] = arrayProgressao[i - 1] * (r ** i)
    }
    return arrayProgressao
}

console.log(progressaoAritimetica(10, 2, 3))
console.log(progressaoGeometrica(10, 2, 3))
