function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function pegarNomeNivel1(usuario) {
    return usuario?.nome ?? "Nome não encontrado!"
}

printTitulo("NÍVEL 1")

console.log(pegarNomeNivel1({ nome: "Caio" }))
console.log(pegarNomeNivel1({}))
console.log(pegarNomeNivel1(null))

// Nível 2

function pegarCidadeNivel2(usuario) {
    return usuario?.endereco?.cidade ?? "Cidade não encontrada!"
}

printTitulo("NÍVEL 2")

console.log(pegarCidadeNivel2({
    nome: "Caio",
    endereco: {
        cidade: "Rio de Janeiro"
    }
}))
console.log(pegarCidadeNivel2({}))
console.log(pegarCidadeNivel2({ endereco: null }))
console.log(pegarCidadeNivel2({ endereco: {} }))
console.log(pegarCidadeNivel2(null))

// Nível 3

function pegarCidadeNivel3(usuario) {
    const cidade = usuario?.endereco?.cidade

    if (cidade === "") {
        return "Cidade não encontrada!"
    }

    return cidade ?? "Cidade não encontrada!"
}

printTitulo("NÍVEL 3")

console.log(pegarCidadeNivel3(""))