const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos,medias]
console.log(listaDeAlunosEMedias)

//Criei um array bidimensional, agora vou selecionar a aluna Ana e sua Nota.


const alunaAna = [listaDeAlunosEMedias[0][2],listaDeAlunosEMedias[1][2]]//Aqui estou pegando a aluna Ana e Sua Nota.
console.log(alunaAna)

//outra maneira que posso usar

const alunoCaio = listaDeAlunosEMedias[0][3]
const notaCaio = listaDeAlunosEMedias[1][3]
console.log(`O aluno ${alunoCaio} teve a nota ${notaCaio}.`)
