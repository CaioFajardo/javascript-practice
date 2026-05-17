function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" }
]

function atualizarNome(usuarios, id, novoNome) {
    const alteraNome = structuredClone(usuarios)

    for (const user in alteraNome) {
        if (alteraNome[user].id === id) {
            alteraNome[user].nome = novoNome
        }
    }

    return alteraNome
}

console.log(atualizarNome(usuarios, 1, "Vinicius"))