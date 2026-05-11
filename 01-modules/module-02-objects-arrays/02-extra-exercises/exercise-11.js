function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const arrNivel1 = ["azul", "branco", "preto", "rosa", "roxo"]

const [primeiroValorNivel1] = arrNivel1

const [primeiroNivel1, , , ignoraValorNivel1] = arrNivel1

const [elementoNivel1, ...restoNivel1] = arrNivel1

printTitulo("NÍVEL 1")

console.log(primeiroValorNivel1)
console.log(ignoraValorNivel1)
console.log(restoNivel1)