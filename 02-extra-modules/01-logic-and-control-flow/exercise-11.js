function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function validarNivel1(valor) {

    if (
        typeof valor === "string" ||
        Array.isArray(valor)
    ) {
        console.log("Valor válido")
    } else {
        console.log("Valor inválido")
    }
}

validarNivel1("teste")
validarNivel1([1, 2, 3])
validarNivel1(10)