// lógica de funcionamento da lista de tarefas

// criar um ouvinte para a tarefa
let btnEnviar = document.getElementById("btnEnviar");
let tarefa = document.getElementById("tarefa");

btnEnviar.addEventListener("click", criarTarefa);

//criar a função para criar a tarefa
function criarTarefa() {
  let texto = tarefa.value.trim();
  //verificar se a tarefa não está vazia
  if (texto == "") {
    return;
  }
  //se não estiver vazia => não precisa do else
  let li = document.createElement("li");
  li.innerHTML =
    texto +
    '<button onclick="removerTarefa(this)" class="btnRemove">Remover</button>';
  //adicionar li => ul
  let ul = document.getElementById("lista");
  ul.appendChild(li); //adicionando o li a ul via hierarquia
  //limpa o campo do input
  tarefa.value = "";
}

function removerTarefa(botao) {
  botao.parentElement.remove();
}

//estilizando pelo DOM
document.body.style.backgroundColor = "#f1b4f1";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "cursive, georgia, serif";

let container = document.querySelector(".container");
container.style.width = "50%";
container.style.backgroundColor = "#b475c0";
container.style.margin = "0 auto";
container.style.borderRadius = "10px";

tarefa.style.width = "50%";
tarefa.style.padding = "10px";
tarefa.style.borderRadius = "5px";

btnEnviar.style.padding = "10px 20px";
btnEnviar.style.borderRadius = "5px";
btnEnviar.style.backgroundColor = "#c78bc7";
btnEnviar.style.border = "none";
btnEnviar.style.cursor = "pointer";

let lista = document.getElementById("lista");
lista.style.listStyleType = "none";
