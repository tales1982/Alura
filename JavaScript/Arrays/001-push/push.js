//Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno:
//Para corrigir, precisamos adicionar a nota 7 e fazer o cálculo da média corretamente.

const notas = [10,6,8]

notas.push(7)//Adicionei uma nota

let somaDasNotas = 0

for (const nota of notas) {
    somaDasNotas += nota
    
}

const media = somaDasNotas / notas.length
console.log(media)
