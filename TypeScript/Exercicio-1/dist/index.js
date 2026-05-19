"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderizarPerfil(usuario) {
    if (usuario.isAdmin) {
        console.log(`Usuário Administrador: ${usuario.nome} (${usuario.email})`);
    }
    else {
        console.log(`Usuário Comum: ${usuario.nome} (${usuario.email})`);
    }
}
const usuarioAdmin = {
    id: 1,
    nome: "Emily",
    email: "emily@email.com",
    isAdmin: true,
};
const usuarioComum = {
    id: 2,
    nome: "Gabriela",
    email: "gabriela@email.com",
    isAdmin: false,
};
renderizarPerfil(usuarioAdmin);
renderizarPerfil(usuarioComum);
//# sourceMappingURL=index.js.map