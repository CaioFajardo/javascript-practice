function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const usuario = {
    nome: "João",
    idade: 25
}

function atualizarUsuario(usuario, novoNome) {
    const copiaUsuario = { ...usuario }

    copiaUsuario["nome"] = novoNome

    return copiaUsuario
}

printTitulo("NÍVEL 1")

console.log(atualizarUsuario(usuario, "Carlos"))