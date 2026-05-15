const usuario = {
    nome: "Caio",
    endereco: {
        cidade: "Cataguases"
    }
}

function congelar(objeto) {
    Object.freeze(objeto)

    for (const chave in objeto) {
        if (typeof objeto[chave] === "object") {
            congelar(objeto[chave])
        } 
    }

    return objeto
}

congelar(usuario)

usuario.endereco.cidade = "RJ"

console.log(usuario)