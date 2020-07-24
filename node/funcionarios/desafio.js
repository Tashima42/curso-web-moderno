const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const verificaFuncionarioMulher = funcionarios => funcionarios.genero === 'F'
const verificaFuncionarioChines = funcionarios => funcionarios.pais === 'China'
const verificaFuncionarioMenorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const funcionariaChinesa = funcionarios
        .filter(verificaFuncionarioMulher)
        .filter(verificaFuncionarioChines)
        .reduce(verificaFuncionarioMenorSalario)
    console.log(funcionariaChinesa)
})