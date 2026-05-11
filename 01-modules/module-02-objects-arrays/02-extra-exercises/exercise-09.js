function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const objNivel1 = {
    nome: "Caio"
}

const objStringfyNivel1 = JSON.stringify(objNivel1)

console.log(typeof objStringfyNivel1)

const objParseNivel1 = JSON.parse(objStringfyNivel1)

console.log(typeof objParseNivel1)