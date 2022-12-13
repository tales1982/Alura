const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];
console.log(alunos)

const sala1 = alunos.slice(0,10)//estou copiando do índice 0 ate o índice 10 OBS o index 10 nao e incluso
console.log(sala1)

const sala2 = alunos.slice(10)// estou copiando do índice 10 ate o final do array quando eu nao especifico um final ele vai pegar do índice indicado ate o final do array.
console.log(sala2)