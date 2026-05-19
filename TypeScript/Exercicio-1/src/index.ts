// Criação da interface Usuario
interface Usuario {
  id: number;
  nome: string;
  email: string;
  isAdmin: boolean;
}

function renderizarPerfil(usuario: Usuario): void { // função para renderizar o perfil do usuario
  if (usuario.isAdmin) {
    console.log(`Usuário Administrador: ${usuario.nome} (${usuario.email})`);
  } else {
    console.log(`Usuário Comum: ${usuario.nome} (${usuario.email})`);
  }
}


const usuarioAdmin: Usuario = {
  id: 1,
  nome: "Emily",
  email: "emily@email.com",
  isAdmin: true,
};

const usuarioComum: Usuario = {
  id: 2,
  nome: "Gabriela",
  email: "gabriela@email.com",
  isAdmin: false,
};

// renderizando os perfis
renderizarPerfil(usuarioAdmin);
renderizarPerfil(usuarioComum);
