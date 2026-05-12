function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const usuario = "Caio"
const usuario2 = null

printTitulo("NÍVEL 1")

console.log(usuario && "Usuário encontrado")
console.log(usuario2 && "Usuário encontrado")

console.log(usuario || "Visitante")
console.log(usuario2 || "Visitante")