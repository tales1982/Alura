const cliente = {
  nome: "Tales",
  idade: 40,
  email: "tales@gmail.lu",
  telefone: [665425897, 457856356],
  saldo: 500,
  pagarCompras: function (valor) {
    if (valor <= this.saldo) {
      return `Obrigado por compra em nossa loja voçe ainda tem ${
        this.saldo - valor
      } de credito.`;
    } else {
      return console.log(
        `o seu saldo e de ${
          this.saldo
        } é insuficiente para fazer a conpra. te folta ainda ${
          valor - this.saldo
        } para poder compra.`
      );
    }
  },
};
//O this esta fazendo referencia ao objeto Cliente
console.log(cliente)
console.log(cliente.pagarCompras(500))

//console.log(cliente.pagarCompras(577));
