function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

printTitulo("NÍVEL 1")

const pipe = (...fns) => {
    return function(valor) {
        return fns.reduce((acc, fn) => fn(acc), valor)
    }
}

const adicionar10 = n => n + 10
const multiplicarPor2 = n => n * 2
const subtrair5 = n => n - 5 

const transformar = pipe(
    adicionar10,
    multiplicarPor2,
    subtrair5
)

console.log(transformar(5))