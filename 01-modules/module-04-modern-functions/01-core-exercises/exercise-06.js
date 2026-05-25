function once(fn) {
    let executou = false

    return function(...args) {
        if (!executou) {
            executou = true
            return fn(...args)
        }
    }
}

const iniciar = once(() => console.log("Iniciado!"))

iniciar()
iniciar()
iniciar()