const cliente ={
    nome:"Tales",
    telefone:661454578,
    idades: 45,
    apartamento: false
}

//Adcionar um array de objetos de endereco
cliente.adress = [
    {
        pais:"Brasil",
        cidade:"Sao Paulo",
        bairro:"Rio Pequeno",
        rueNumero: "01 rue do centro"

    }
]

//Adcionando um novo adress

cliente.adress.push({
    pais:"Luxembourg",
    cidade:"Grevenmacher",
    rueNumero:"2c kahlemberg"
})
console.log(cliente.adress[1])