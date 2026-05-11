function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const userNivel1 = { nome: "João", idade: 30, cidade: "SP"}

const userStringNivel1 = []

for (const [chave, valor] of Object.entries(user)) {

    userStringNivel1.push(`${chave}: ${valor}`)
}

printTitulo("NÍVEL1")

console.log(userStringNivel1)

// Nível 2

const userNivel2 = { nome: "João", idade: 30, cidade: "SP"}

const userStringNivel2 = []

for (const [chave, valor] of Object.entries(userNivel2)) {
    if (valor !== undefined) {
        userStringNivel2.push(`${chave}: ${valor}`)
    }
}

printTitulo("NÍVEL 2")

console.log(userStringNivel2)