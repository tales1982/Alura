//Removendo notas
/*Para remover a última nota, usaremos outro método dos arrays do JavaScript — o pop(). Lembre-se de que, sempre que trabalhamos com métodos, temos que abrir e fechar parênteses:*/

const notas = [10, 6, 8, 5.5, 10];

notas.pop()//elimina o ultimo elemento do array

let somaDasNotas = 0

notas.forEach(nota => somaDasNotas += nota);

const media = somaDasNotas / notas.length
console.log(`A media das notas é ${media.toFixed(2)}`)

/*
 const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media); 

console.log(notas)//array com a alteração

*/