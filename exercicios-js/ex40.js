/*
40)​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/

function conceitoNotas(notasVetor) {
    let conceitoVetor = notasVetor
    
    notasVetor.forEach((item, index) => {
        if (notasVetor[index] <= 4.9) conceitoVetor[index] = 'D'
        else if (notasVetor[index] <= 6.9) conceitoVetor[index] = 'C'
        else if (notasVetor[index] <= 8.9) conceitoVetor[index] = 'B'
        else if (notasVetor[index] <= 10) conceitoVetor[index] = 'A'
        else conceitoVetor[index] = `Valor Inválido` 
     })

     return conceitoVetor
}

console.log(conceitoNotas([1,2,3,4,5,6,6,7,8,9,10,12]))