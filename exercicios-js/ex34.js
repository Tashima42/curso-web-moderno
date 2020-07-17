/*
34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

const string1 = "Macaco"
const string2 = "maCaco"
const string3 = "macacto"

function stringsIguais(string1, string2) {
    if (string1.toLowerCase() == string2.toLowerCase()) return true
    else return false
}

console.log(stringsIguais(string1, string2))