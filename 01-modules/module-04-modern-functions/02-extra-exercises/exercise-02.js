function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function aplicar(numero, funcao) {
    return function(n1) {
        let total = n1
        for (let i = 0; i < numero; i++) {
            total = funcao(total)
        }

        return total
    }
}

const aplicaTresX = aplicar(3, n => n * 2)

printTitulo("NÍVEL 1")

console.log(aplicaTresX(10))