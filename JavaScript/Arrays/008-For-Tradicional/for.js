const notas = [9.5, 9, 9,8.5];
let somaDasNotas = 0
// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i]
}

const media = somaDasNotas / notas.length

console.log(`A media das notas é ${media}`);