function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

printTitulo("NÍVEL 1")

const pipe = (...fns) => (valor) => fns.reduce((acc, fn) => fn(acc), valor) 

const processar = pipe(
    x => x + 10,
    x => x * 2,
    x => x - 5
)

console.log(processar(5))