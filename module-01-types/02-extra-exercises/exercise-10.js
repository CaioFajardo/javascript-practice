function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function capitalizar(nome) {
    if (typeof nome !== "string" || nome.length === 0) {
        return ""
    }

    return nome[0].toUpperCase() + nome.slice(1)
}

console.log(normalizarUsuario({ nome: "caio", idade: "22" }))