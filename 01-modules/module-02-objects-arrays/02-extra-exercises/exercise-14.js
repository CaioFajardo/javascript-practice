function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const pessoa = {
    nome: "Caio",
    idade: 22,

    descricao() {
        return `${this.nome} tem ${this.idade} anos`
    }
}

console.log(pessoa.descricao())