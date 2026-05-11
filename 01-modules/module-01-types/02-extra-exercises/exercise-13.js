function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function comparar(a, b) {
    if (a === null || b === null || a === undefined || b === undefined) {
        return "Erro: Valores inválidos!"
    }

    if (a === b) {
        return "igual"
    }

    if (typeof a !== typeof b) {
        return "tipos diferentes"
    }

    if (typeof a === "number" && typeof b === "number") {
        if (a > b) {
            return `${a} é maior que ${b}`
        }

        if (b > a) {
            return `${b} é maior que ${a}`
        }

        return "igual"
    }

    return "iguais (mesmo tipo)"
}