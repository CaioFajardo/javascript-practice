function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function tipoReal(valor) {
    if (valor === null) {
        return "null"
    }

    if (Array.isArray(valor)) {
        return "array"
    }

    if (Number.isNaN(valor)) {
        return "nan"
    }

    return typeof valor
}

printTitulo("NÍVEL 1")
console.log(tipoReal("caio"))
console.log(tipoReal(10))
console.log(tipoReal(true))
console.log(tipoReal(null))
console.log(tipoReal([1, 2, 3]))
console.log(tipoReal(undefined))
console.log(tipoReal(NaN))

// Nível 2 (Em progresso...)

function tipoReal(valor) {
    if (valor === null) {
        return "null"
    }

    if (Array.isArray(valor)) {
        return "array"
    }

    if (Number.isNaN(valor)) {
        return "nan"
    }

    if (valor instanceof Date) {
        return "date"
    }

    if (valor instanceof RegExp) {
        return "regexp"
    }

    return typeof valor
}

printTitulo("NÍVEL 2")
console.log(tipoReal("abc"))
console.log(tipoReal(10))
console.log(tipoReal(true))
console.log(tipoReal(undefined))
console.log(tipoReal(null))
console.log(tipoReal([1, 2, 3]))
console.log(tipoReal({nome: "caio"}))
console.log(tipoReal(NaN))
console.log(tipoReal(() => {}))
console.log(tipoReal(new Date()))
console.log(tipoReal(/abc/))