function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

printTitulo("NÍVEL 1")

function retryNivel1(fn) {

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

const resultadoNivel1 = retryNivel1(() => {

    if (Math.random() > 0.5) {
        return "OK"
    }

    throw new Error("Erro")
})

console.log(resultadoNivel1)

// Nível 2

function retryNivel2(fn, tentativas) {

    for (let i = 0; i < tentativas; i++) {

        try {
            return {
                resultado: fn(),
                tentativa: i + 1
            }
        }

        catch {
            console.log(`Tentativa ${i + 1} falhou`)
        }

    }

    return "Falhou"
}

const resultadoNivel2 = retryNivel2(() => {

    if (Math.random() > 0.5) {
        return "OK"
    }

    throw new Error("Erro")
}, 5)

console.log(resultadoNivel2)