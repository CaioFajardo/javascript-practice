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

function congelarProfundo(objeto) {
    Object.freeze(objeto)

    for (const item in objeto) {
        if (typeof objeto[item] === "object") {
            congelarProfundo(objeto[item])
        }
    }

    return objeto
}

const usuarioCongelado = congelarProfundo(usuario)

usuarioCongelado.endereco.cidade = "Cataguases"

printTitulo("NÍVEL 1")

console.log(usuarioCongelado)