/*O JavaScript map faz parte do conjunto de métodos disponíveis na linguagem para a manipulação de objetos do tipo array. Ele funciona como uma estrutura de repetição, pois percorre todos os elementos do array, executa determinada ação e retorna um novo conteúdo.*/

const notas = [5.5, 7.5, 8.5, 4.5]
const nomes = [" Tales", " Suelia", " Thyerry", " Taylor", " Theo", " Thomas"];

//o map nao altera o array original, sendo assin tenho que armazenar os novos valores em outra variavel, obs o map vai me retorna um outro array do mesmo tamanho, com dados alterados.
const notasAlteradas = notas.map((nota) => {
    return nota + 0.5
    
})
console.log(notasAlteradas)
let indece = 0

const alterarNomes = nomes.map((nome)=>{
    indece ++
    return nome += ` => ${indece}`
})
console.log(nomes);
console.log(alterarNomes)