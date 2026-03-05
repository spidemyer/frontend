//Correção da Situação de Aprendizagem 2 - Gerencimento de Nota dos Alunos

// 1º Passo - Cadastrar Alunos
// Saber o nº de Alunos
// cada aluno tem 3 notas
// calcular a média do aluno
// identificar o status do aluno (aprovado/reprovado)
// imprimir as notas em formato de tabela

let matrizNota = []; //declaração de um vetor

let quantAlunos; // undefined

var prompt = required("prompt-sync");

quantAlunos = Number(prompt("Quantos alunos tem na Sala"));

//Cadastrar notas dos Alunos

for (let i = 0; i < quantAlunos; i++) {
  matrizNota[i] = []; //um vetor dentro do vetor
  for (let j = 0; j < 3; j++) {
    console.log(`Nota${j + 1} do Aluno${i + 1}`);
    matrizNota[i][j] = Number(prompt());
  }
}

// imprimir a tabela

console.log(matrizNota);

//Calcular a média do aluno (reduce)

for (let i = 0; i < quantAlunos; i++) {
  let media = matrizNota[i].reduce((soma, nota) => soma + nota) / 3;
  console.log(`A média do Aluno${i + 1}= ${media.toFixed(2)}`);
  // Verificar o Status do Aluno
  if (media >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}
