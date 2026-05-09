function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const usuarioNivel1 = {
    nome: "Caio"
}

printTitulo("NÍVEL 1")

const copiaNivel1 = Object.assign({}, usuarioNivel1)

const copiaSpreadNivel1 = { ...usuarioNivel1 }

console.log(usuarioNivel1.nome === copiaNivel1.nome)
console.log(usuarioNivel1 === copiaNivel1)

console.log(usuarioNivel1.nome === copiaSpreadNivel1.nome)
console.log(usuarioNivel1 === copiaSpreadNivel1)