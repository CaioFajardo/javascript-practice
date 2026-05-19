function aplicar(numero, fn) {
    let resultado = numero

    for (let i = 0; i < 3; i++) {
        resultado = fn(resultado)
    }

    return resultado
}

console.log(aplicar(2, n => n * 2))