function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

printTitulo("NÍVEL 1")

function once(fn) {
    let iniciou = false

    return function () {
        if (!iniciou) {
            iniciou = true
            return fn()
        }
    }
}

const iniciar = once(() => console.log("Iniciado!"))

iniciar()
iniciar()