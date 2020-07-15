/* 
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
 */

const notaAlunos = [10, 20, 59, 90, 100, 39, 60, 17, 97, 38, 37, 21, 46, 93, 88]

function sistemaDeNotas(notas) {
    notas.forEach( (item, index) => {
        if(notas[index] < 38) {
            console.log(`${index+1} - Reprovado | ${notas[index]}`)
        } else if ( (notas[index] % 5) >=3) {
            notas[index] = Math.ceil(notas[index])
            console.log(`${index+1} - Aprovado | ${notas[index]}`)
        } else {
            console.log(`${index+1} - Aprovado | ${notas[index]}`)
        }
    })
}

sistemaDeNotas(notaAlunos)