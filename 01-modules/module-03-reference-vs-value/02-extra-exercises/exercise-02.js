function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function adicionarItem(lista, item) {
    const listaCopia = [ ...lista, item ]

    return listaCopia
}

console.log(adicionarItem([1, 2, 3], 4))