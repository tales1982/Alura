//CANVA Container02

function desenhaQuadradoVerde(x, y,cor ){

let tela02 = document.querySelector("#canvas02");
let pincel02 = tela02.getContext("2d")

pincel02.fillStyle = cor;// minha cor
pincel02.fillRect(x, y, 50 ,50);// o tanhaho do quadrado 50 x 50 forma um quadrado
pincel02.fillStroke = "black" // forma uma borda em volta do meu quadrado 
pincel02.strokeRect(x, y, 50 ,50)//falando de onde minha borda deve comesar no casso tem que comecar no mesmo que meu quadrado

let x = 0

while(x < 600){
    desenhaQuadradoVerde(x, 0, "green");
    x = x +50;
}
}

