// Arquivo procurando-aluno.js com o includes

const alunos = ["João", "Juliana", "Ana", "Caio","tales"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];//adicionei os 2 array em uma so variável.
console.log(listaDeAlunosEMedias)

function exibirNomesENotas(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){/**aqui estou dizendo que se no indexe 0 no caso array den alunos, tem incluído um aluno chamado beto se estiver ele vai ser adicionado na variável aluno */
        console.log(`${aluno} esta cadastrado!`)
    }else{
        console.log("O aluno nao esta cadastrado!")
    }
}

exibirNomesENotas("beto")//aqui estou chamando a função e passando o no beto como parâmetro pra saber se existir na minha lista de alunos.