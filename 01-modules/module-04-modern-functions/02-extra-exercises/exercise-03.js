function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function retry(fn) {

    for (let i = 0; i < 3; i++) {

        try {
            return fn()
        }

        catch {
            console.log(`Tentativa ${i + 1} falhou`)
        }

    }

    return "Falhou"
}

const resultado = retry(() => {

    if (Math.random() > 0.5) {
        return "OK"
    }

    throw new Error("Erro")
})

printTitulo("NÍVEL 1")

console.log(resultado)