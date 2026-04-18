function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function somar1(a, b) {
    const numA = Number(a)
    const numB = Number(b)

    return numA + numB
}

printTitulo("NÍVEL 1")
console.log(somar1(10, 10))
console.log(somar1(10, "10"))
console.log(somar1("10", "10"))

// Nível 2

function somar2(a, b) {
    const numA = Number(a)
    const numB = Number(b)

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        return "Erro: Valor inválido!"
    }

    if (a === null || b === null) {
        return "Erro: Valor inválido!"
    }

    if (typeof a === "undefined" || typeof b === "undefined") {
        return "Erro: Valor inválido!"
    }

    return numA + numB
}

printTitulo("NÍVEL 2")
console.log(somar2(10, 10))
console.log(somar2(10, "10"))
console.log(somar2("10", "10"))
console.log(somar2("10", "abc"))
console.log(somar2(null, 10))
console.log(somar2(undefined, 5))

// Nível 3

function somar3(a, b) {
    const numA = Number(a)
    const numB = Number(b)

    if (a === null || b === null || a === "" || b === "" || !Number.isFinite(numA) || !Number.isFinite(numB)) {
        throw new Error("Valor inválido!")
    }

    return numA + numB
}

function testar(valorA, valorB) {
    try {
        return somar3(valorA, valorB)
    } catch (e) {
        return "Erro: " + e.message
    }
}

printTitulo("NÍVEL 3")
console.log(testar(10, 10))
console.log(testar(10, "10"))
console.log(testar("10", "10"))

console.log(testar("10", "abc"))
console.log(testar(null, 10))
console.log(testar(undefined, 5))
console.log(testar("", ""))
console.log(testar([1, 2, 3], [4, 5, 6]))
console.log(testar({}, 10))

// Nível 4 - STRICT / SAFE

function somar4(a, b, modo = "strict") {
    const numA = Number(a)
    const numB = Number(b)

    const invalido =
        a === null || b === null ||
        a === "" || b === "" ||
        !Number.isFinite(numA) ||
        !Number.isFinite(numB)

    if (modo === "strict") {
        if (invalido) {
            throw new Error("Valor inválido!")
        }
        return numA + numB
    }

    if (modo === "safe") {
        if (invalido) {
            return "Erro: Valor inválido!"
        }
        return numA + numB
    }

    // fallback se modo for inválido
    return "Modo inválido!"
}

printTitulo("NÍVEL 5")

// STRICT (quebra)
console.log(somar4(10, 10, "strict"))
console.log(somar4(10, "10", "strict"))

try {
    console.log(somar4("10", "abc", "strict"))
} catch (e) {
    console.log("Erro:", e.message)
}

// SAFE (não quebra)
console.log(somar4(10, 10, "safe"))
console.log(somar4("10", "abc", "safe"))
console.log(somar4(null, 10, "safe"))

// modo inválido
console.log(somar4(10, 10, "qualquerCoisa"))