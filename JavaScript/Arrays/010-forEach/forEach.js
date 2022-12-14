const notas = [8.5, 7.5, 8, 9];
let somaNotas = 0

notas.forEach(nota => somaNotas += nota);

const media = somaNotas / notas.length

console.log(`A media das notas é ${media}`)