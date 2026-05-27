function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const formatarUsuario = ({ nome, idade }) => {
    return `${nome} tem ${idade} anos`
}

console.log(formatarUsuario({ nome: "caio", idade: 22 }))