function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const arrPessoasNivel1 = [
    {
        nome: "Caio",
        idade: 22
    },

    {
        nome: "Juliana",
        idade: 42
    },

    {
        nome: "Gustavo",
        idade: 18
    }
]

const propNivel1 = arrPessoasNivel1[2].idade

const todosNomesNivel1 = []

for (const pessoa of arrPessoasNivel1) {
    todosNomesNivel1.push(pessoa.nome)
}

console.log(propNivel1)
console.log(todosNomesNivel1)