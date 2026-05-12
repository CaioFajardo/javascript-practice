function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const arrayNivel1 = [1, 2, 3, 4, 5, 6]

printTitulo("NÍVEL 1")

for (const valor of arrayNivel1) {
    console.log(valor)
}

console.log("---")

for (let i = 0; i < arrayNivel1.length; i++) {
    console.log(arrayNivel1[i])
}