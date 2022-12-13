//O concat() junta 2 arrays em um array novo.

/*Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.*/

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

console.log(salaJS);
console.log(salaPython)

const salasJuntas = salaJS.concat(salaPython);//Juntados as 2 salas em uma sala so
console.log(salasJuntas)

