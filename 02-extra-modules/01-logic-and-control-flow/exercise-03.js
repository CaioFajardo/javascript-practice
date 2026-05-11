function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const idade = 18

const temDezoito = 18

printTitulo("NÍVEL 1")

if (idade < temDezoito) {
    console.log("Tem menos de 18!")
} else if (idade === temDezoito) {
    console.log("Tem 18 anos!")
} else {
    console.log("Tem mais de 18 anos!")
}