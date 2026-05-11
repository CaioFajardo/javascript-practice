function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function mesmoTipoNivel1(array) {
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

console.log(mesmoTipoNivel1([1, 2, 3]))
console.log(mesmoTipoNivel1([1, "2", 3]))

// Nível 2

function mesmoTipoNivel2(array) {
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

console.log(mesmoTipoNivel2([1, 2, 3]))
console.log(mesmoTipoNivel2([1, "2", 3]))
console.log(mesmoTipoNivel2([1]))
console.log(mesmoTipoNivel2(["a"]))

console.log(mesmoTipoNivel2(null))
console.log(mesmoTipoNivel2(NaN))
console.log(mesmoTipoNivel2([]))

console.log(mesmoTipoNivel2([null, null]))
console.log(mesmoTipoNivel2([null, {}]))

// Nível 3

function getTipoNivel3(valor) {
    if (valor === null) {
        return "null"
    }

    return typeof valor
}

function mesmoTipoNivel3(array) {
    if (!Array.isArray(array)) {
        return "Erro: Valor inválido!"
    }

    if (array.length === 0) {
        return "Erro: Valor inválido!"
    }

    let posUm = getTipoNivel3(array[0])

    for (let i = 1; i < array.length; i++) {
        if (getTipoNivel3(array[i]) !== posUm) {
            return false
        }
    }

    return true
}

printTitulo("NÍVEL 3")

console.log(mesmoTipoNivel3([1, 2, 3]))
console.log(mesmoTipoNivel3([1, "2", 3]))
console.log(mesmoTipoNivel3([1]))
console.log(mesmoTipoNivel3(["a"]))

console.log(mesmoTipoNivel3(null))
console.log(mesmoTipoNivel3(NaN))
console.log(mesmoTipoNivel3([]))

console.log(mesmoTipoNivel3([null, null]))
console.log(mesmoTipoNivel3([null, {}]))

// Nível 4

function getTipoNivel4(valor) {
    if (valor === null) {
        return "null"
    }

    if (Number.isNaN(valor)) {
        return "nan"
    }

    return typeof valor
}

function mesmoTipoNivel4(array) {
    if (!Array.isArray(array)) {
        return "Erro: Valor inválido!"
    }

    if (array.length === 0) {
        return "Erro: Valor inválido!"
    }

    let posUm = getTipoNivel4(array[0])

    for (let i = 1; i < array.length; i++) {
        if (getTipoNivel4(array[i]) !== posUm) {
            return false
        }
    }

    return true
}

printTitulo("NÍVEL 4")

console.log(mesmoTipoNivel4([NaN, NaN]))
console.log(mesmoTipoNivel4([NaN, 1]))

// Nível 5

function getTipoNivel5(valor) {
    if (valor === null) {
        return "null"
    }

    if (Number.isNaN(valor)) {
        return "nan"
    }

    if (Array.isArray(valor)) {
        return "array"
    }

    if (valor === undefined) {
        return "undefined"
    }

    return typeof valor
}

function mesmoTipoNivel5(array) {
    if (!Array.isArray(array)) {
        return "Erro: Valor inválido!"
    }

    if (array.length === 0) {
        return "Erro: Valor inválido!"
    }

    let posUm = getTipoNivel5(array[0])

    for (let i = 1; i < array.length; i++) {
        if (getTipoNivel5(array[i]) !== posUm) {
            return false
        }
    }

    return true
}

printTitulo("NÍVEL 5")

console.log(mesmoTipoNivel5([[], []]))
console.log(mesmoTipoNivel5([[], {}]))
console.log(mesmoTipoNivel5([{}, {}]))

console.log(mesmoTipoNivel5([[], null]))
console.log(mesmoTipoNivel5([[], NaN]))
console.log(mesmoTipoNivel5([{}, null]))

console.log(mesmoTipoNivel5([undefined, undefined]))
console.log(mesmoTipoNivel5([undefined, null]))

// Nível 6

function getTipoNivel6(valor) {
    if (valor === null) {
        return "null"
    }

    if (Number.isNaN(valor)) {
        return "nan"
    }

    if (Array.isArray(valor)) {
        return "array"
    }

    if (valor === undefined) {
        return "undefined"
    }

    if (valor instanceof Date) {
        return "date"
    }

    if (valor instanceof RegExp) {
        return "regexp"
    }

    return typeof valor
}

function mesmoTipoNivel6(array) {
    if (!Array.isArray(array)) {
        return "Erro: Valor inválido!"
    }

    if (array.length === 0) {
        return "Erro: Valor inválido!"
    }

    let posUm = getTipoNivel6(array[0])

    for (let i = 1; i < array.length; i++) {
        if (getTipoNivel6(array[i]) !== posUm) {
            return false
        }
    }

    return true
}

printTitulo("NÍVEL 6")

console.log(mesmoTipoNivel6([new Date(), new Date()]))
console.log(mesmoTipoNivel6([new Date(), {}]))

console.log(mesmoTipoNivel6([/a/, /b/]))
console.log(mesmoTipoNivel6([/a/, {}]))

console.log(mesmoTipoNivel6([() => {}, function() {}]))