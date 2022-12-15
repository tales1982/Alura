const cliente = {
    nome:"Thoma",
    sobrenome:"De Paula",
    adress:"2c kahlenberg, grevenmacher",
    apartamento: true,
    telefone:[661124040,691515148]
}

console.log(cliente)
cliente.sobrenome = "Lima de Paula"//alterando o sobrenome
console.log(cliente);
console.log(cliente.telefone[1])

cliente.telefone.push(661121212)//adcionando novo numero no array de telefone
console.log(cliente.telefone)

cliente.cpf = "099374447-93"
//
console.log(cliente.cpf);

cliente.email="tales@gmail"//adcionando nava propriedades no objetos
console.log(cliente.email);

console.log(cliente.cpf.substring(0,4))//o metodo substring eu posso escolher quantas casa quero ver meu cpf OBS tem que ta em formato string.