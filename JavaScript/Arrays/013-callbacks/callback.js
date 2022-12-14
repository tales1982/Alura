//Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

const nomes = ["Tales ", " Suelia", " Thyerry", " Taylor", " Theo", " Thomas"]
let indece = 0
nomes.forEach(nome => {
    indece ++
    console.log(`${indece} ${nome}`)
});