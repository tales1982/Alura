/*every(): é semelhante a some(), iterará sobre o array e retornará um booleano. Mas desta vez, para que o dito booleano seja verdadeiro, todos os elementos da matriz devem passar pela condição dada.*/
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

