const filho = {
    nome:"Alexandre",
    idade: 10,
    cidade:"Alemanha",
}


//ADCIONANDO UMA NOVA PROPRIEDADE => animalDeEstimacao
filho.animalDeEstimacao = [{
    animal:"Cachorro",
    raca:"Dog Alemao",
    cor:"preto",
    vivo: true
}]


//ADCIONANDO MAIS UM BICHO AO MEU ARRAY DE => animalDeEstimacao

filho.animalDeEstimacao.push({
    animal:"Coelho",
    raca: "Siberiano",
    cor: "Branco",
    vivo: false
})

filho.animalDeEstimacao.push({
    animal:"cavalo",
    raca:"Manga-Larga",
    cor: "Belgi",
    vivo: true
})
//console.log(filho)


//Chamando uma funcao para mostra animal morto

let animalMorto = filho.animalDeEstimacao.filter(function(animal){
  return animal.vivo !== true; //Poderia ser tambem animal.vivo === false
})

console.log(animalMorto)