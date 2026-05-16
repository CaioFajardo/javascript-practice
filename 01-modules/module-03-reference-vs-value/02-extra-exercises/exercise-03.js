function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const usuario = {
    id: 1,
    nome: "João",
    idade: 25,

    endereco: {
        cidade: "São Paulo",
        estado: "SP",
        coordenadas: {
            latitude: -23.55052,
            longitude: -46.633308
        }
    },

    hobbies: [
        "programar",
        "jogar",
        "ler"
    ],

    configuracoes: {
        tema: "escuro",
        notificacoes: true
    },

    pedidos: [
        {
            id: 101,
            produto: "Notebook",
            preco: 3500
        },
        {
            id: 102,
            produto: "Mouse",
            preco: 150
        }
    ]
}

function copiarUsuario(usuario) {
    const copiaUsuario = structuredClone(usuario)

    return copiaUsuario
}

const novoUsuario = copiarUsuario(usuario)

novoUsuario.endereco.cidade = "Cataguases"

novoUsuario.hobbies.push("academia")

printTitulo("NÍVEL 1")

console.log(usuario)

console.log("---")

console.log(novoUsuario)