function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

function contElementosNivel1(valor) {
    const objetoNivel1 = {}

    for (let i = 0; i < valor.length; i++) {
        if (objetoNivel1[valor[i]]) {
            objetoNivel1[valor[i]]++
        } else {
            objetoNivel1[valor[i]] = 1
        }

        
    }

    return objetoNivel1
}

printTitulo("NÍVEL 1")

console.log(contElementosNivel1(['a', 'b', 'a', 'c', 'b', 'a']))

// Nível 2

function contElementosNivel2(valor) {
    if (!Array.isArray(valor)) {
        return { data: null, erro: "Valor inválido" }
    }

    if (valor.length === 0) {
        return { data: null, erro: "Valor inválido" }
    }

    const objetoNivel2 = {}

    for (let i = 0; i < valor.length; i++) {
        if (objetoNivel2[valor[i]]) {
            objetoNivel2[valor[i]]++
        } else {
            objetoNivel2[valor[i]] = 1
        }

        
    }

    return { data: objetoNivel2, erro: null }
}

printTitulo("NÍVEL 2")

console.log(contElementosNivel2([]))
console.log(contElementosNivel2(null))
console.log(contElementosNivel2("abc"))

// Nível 3

function contElementosNivel3(valor) {
    if (!Array.isArray(valor)) {
        return { data: null, erro: "Valor inválido" }
    }

    if (valor.length === 0) {
        return { data: null, erro: "Valor inválido" }
    }

    const objetoNivel3 = {}

    for (let i = 0; i < valor.length; i++) {
        const chave = `${typeof valor[i]}:${valor[i]}`

        if (objetoNivel3[chave]) {
            objetoNivel3[chave]++
        } else {
            objetoNivel3[chave] = 1
        }
    }

    return { data: objetoNivel3, erro: null }
}

printTitulo("NÍVEL 3")

console.log(contElementosNivel3([1, 1, "1", true, true, null]))