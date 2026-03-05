//DOM => Document Object Model

//Script de manipulação DOM

//getElementById => variavel simples - Id é sempre única

//usar sempre o document para manipular o DOM
let tiulo = document.getElementById("titulo"); //busca no html o elemento com a id correspondente
console.log(titulo); //mostra a informação da id
titulo.innerText = "Outro Título para o site"; //modifica o conteúdo da ID

//getElementByTagName => vetor (Array) de elementos
let paragrafo = document.getElementsByTagName("p"); //html => p
paragrafo[0].innerText="Exemplo de Parágrafo Modificado por DOM"; //modificar elemento 
paragrafo[1].style.color = "red"; //modificar o style do elemento

//getElementByClassName => Vetor de elementos
let descricao = document.getElementsByClassName("descricao");
//modificar elementos do array
for(let i=0; i<descricao.length;i++){
    descricao[i].style.color = "blue";
}

//querySelector => variavel simples = seleciona sempre o primeiro elemento com a seletor
let p = document.querySelector("p"); 
//modificar a fonte
p.style.fontFamily = "bold";

//querySelectorAll => vetor de elementos => seleciona todos os elementos
let descricaoAll = document.querySelectorAll(".descricao"); //seleciona todos os elementos com a classe descricao
descricaoAll.forEach(e => e.style.fontWeight = "bold");

//eventos Listener (ouvintes)

//chamar pelo nome da função
function MudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "lightblue";
}

//chamar diretamente no script o ouvinte
document.getElementById("btnColor").addEventListener("click",OutraCor);

function OutraCor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "lightgreen";
}