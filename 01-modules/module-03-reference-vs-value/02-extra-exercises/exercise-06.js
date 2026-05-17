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

function deepClone(objeto) {
    const usuarioCopia = { ...objeto }

    for (const itens in usuarioCopia) {
        if (typeof usuarioCopia[itens] === "object") {
            usuarioCopia[itens] = deepClone(usuarioCopia[itens])
        }
    }

    return usuarioCopia
}

const novoUsuario = deepClone(usuario)

novoUsuario.endereco.cidade = "Cataguases"

printTitulo("NÍVEL 1")

console.log(usuario)
console.log(novoUsuario)