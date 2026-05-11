function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const trueOrFalse = [
    0,
    1,
    "",
    "texto",
    [],
    {},
    null,
    undefined,
    NaN,
    false,
    true
]

printTitulo("NÍVEL 1")

for (const valor of trueOrFalse) {
    if (valor) {
        console.log("truthy")
    } else {
        console.log("falsy")
    }
}