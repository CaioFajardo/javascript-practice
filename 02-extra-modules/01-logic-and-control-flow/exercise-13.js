function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const pessoas = [
    {
        nome: "João",
        idade: 12
    },

    {
        nome: "Alice",
        idade: 15
    },

    {
        nome: "Daniel",
        idade: 43
    }
]

printTitulo("NÍVEL 1")

for (const pessoa of pessoas) {
    if (pessoa.idade < 18) {
        console.log("Menor de idade!")
    } else {
        console.log("Maior de idade!")
    }
}