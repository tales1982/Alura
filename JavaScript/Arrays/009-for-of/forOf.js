const notas = [9, 8 , 10 , 9];
let somaDasNotas = 0

for(let nota of notas){
    somaDasNotas += nota;
   
}

const media = somaDasNotas / notas.length
 console.log(`A media das notas é ${media}`)
/* Essa for e muito mais pratico e simples para realizar ==> traducao do for of (Para cada elemento percorra meu array*/ 