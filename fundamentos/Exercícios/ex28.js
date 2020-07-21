/*
28)​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/
function numerosPares(arrayNumerosInteiros) {
    arrayNumerosInteiros.forEach((item, index) => {
        if ((arrayNumerosInteiros[index] % 2) === 0) {
            console.log(arrayNumerosInteiros[index])
        }
    })
}

numerosPares([1,3,6,3,2,46,7,4,1,7,6,42,4,7,45,2345,7,4,225,7,5,3,2,4,754,85,623,12,23,6234,6,437,436,43])