const alunos = require('./alunos')

function listarCursoAluno(aluno){
    let conteudo=''
    if(aluno.cursos.length){
    for(let curso of aluno.cursos){
        conteudo+=
    `   
    ----------------------------------------    
    Curso: ${curso.nomeDoCurso}
    Data de Matrícula: ${curso.dataMatricula}
    ----------------------------------------`

    } 
}else{
    return `Não está matriculado em algum curso!`
}

    return conteudo
}

function formatarString(string){
    return string.toLocaleLowerCase().split(' ').join('')
}
function listarNomes(){
    let listaDeAlunos=[]
    for(let aluno of alunos){
          listaDeAlunos.push(formatarString(aluno.nome))
      }
    return listaDeAlunos
  }

  function verificarDadosCadastrais(aluno,curso){
    curso = formatarString(curso)
    let listaDeCursos=[]
    for(let curso of aluno.cursos){
        listaDeCursos.push(formatarString(curso.nomeDoCurso))
    }
    
    return (listarNomes().includes(formatarString(aluno.nome))&&!listaDeCursos.includes(curso))
}

const calcularMedia = (notas) => {
    const media = notas.reduce((acumuldado,atual) => (acumuldado+atual))/notas.length

    return media
}

module.exports = {
    listarCursoAluno,
    formatarString,
    verificarDadosCadastrais,
    listarNomes,
    calcularMedia
}
