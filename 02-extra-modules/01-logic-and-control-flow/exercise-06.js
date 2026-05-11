function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

printTitulo("NÍVEL 1")

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

console.log("---")

for (let i = 10; i > 0; i--) {
    console.log(i)
}

console.log("---")

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

console.log("---")

for (let i = 0; i < 10; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}

// Nível 2

let soma = 0

for (i = 1; i <= 10; i++) {
   soma += i 
}

printTitulo("NÍVEL 2")

console.log(soma)

// Nível 3

let pares = 0

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        pares++
    }
}

printTitulo("NÍVEL 3")

console.log(pares)