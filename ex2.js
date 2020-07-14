/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function classificarTriangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado1 == lado3) console.log("Esse triângulo é Equilátero")
    else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) console.log("Esse triângulo é Isóceles")
    else console.log("Esse triângulo é Escaleno")
}

classificarTriangulo(1,1,1)
classificarTriangulo(1,2,1)
classificarTriangulo(2,1,1)
classificarTriangulo(2,2,1)
classificarTriangulo(2,3,4)
