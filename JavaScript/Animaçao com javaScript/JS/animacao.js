//Desenhando no Canvas
let tela = document.querySelector("#canvas01");
let pincel = tela.getContext("2d");//usado para obter o contexto de renderização e suas funções de desenho. usado com a <canvas>

pincel.fillStyle = "lightgray";//e meu pinsel seleciono a cor 
pincel.fillRect(0, 0, 600, 400);//aqui aplico minha cor no tamanho selicitado.

pincel.fillStyle = "green";
pincel.fillRect(0, 0, 200, 400)//O [0 = x-->horizontal] [0 = y -> vertical]e de onde vai comesar no casso no top esquerdo. 200 de largura e 400 de comprimento

pincel.fillStyle = "red";
pincel.fillRect(400, 0, 200,400); //vai comesar a desenha no 400 horizontal 0 na vertical vai pencher 200 horizotal e 400 vertical.

//############## Segunda parte  fazendo um triangulo#################

pincel.fillStyle = "yellow";//seleciono a cor do meu pincel
pincel.beginPath();//aqui inicio o caminho do meu pincel
pincel.moveTo(300, 200);
pincel.lineTo(200,400);
pincel.lineTo(400,400);
pincel.fill()//executo o meu pincel

//################## tecera parte #############

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300,200, 50, 0, 2 * 3.14)
pincel.fill()
//###############################################################
