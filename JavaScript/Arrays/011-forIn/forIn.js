const notas = [9.25, 8.75, 7.50, 9.75];

let somaDasNotas = 0

for (const i in notas) {
  somaDasNotas += notas[i]
}

const media = somaDasNotas / notas.length
console.log(`A media das notas é ${media.toFixed(2)}`)