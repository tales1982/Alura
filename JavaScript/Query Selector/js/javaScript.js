function run() {
//obtendo o peso do meu testo
let pacientes = document.querySelectorAll(".paciente");//seleciono varios elementos

for(let i = 0; i < pacientes.length; i++){
let  paciente = pacientes[i]   
let tdPeso = paciente.querySelector(".info-peso");
let peso = tdPeso.textContent
//obtendo a altura do texto 
let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

let pesoValido = true;
let alturaValida = true;

if(peso <=0 || peso >= 500){
    pesoValido = false;
    tdPeso.textContent = "Peso Invalido!";
    paciente.classList.add("paciete-invalido");//Adciona uma case ao meu paciente nesse caso uma class do css que ta criada la aqui adciono os valores do css
}

if(altura <= 0 || altura >=3.00){
    alturaValida = false;
    tdAltura.textContent = "Altura Invalida" 
    paciente.classList.add("paciete-invalido");
}
if(alturaValida  && pesoValido){
let imc = peso / (altura * altura);//2.0 * 2.0 = 4.0 / 100 = 25
let tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = imc.toFixed(2);
}}}

let botaoAdcionar = document.querySelector("#adicionar-paciente");
botaoAdcionar.addEventListener("click", function(ev){
    ev.preventDefault();
   
    let form = document.querySelector("#form-adiciona")
    
    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

    let pacienteTr = document.createElement("tr")

    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura

   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);
   
   let tabela = document.querySelector("#tabela-pacientes");
   tabela.appendChild(pacienteTr)

  
})

