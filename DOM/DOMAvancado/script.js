//estudo de DOM avançado
//adicionar elementos com DOM em páginas html

//contruir um header com DOM

let header = document.createElement("header"); //criação de uma tag <header>
//estilização do header
header.style.backgroundColor = "purple";
header.style.height = "8vh";
//adicionar o header como elemento filho do body
document.body.appendChild(header);
document.body.style.margin = "0"; //tira a margem do body

//adicionar elementos ao header
let divNav = document.createElement("div");
//configurando o display da div 
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.color = "aliceblue";
divNav.style.height = "100%";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "cursive"

//adicionar a div ao header
header.appendChild(divNav);

//adicionar itens a nav
let itensNav = ["Index", "Produtos", "Contato"];
//percorrer o vetor
itensNav.forEach(e => {
    let item = document.createElement("a");
    item.innerHTML = e;
    item.href = e.toLowerCase()+".html"; //criando o link
    item.textDecoration = "none" 
    item.style.color = "inherit";
    divNav.appendChild(item); //adicionando o item na divnav
})

//fazer rodapé
let footer = document.createElement("footer");
footer.style.backgroundColor = "purple";
footer.style.height = "5vh";
footer.style.width = "100%";
footer.style.position = "fixed";
footer.style.bottom = "0";
let paragrafoFooter = document.createElement("p");
paragrafoFooter.innerHTML =
  "Copyright &copy; 2026 - Spidemyer 😉";
paragrafoFooter.style.color = "aliceblue";
paragrafoFooter.style.textAlign = "center";
paragrafoFooter.style.fontFamily = "cursive"
paragrafoFooter.style.lineHeight = "5vh";
footer.appendChild(paragrafoFooter);
document.body.appendChild(footer);
