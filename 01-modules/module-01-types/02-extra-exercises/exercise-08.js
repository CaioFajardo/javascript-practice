function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function limparNumeroNivel1(valor) {
    valor = valor.replace("R$", "")
    valor = valor.replace(" ", "")
    valor = valor.split(".").join("")
    valor = valor.replace(",", ".")

    return Number(valor)
}

printTitulo("Nível 1")

console.log(limparNumeroNivel1("R$ 1.234,56"))

// Nível 2

function limparNumeroNivel2(valor) {
    if (valor.includes("USD")) {
        valor = valor.replace(" ", "")
        valor = valor.split(",").join("")
        valor = valor.replace("USD", "")

        return Number(valor)
    }

    valor = valor.replace(" ", "")
    valor = valor.split(".").join("")
    valor = valor.replace(",", ".")

    valor = valor.replace("R$", "")
    valor = valor.replace("€", "")

    return Number(valor)
}

printTitulo("Nível 2")

console.log(limparNumeroNivel2("R$ 1.234,56"))
console.log(limparNumeroNivel2("USD 1,234.56"))
console.log(limparNumeroNivel2("€ 3.000,00"))
console.log(limparNumeroNivel2("1000"))

// Nível 3 (Em progresso...)

function limparNumeroNivel3(valor) {
    valor = valor.replace("R$", "")
    valor = valor.replace("USD", "")
    valor = valor.replace("€", "")
    valor = valor.replace(" ", "")

    if (!valor.includes(",") || !valor.includes(".")) {
        return Number(valor)
    }

    const ultimaVirgula = valor.lastIndexOf(",")
    const ultimoPonto = valor.lastIndexOf(".")

    if (ultimaVirgula) {
        valor = valor.replace(",", "")
        valor = valor.split(".").join("")
    }

    if (ultimoPonto) {
        valor = valor.replace(".", "")
        valor = valor.split(",").join(".")
    }

    return Number(valor)
}

printTitulo("Nível 3")

console.log(limparNumeroNivel3("R$ 1.234,56"))
console.log(limparNumeroNivel3("USD 1,234.56"))
console.log(limparNumeroNivel3("€ 3.000,00"))
console.log(limparNumeroNivel3("1000"))