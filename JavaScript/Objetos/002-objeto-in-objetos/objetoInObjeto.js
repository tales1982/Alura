const cliente = {
    nome:"Tales",
    idade: 38,
    email:"Tales@gmail.com",
    telefone:[661124040, 691515148],
    trabalhando: true,
    adress:{
        casa:"2c kahlenberguer, Grevenmacher",//Objeto dentro de otro Objeto se chama (Aninhado)
    }
}

cliente.adress.faculdade = "Nova morada"//Adcionando nova morada

console.log(cliente.adress)


//estou conferindo se trabalho e verdadeiro se for quero adcionar o endereço de trabalho.
if(cliente.trabalhando === true){
    cliente.adress.trabalho = "Rue jos kieffer, Esch-Sur-Alzette";
}

console.log(cliente)