const users = [{ id: 1, nome: "João" }, { id: 2, nome: "Maria" }];

function atualizarNome(user, id, nome) {
    const copiaUser = structuredClone(users)

    for (const usuarios of copiaUser) {
        if (usuarios.id === id) {
            usuarios.nome = nome
        }
    }

    return copiaUser
}

console.log(atualizarNome(users, 1, "Pedro"))