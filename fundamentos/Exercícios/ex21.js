/*
21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniadoconsiderando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de  30 e até 60 anos pagam R$ 95; e 
4) conveniados acima de 60 anos pagam R$130
*/
function valorPlanoSaude(idade){
    let valorBasePlanoSaude = 100
    if(idade < 10) valorBasePlanoSaude += 80
    else if(idade < 30) valorBasePlanoSaude += 50 
    else if(idade < 60) valorBasePlanoSaude += 95
    else valorBasePlanoSaude += 130

    return valorBasePlanoSaude;
}

console.log(valorPlanoSaude(8))
console.log(valorPlanoSaude(15))
console.log(valorPlanoSaude(33))
console.log(valorPlanoSaude(52))
console.log(valorPlanoSaude(88))