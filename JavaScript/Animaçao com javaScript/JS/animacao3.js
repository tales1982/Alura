let tela = document.querySelector("#canvas");
let pincel = tela.getContext("2d");

pincel.fillStyle = "grey"; // minha cor
pincel.fillRect(0, 0, 600, 400); // o tanhaho do quadrado 50 x 50 forma um quadrado

function desenhaCirculo(evento){
  let x = evento.pageX - tela.offsetLeft; //capturo a possiçao do mause no eixo x e o offsetleft tira a diferença da tela
  let y = evento.pageY - tela.offsetTop; //capturo a possiçao do mause  no eixo y offsetleft tira a diferença da tela
  pincel.fillStyle ="blue";
  pincel.beginPath();
  pincel.arc(x, y, 10, 0, 2 * 3.14);//Formula do pi Para cria um circulo
  pincel.fill();
 
}

tela.onclick = desenhaCirculo