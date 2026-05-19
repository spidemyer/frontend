"use strict";
//Sistema de notas escolares
Object.defineProperty(exports, "__esModule", { value: true });
// função calcularMedia
function calcularMedia(estudante) {
    // Reduz o array de notas para somar todas elas
    const somaNotas = estudante.notas.reduce((total, notaAtual) => total + notaAtual, 0);
    // Calcula a média dividindo o total pela quantidade de notas
    const media = somaNotas / estudante.notas.length;
    // Define a situação do aluno (Aprovado se >= 7, senão Reprovado)
    const situacao = media >= 7 ? "Aprovado" : "Reprovado";
    // Exibe o resultado no console com a média formatada para 1 casa decimal
    console.log(`Aluno(a): ${estudante.nome} | Média: ${media.toFixed(1)} | Situação: ${situacao}`);
}
const alunoAprovado = {
    nome: "Ana Silva",
    notas: [8.5, 7.0, 9.0, 6.5]
};
const alunoReprovado = {
    nome: "Carlos Souza",
    notas: [5.0, 6.0, 4.5, 7.0]
};
// Executando a função para testar
calcularMedia(alunoAprovado);
calcularMedia(alunoReprovado);
//# sourceMappingURL=index.js.map