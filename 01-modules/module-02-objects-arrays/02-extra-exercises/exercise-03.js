function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const array1Nivel1 = [1, 2, 3]
const array2Nivel1 = [4, 5, 6]

const arrayCombinadoNivel1 = [...array1Nivel1, ...array2Nivel1, 7]

const produtoNivel1 = {
    nome: "Bola",
    preco: 15
}

const produtoNovaPropNivel1 = { ...produtoNivel1, estoque: 10 }

printTitulo("NÍVEL 1")

console.log(arrayCombinadoNivel1)
console.log(produtoNovaPropNivel1)

// Nível 2

const array1Nivel2 = [1, 2, 3]
const array2Nivel2 = [4, 5, 6]

const arrayCombinadoNivel2 = [...array1Nivel2, ...array2Nivel2, 7]

const produtoNivel2 = {
    nome: "Bola",
    preco: 15
}

const produtoNovaPropNivel2 = { ...produtoNivel2, estoque: 10 }

const produtoAtualizadoNivel2 = { ...produtoNovaPropNivel2, preco: 20}

printTitulo("NÍVEL 2")

console.log(produtoAtualizadoNivel2)