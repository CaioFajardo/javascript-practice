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

printTitulo("NÍVEL 1")

console.log(propNivel1)
console.log(todosNomesNivel1)

// Nível 2

const arrPessoasNivel2 = [
    {
        nome: "Caio",
        idade: 22,
        profissao: "Desenvolvedor",
        cidade: "Cataguases",
        ativo: true
    },

    {
        nome: "Marina",
        idade: 27,
        profissao: "Designer",
        cidade: "Juiz de Fora",
        ativo: false
    },

    {
        nome: "Lucas",
        idade: 31,
        profissao: "Analista de Infraestrutura",
        cidade: "Belo Horizonte",
        ativo: true
    }
]

const pessoaCompletaNivel2 = []

const pessoaPropsNivel2 = []

for (const pessoa of arrPessoasNivel2) {
    pessoaCompletaNivel2.push(pessoa)
    
    for (const [chave, valor] of Object.entries(pessoa)) {
        pessoaPropsNivel2.push(`${chave}: ${valor}`)
    }
}

printTitulo("NÍVEL 2")

console.log(pessoaCompletaNivel2)
console.log(pessoaPropsNivel2)