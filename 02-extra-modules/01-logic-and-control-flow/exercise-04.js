function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const n1 = 10
const n2 = 20
const usuarioAtivo = false

printTitulo("NÍVEL 1")

if (n1 > 8 && n2 > 13) {
    console.log("truthy")
} else {
    console.log("falsy")
}

if (n1 > 18 || n2 > 18) {
    console.log("truthy")
} else {
    console.log("falsy")
}

if (!usuarioAtivo) {
    console.log("Usuário inativo")
} else {
    console.log("Usuário ativo")
}