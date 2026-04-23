function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function ehVerdadeiroNivel1(valor) {
    return {
        valor, 
        resultado: Boolean(valor),
        tipo: typeof valor
    }
}

printTitulo("NÍVEL 1")

console.log(ehVerdadeiroNivel1(0))
console.log(ehVerdadeiroNivel1(""))
console.log(ehVerdadeiroNivel1("0"))
console.log(ehVerdadeiroNivel1([]))
console.log(ehVerdadeiroNivel1({}))
console.log(ehVerdadeiroNivel1(null))
console.log(ehVerdadeiroNivel1(undefined))
console.log(ehVerdadeiroNivel1(NaN))

// Nível 2

function validarEntradaNivel2(valor) {
    if (valor === null || valor === undefined || Number.isNaN(valor)) {
        return "Erro: Valor inválido!"
    }

    if (typeof valor === "string" && valor.trim() === "") {
        return "Erro: Valor inválido"
    }

    return "Valor válido!"
}

printTitulo("NÍVEL 2")

console.log(validarEntradaNivel2(null))
console.log(validarEntradaNivel2(undefined))
console.log(validarEntradaNivel2(""))
console.log(validarEntradaNivel2(NaN))

console.log(validarEntradaNivel2(0))
console.log(validarEntradaNivel2("0"))
console.log(validarEntradaNivel2([]))
console.log(validarEntradaNivel2({}))

// Nível 3

function validarEntradaNivel3(valor) {
    if (valor === null) {
        return "Erro: Valor inválido!"
    }

    if (valor === undefined) {
        return "Erro: Valor inválido!"
    }

    if (Number.isNaN(valor)) {
        return "Erro: Valor inválido!"
    }

    if (typeof valor === "string" && valor.trim() === "") {
        return "Erro: Valor inválido"
    }

    if (typeof valor !== "number") {
    return "Erro: Valor inválido!"
}

    return "Valor válido!"
}

printTitulo("NÍVEL 3")

console.log(validarEntradaNivel3(0))
console.log(validarEntradaNivel3(10))
console.log(validarEntradaNivel3(-15))


console.log(validarEntradaNivel3(null))
console.log(validarEntradaNivel3(undefined))
console.log(validarEntradaNivel3(""))
console.log(validarEntradaNivel3(NaN))
console.log(validarEntradaNivel3("10"))