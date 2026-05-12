function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

let n1Nivel1 = 1

printTitulo("NÍVEL 1")

while (n1Nivel1 <= 10) {
    console.log(n1Nivel1)
    n1Nivel1++
}

console.log("---")

let n2Nivel1 = 1

do {
    console.log(n2Nivel1)
    n2Nivel1++
} while(n2Nivel1 <= 10)