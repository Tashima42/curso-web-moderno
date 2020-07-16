/*
23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. 
Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 
Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function mediaPonderadaAluno(codigo, nota1, nota2, nota3) {
    while (codigo > 1) {
        const notas = [nota1, nota2, nota3]
        let notasComPeso = []
        let maiorNota = 0
        let mediaPonderadaFinal
        let resultadoFinal

        notas.forEach((item, index) => {
            if (notas[index] > maiorNota) {
                maiorNota = notas[index]
            }
        })

        for (let i = 0; i < notas.length; i++) {
            if (notas[i] == maiorNota) {
                notasComPeso[i] = notas[i] * 4
            } else {
                notasComPeso[i] = notas[i] * 3
            }
        }


        mediaPonderadaFinal = (notasComPeso[0] + notasComPeso[1] + notasComPeso[2]) / 10
        if (mediaPonderadaFinal >= 5) resultadoFinal = "APROVADO"
        else resultadoFinal = "REPROVADO"


        return `Aluno: ${codigo} - Nota 1: ${notas[0]}, Nota 2: ${notas[1]}, Nota 3: ${notas[2]} - Média: ${mediaPonderadaFinal} | ${resultadoFinal}`
    }
}

console.log(mediaPonderadaAluno(2, 3, 4, 1))
console.log(mediaPonderadaAluno(90, 7, 6, 5))