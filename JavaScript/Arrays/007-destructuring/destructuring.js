const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {/**Usando o includes */
    const [alunos, medias] = listaDeAlunosEMedias;

    const indice = alunos.indexOf(aluno);//Pegando o index de aluno

    const mediaDoAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}.`);
  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("Caio");
