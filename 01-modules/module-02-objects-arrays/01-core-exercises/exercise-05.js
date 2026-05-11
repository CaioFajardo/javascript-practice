function contarElementos(array) {
    const contador = {}

    for (const item of array) {
        if (contador[item]) {
            contador[item]++
        } else {
            contador[item] = 1
        }
    }

    return contador
}

console.log(contarElementos(['a', 'b', 'a', 'c', 'b', 'a']))