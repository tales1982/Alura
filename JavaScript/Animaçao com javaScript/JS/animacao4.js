/* Desenhando minha tela */

let tela = document.querySelector("#canvas");
let pincel = tela.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 1200, 800);

/**Cria uma funçao que desenhar Circulo */
let raio = 10;
let xAleatorio;
let yAleatorio ;

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill(); //aplica meu codigo
}

function limpaTela() {
  pincel.clearRect(0, 0, 1200, 800);
}

function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, raio + 20, "red");
    desenhaCirculo(x, y, raio + 10, "white");
    desenhaCirculo(x, y, raio, "red");
}

function sorteiaPossicao(maximo) {
    return Math.floor(Math.random() * maximo);
}

function atualizaTela() {
    limpaTela()
    xAleatorio = sorteiaPossicao(1200)
    yAleatorio = sorteiaPossicao(800)
    desenhaAlvo(xAleatorio, yAleatorio);
}
 

 function dispara(evento){
    let x = evento.pageX - tela.offsetLeft;
    let y = evento.pageY - tela.offsetTop;
    
    if ((x > xAleatorio - raio ) 
    && (x < xAleatorio + raio) 
    && (y > yAleatorio - raio) 
    && (y < yAleatorio + raio)){
        alert("Acertou o alvo")
    }
 }
 setInterval(atualizaTela, 1000)
 tela.onclick = dispara;