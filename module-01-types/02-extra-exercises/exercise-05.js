function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function mesmoTipo(array) {
    if (!Array.isArray(array)) {
        return "Erro: Valor inválido!"
    }

    if (array.length === 0) {
        return "Erro: Valor inválido!"
    }

    const posUm = typeof array[0]

    for (let i = 1; i < array.length; i++) {
        if (typeof array[i] !== posUm) {
            return false
        }
    }

    return true
}

printTitulo("NÍVEL 1")

console.log(mesmoTipo([1, 2, 3]))
console.log(mesmoTipo([1, "2", 3]))

// Nível 2

function mesmoTipo(array) {
    if (!Array.isArray(array)) {
        return "Erro: Valor inválido!"
    }

    if (array.length === 0) {
        return "Erro: Valor inválido!"
    }

    const posUm = typeof array[0]

    for (let i = 1; i < array.length; i++) {
        if (typeof array[i] !== posUm) {
            return false
        }
    }

    return true
}

printTitulo("NÍVEL 2")

console.log(mesmoTipo([1, 2, 3]))
console.log(mesmoTipo([1, "2", 3]))
console.log(mesmoTipo([1]))
console.log(mesmoTipo(["a"]))

console.log(mesmoTipo(null))
console.log(mesmoTipo(NaN))
console.log(mesmoTipo([]))

console.log(mesmoTipo([null, null]))
console.log(mesmoTipo([null, {}]))

// Nível 3

function getTipo(valor) {
    if (valor === null) {
        return "null"
    }

    return typeof valor
}

function mesmoTipo(array) {
    if (!Array.isArray(array)) {
        return "Erro: Valor inválido!"
    }

    if (array.length === 0) {
        return "Erro: Valor inválido!"
    }

    let posUm = getTipo(array[0])

    for (let i = 1; i < array.length; i++) {
        if (getTipo(array[i]) !== posUm) {
            return false
        }
    }

    return true
}

printTitulo("NÍVEL 3")

console.log(mesmoTipo([1, 2, 3]))
console.log(mesmoTipo([1, "2", 3]))
console.log(mesmoTipo([1]))
console.log(mesmoTipo(["a"]))

console.log(mesmoTipo(null))
console.log(mesmoTipo(NaN))
console.log(mesmoTipo([]))

console.log(mesmoTipo([null, null]))
console.log(mesmoTipo([null, {}]))