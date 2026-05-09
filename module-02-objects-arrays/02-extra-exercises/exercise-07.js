function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const arNumNivel1 = [1, 2, 3, 4, 5, 6]

const arIncludesNivel1 = arNumNivel1.includes(3)

const arIndexNivel1 = arNumNivel1.indexOf(2)

const arSliceNivel1 = arNumNivel1.slice(0, 3)

const arConcatNivel1 = arNumNivel1.concat(arSliceNivel1)

const arJoinNivel1 = arNumNivel1.join(", ")

const arReverse = arNumNivel1.toReversed()

printTitulo("NÍVEL 1")

console.log(arIncludesNivel1)
console.log(arIndexNivel1)
console.log(arSliceNivel1)
console.log(arConcatNivel1)
console.log(arJoinNivel1)
console.log(arReverse)