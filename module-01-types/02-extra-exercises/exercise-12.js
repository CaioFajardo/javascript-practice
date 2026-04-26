function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function somarNumeros(lista) {
    if (!Array.isArray(lista)) {
        return { data: null, error: "Valor inválido!" }
    }

    if (lista.length === 0) {
        return { data: null, error: "Lista vazia!" }
    }

    let soma = 0

    for (let i = 0; i < lista.length; i++) {
        let valor = lista[i]

        if (typeof valor === "string") {
            valor = Number(valor)
        }

        if (!Number.isFinite(valor)) {
            continue
        }

        soma += valor
    }

    return { data: soma, error: null }
}

console.log(somarNumeros([10, "20", "abc", 30]))