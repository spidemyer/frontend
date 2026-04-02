//event master
const form = document.getElementById("form-credenciamento");
const mensagemErro = document.getElementById("mensagem-erro");
const listaConvidados = document.getElementById("lista-convidados");
const listaVaziaMsg = document.getElementById("lista-vazia");

const inputTheme = document.getElementById("checkbox-theme"); // checkbox para alternar tema claro/escuro

const campos = { //partes do formulário
  nome: document.getElementById("nome"),
  email: document.getElementById("email"),
  cpf: document.getElementById("cpf"),
  empresa: document.getElementById("empresa"),
  cargo: document.getElementById("cargo"),
};
// Alternar tema claro/escuro com o negócio de arrastar
inputTheme.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
//limpar o formulário epor mensagem de erro
const limparFormulario = () => {
  form.reset();
  mensagemErro.textContent = "";
};
// atalho do ESC para limpar o formulário
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    limparFormulario();
  }
});
// validar o formulário e criar o convidado na lista
form.addEventListener("submit", (event) => {
  event.preventDefault();
// verificar os campos
  const valores = {
    nome: campos.nome.value.trim(),
    email: campos.email.value.trim(),
    cpf: campos.cpf.value.trim(),
    empresa: campos.empresa.value.trim(),
    cargo: campos.cargo.value.trim(),
  };
// verificar os campos vazios
  const algumVazio = Object.values(valores).some((valor) => valor === "");
//se vazio mostrar o erro
  if (algumVazio) {
    mensagemErro.textContent = "Atenção: Todos os 5 campos são obrigatórios!";
    return;
  }
// se tudo ok, criar o card do convidado
  mensagemErro.textContent = "";

  criarCardConvidado(valores);
// limpar o formulário após criar o card
  limparFormulario();
});
// função para criar o card do convidado
function criarCardConvidado(dados) {
  if (listaVaziaMsg) {
    listaVaziaMsg.style.display = "none";
  }
// criar o card do convidado
  const card = document.createElement("div");
  card.classList.add("guest-card");
// preencher o card com as informações do convidado
  card.innerHTML = `
        <div class="guest-info">
            <p class="guest-name">${dados.nome}</p>
            <p class="guest-detail"> E-mail: ${dados.email}  <br> CPF: ${dados.cpf}</p>
            <p class="guest-detail">🏣 ${dados.empresa} - ${dados.cargo}</p>
        </div>
        <button class="btn-remove">Remover</button>
    `;
// adicionar evento para remover o card com o botão de remover vermelho
  const btnRemover = card.querySelector(".btn-remove");
  btnRemover.addEventListener("click", () => {
    card.remove();
// verificar se a lista de convidados ficou vazia após remover o card
    if (
      listaConvidados.children.length === 1 &&
      listaConvidados.contains(listaVaziaMsg)
    ) { // se só tiver o card vazio, mostrar a mensagem de lista vazia
      listaVaziaMsg.style.display = "block";
    } else if (listaConvidados.children.length === 0) {
      listaConvidados.appendChild(listaVaziaMsg);
      listaVaziaMsg.style.display = "block"; // mostrar a mensagem de lista vazia
    }
  });
// adicionar o card à lista de convidados
  listaConvidados.appendChild(card);
}
