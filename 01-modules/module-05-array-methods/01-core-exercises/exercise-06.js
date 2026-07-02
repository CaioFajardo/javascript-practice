function chunk(valores, tamanho) {
    const grupos = []

    for (let i = 0; i < valores.length; i += tamanho) {
        grupos.push(valores.slice(i, i + tamanho))
    }

    return grupos
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3))