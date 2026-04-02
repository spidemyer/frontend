//criando elementos para a página index


//clonando elementos com DOM
let card = document.createElement("div");
card.classList.add("card"); //adicionando a classe Card ao meu div 

//criar um container para adicionar os cards
let container = document.createElement("div");
container.classList.add("container");

//criar um botão para clonar elementos
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar" // adicionando o texto
btnClonar.id = "btnClonar" //adicionando um id ao botão

//adicionar elemento a página
document.body.appendChild(btnClonar);
document.body.appendChild(container);
container.appendChild(card);

//adicionar um evento ao botão
btnClonar.addEventListener("click", ()=>{
    let clonar = card.cloneNode(true); //clonar o objeto card
    container.appendChild(clonar); // adicionar o clone ao container
});


let labelSwitch = document.createElement("label");
labelSwitch.classList.add("switch");

let sol = document.createElement("span");
sol.innerHTML = "☀️";
sol.classList.add("icon-sun");

let lua = document.createElement("span");
lua.innerHTML = "🌙";
lua.classList.add("icon-moon");

let chave = document.createElement("input");
chave.type = "checkbox";
chave.id = "darkMode";

let slider = document.createElement("span");
slider.classList.add("slider");

labelSwitch.appendChild(sol);
labelSwitch.appendChild(chave);
labelSwitch.appendChild(slider);
labelSwitch.appendChild(lua);
document.body.appendChild(labelSwitch);

chave.addEventListener("change", ()=>{
    document.body.classList.toggle("darkMode");
});


