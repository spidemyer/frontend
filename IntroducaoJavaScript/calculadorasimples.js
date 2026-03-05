//calculadora simples

var prompt = require("prompt-sync");

//Funções de calculo

function soma(a, b){
    return (a+b);
}

function subtracao(a, b){
    return (a-b);
}

function multiplicacao(a, b){
    return (a*b);
}

function divisao(a, b){
    return (a/b);
}

function menu(){
    let operacao;
    let numero1;
    let numero2;
    let resultado;
    console.log("=== Calculadora Simples ===");
    console.log("| 1. Soma                  ");
    console.log("| 2. Subtração             ");
    console.log("| 3. Multiplicação         ");
    console.log("| 4. Divisão               ");
}