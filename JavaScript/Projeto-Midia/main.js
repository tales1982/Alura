// Pom ----------------------------------------
function tocaSom(idElementoAudio) {

  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for( let contador = 0 ;contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${instrumento}`//template string

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento){

        if (evento.code == 'Space' || evento.code == 'Enter'){
             tecla.classList.add('ativa')
        }
       
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
        }
}
/*#####" Melhorando esse codigo"*/
/*
function playPom(){
document.querySelector("#som_tecla_pom").play();
}
document.querySelector(".tecla_pom").onclick = playPom//Estou chomando o evento do butao onclick por aqui no javaScript.
 
function playClap(){
    document.querySelector("#som_tecla_clap").play();
}
document.querySelector(".tecla_clap").onclick = playClap

function playTim() {
  document.querySelector("#som_tecla_tim").play();
}
document.querySelector(".tecla_tim").onclick = playTim;

function playPuff() {
  document.querySelector("#som_tecla_puff").play();
}
document.querySelector(".tecla_puff").onclick = playPuff;

function playSplash() {
  document.querySelector("#som_tecla_splash").play();
}
document.querySelector(".tecla_splash").onclick = playSplash;

function playToim() {
  document.querySelector("#som_tecla_toim").play();
}
document.querySelector(".tecla_toim").onclick = playToim;

function playPsh() {
  document.querySelector("#som_tecla_psh").play();
}
document.querySelector(".tecla_psh").onclick = playPsh;

function playTic() {
  document.querySelector("#som_tecla_tic").play();
}
document.querySelector(".tecla_tic").onclick = playTic;

function playTom() {
  document.querySelector("#som_tecla_tom").play();
}
document.querySelector(".tecla_tom").onclick = playTom;
*/
