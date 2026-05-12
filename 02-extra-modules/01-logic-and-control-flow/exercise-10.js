function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const objetoNivel1 = {
    nome: "Caio",
    idade: 22
}

for (const chave in objetoNivel1) {
    console.log(chave, objetoNivel1[chave])
}

console.log("---")

for (const [chave, valor] of Object.entries(objetoNivel1)) {
    console.log(`${chave}: ${valor}`)
}