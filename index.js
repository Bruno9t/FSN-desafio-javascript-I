const {listarCursoAluno,formatarString,
    verificarDadosCadastrais,listarNomes,
    calcularMedia
} = require('./funcoesAuxiliares')

// Base a ser utilizada
const alunos = require('./alunos')


// implementação

function adicionarAluno(aluno){
    if(aluno.nome){
        alunos.push(aluno)

        console.log(`${aluno.nome} foi adicionado com sucesso`)

        listarAlunos(alunos)
    }else console.log('Algo deu errado')
}

 adicionarAluno({
     nome:'Charle',
     notas:[],
     cursos:[],
     faltas:6
})

function listarAlunos(alunos){
    console.log(`       
    Alunos da Digital House Brasil`
    )

    for(let aluno of alunos){
        console.log(
`
---------------------------
Nome: ${aluno.nome}
Notas: ${aluno.notas.length?aluno.notas:'Ainda não há notas!'}
Cursos: ${listarCursoAluno(aluno)}
faltas: ${aluno.faltas}
---------------------------`
            )
    }
}

//listarAlunos(alunos)

function buscarAluno(nome){

    if(nome.length!==0){
    let busca = alunos.filter(aluno=>{
        return formatarString(aluno.nome)===formatarString(nome)
    })
    if(busca.length){
        listarAlunos(busca)
    }else{
        console.log(`Não achamos alunos com nome ${nome}`)
    }
}else{
    console.log('Insira algum nome!')
    }
}

//buscarAluno('  Bru N  o M ede I    rO         S        ')


function matricularAluno(aluno,curso){ 
    if(verificarDadosCadastrais(aluno,curso)){
      let index = listarNomes().indexOf(formatarString(aluno.nome))
        alunos[index].cursos.push({
            nomeDoCurso:curso,
            dataMatricula:new Date
        })
        console.log(`${aluno.nome} matriculado com sucesso no curso ${curso}`)
      buscarAluno(aluno.nome)
    }else{
        console.log(`${aluno.nome} não está cadastrado ou ja esta matriculado!`)
    }
}
/*
matricularAluno(
    {
    nome:"Bruno Medeiros",
    notas:[10,9.8,9.6],
    cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
    faltas:0
},'Design')*/


function aplicarFalta(aluno){
    let index = listarNomes().indexOf(formatarString(aluno.nome))
    if(index!==-1 && alunos[index].cursos.length){
      alunos[index].faltas++
      
      console.log(`Falta aplicada!`)
      buscarAluno(aluno.nome)
    }else{
      console.log(`${aluno.nome} nao encontrado!`)
    }
  }
  /*
  aplicarFalta({
    nome:"   h  e  N r  Iqu     e",
    notas:[],
    cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
    faltas:20
})
*/

function aplicarNota(aluno,nota){
    let index = listarNomes().indexOf(formatarString(aluno.nome))
    if(index!==-1 && alunos[index].cursos.length){
      alunos[index].notas.push(nota)
      
      console.log(`Nota aplicada!`)
      buscarAluno(aluno.nome)
    }else{
      console.log(`${aluno.nome} nao encontrado!`)
    }
  }
/*
  aplicarNota({
    nome:"Henrique",
    notas:[],
    cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
    faltas:20
},10)
*/

function aprovarAluno(aluno){
    let index = listarNomes().indexOf(formatarString(aluno.nome))
    if(index!==-1 && alunos[index].cursos.length){
            
        if(calcularMedia(alunos[index].notas) >= 7 &&
         alunos[index].faltas <=3 && alunos[index].notas.length)
            console.log(`${aluno.nome} aprovado(a)!`)
            else console.log('Não foi aprovado :(')
    }else{
      console.log(`${aluno.nome} não aprovado ou sem notas`)
    }
}
/*
aprovarAluno({
    nome:"Bruno Medeiros",
    notas:[10,9.8,9.6],
    cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
    faltas:0
})
*/

  

