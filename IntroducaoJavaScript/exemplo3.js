//Estrutura de Dados

//Condicionais (If Else // Switch Case)

//IF - ELSE

var precoproduto = 150;
// se preço do produto > 100 - desconto de 10%
if (precoProduto>=100){
    console.log("Valor a pagar: "+(precoProduto*0.9));
}else{
    console.log("Valor a pagar: "+(precoProduto));

}

// condicional intermediária (else if)
// se preco > 200 15% desc // preco > 100 10% desc //

if (precoProduto >= 200) {
  console.log("Valor do produto: " + precoProduto * 0.85);
} else if (precoProduto >= 100) {
  console.log("Valor do produto: " + precoProduto * 0.9);
} else {
  console.log("Valor do produto: " + precoProduto);
}

//Switch Case
var mes = 4;
switch(mes){
    case 1:
        console.log ("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    default:
        console.log("outro Mês");
        break;
}

//Estrutura de Repetição (For While)

//For ()
for(let i=0; i<=100; i++){
    console.log(i);
}

//while (incontáveis)
var continuar = true;
var numEscolhido = 3;
var contador = 0;
while (continuar){ //enquanto continuar for verdadeiro, continua o loop
    contador++; // incremento do contador
    let numeroSorteado = Math.round(Math.random()*10);  
    if(numeroSorteado == numEscolhido){
        continuar = false;
        console.log("Acertou");
        console.log("Tentativas = " +contador);
    }
}

//funções (function)
//ações específicas - podem ser chamadas a qaulquer momento dentro do código

function ola (nome){ //função com retorno
    return "Olá,"+nome;
}

function hello (nome){
    console.log("Hello, "+nome);
}

console.log(ola("Diogo"));

hello("Diogo");