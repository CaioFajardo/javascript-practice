function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function pegarNomeNível1(usuario) {
    return usuario?.nome ?? "Nome não encontrado!"
}

printTitulo("NÍVEL 1")

console.log(pegarNomeNível1({ nome: "Caio" }))
console.log(pegarNomeNível1({}))
console.log(pegarNomeNível1(null))

// Nível 2

function pegarCidadeNível2(usuario) {
    return usuario?.endereco?.cidade ?? "Cidade não encontrada!"
}

printTitulo("NÍVEL 2")

console.log(pegarCidadeNível2({
    nome: "Caio",
    endereco: {
        cidade: "Rio de Janeiro"
    }
}))
console.log(pegarCidadeNível2({}))
console.log(pegarCidadeNível2({ endereco: null }))
console.log(pegarCidadeNível2({ endereco: {} }))
console.log(pegarCidadeNível2(null))

// Nível 3

function pegarCidadeNível3(usuario) {
    const cidade = usuario?.endereco?.cidade

    if (cidade === "") {
        return "Cidade não encontrada!"
    }

    return cidade ?? "Cidade não encontrada!"
}

printTitulo("NÍVEL 3")

console.log(pegarCidadeNível3(""))