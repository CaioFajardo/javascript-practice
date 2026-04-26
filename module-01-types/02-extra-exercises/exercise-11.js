function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function validarLista(lista) {
    if (!Array.isArray(lista)) {
        return "Erro: Valor inválido!"
    }

    if (lista.length === 0) {
        return "Erro: Lista vazia!"
    }

    for (let i = 0; i < lista.length; i++) {
        if (typeof lista[i] !== "number" || !Number.isFinite(lista[i])) {
            return "Erro: Valor inválido!"
        }
    }

    return lista
}

console.log(validarLista([1, 2, 3]))
console.log(validarLista([]))
console.log(validarLista(12))