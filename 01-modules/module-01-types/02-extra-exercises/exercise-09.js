function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function dividir(a, b) {
    const numA = Number(a)
    const numB = Number(b)
    
    if (!Number.isFinite(numA) || !Number.isFinite(numB) ||numB === 0) {
        return NaN
    }

    return numA / numB
}

console.log(dividir(10, 2))
console.log(dividir(5, 2))
console.log(dividir(10, 0))