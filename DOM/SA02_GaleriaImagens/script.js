//galeria de imagens 

let uploadInput = document.getElementById("upload");
let btnAdd = document.getElementById("addImagem");
let galeria = document.querySelector(".galeria");
let carrossel = document.querySelector(".carrossel");

// Vetor para as imagens
let imagens = [];
// Variável para guardar o controle do setInterval
let carrosselIntervalo = null; 

// Adicionar imagens no vetor
btnAdd.addEventListener("click", () => {
  let imagemURL = uploadInput.value.trim(); // Pega o endereço da imagem no input
  if (imagemURL === "") return; // Se a condição for verdadeira interrompe o código
  
  imagens.push(imagemURL);
  atualizarGaleria(); // Atualiza a imagem na galeria
  atualizarCarrossel(); // Atualiza a imagem no carrossel
  uploadInput.value = ""; // Limpa o campo do input
});

// Atualizar galeria de imagens
function atualizarGaleria() {
  galeria.innerHTML = ""; // Limpar galeria de imagens
  
  imagens.forEach((imagem, index) => {
    let div = document.createElement("div"); // Criando uma div
    div.classList.add("imagemContainer");
    
    let img = document.createElement("img"); // Criando uma img
    img.src = imagem; // Add url da imagem
    
    let btnRemove = document.createElement("button"); // Criando um botão
    btnRemove.innerText = "X";
    btnRemove.classList.add("remove");
    
    // Adicionar um evento para o btnRemove
    btnRemove.addEventListener("click", () => {
      imagens.splice(index, 1); // Remover a imagem do vetor
      atualizarGaleria(); 
      atualizarCarrossel(); 
    });
    
    div.appendChild(img); // img à div
    div.appendChild(btnRemove); // btn à div
    galeria.appendChild(div); // div à galeria
  });
}

// Função para atualizar as imagens no carrossel
function atualizarCarrossel() {
  carrossel.innerHTML = ""; // Limpar o carrossel
  
  // Se não houver imagens, apenas limpa e para o código aqui
  if (imagens.length === 0) {
    if (carrosselIntervalo) clearInterval(carrosselIntervalo);
    carrossel.style.transform = `translateX(0%)`;
    return;
  }

  // Refazer o carrossel com as imagens do vetor
  imagens.forEach(imagem => {
    let img = document.createElement("img");
    img.src = imagem;
    // Cada imagem deve ocupar exatamente a largura total do container do carrossel
    img.style.width = `${100 / imagens.length}%`; 
    carrossel.appendChild(img); 
  });
  
  // A largura total da div carrossel deve ser 100% * quantidade de imagens
  carrossel.style.width = `${imagens.length * 100}%`;
  
  iniciarCarrossel(); // Função para iniciar o rodízio do carrossel
}

function iniciarCarrossel() {
  let index = 0;
  
  // REGRA DE OURO: Se já existe um carrossel rodando, a gente desliga ele primeiro!
  if (carrosselIntervalo) {
    clearInterval(carrosselIntervalo);
  }
  
  // Se só tiver uma imagem, não precisa ficar rodando o efeito
  if (imagens.length <= 1) return;

  // Reseta a posição inicial para evitar saltos estranhos ao atualizar
  carrossel.style.transition = "none";
  carrossel.style.transform = `translateX(0%)`;

  carrosselIntervalo = setInterval(() => {
    index = (index + 1) % imagens.length;
    
    // Suavizei a transição para 0.5 segundos para ficar mais elegante
    carrossel.style.transition = "transform 0.5s ease-in-out";
    
    // O cálculo do deslocamento agora baseia-se na largura individual de cada imagem
    carrossel.style.transform = `translateX(-${index * (100 / imagens.length)}%)`;
  }, 2000); // Muda de imagem a cada 2 segundos
}