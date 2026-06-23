function groupby(arr, chave) {
    return arr.reduce((acc, item) => {
        const valor = item[chave]

        if (!acc[valor]) {
            acc[valor] = []
        }

        acc[valor].push(item)

        return acc
    }, {})
}

console.log(groupby([{tipo: 'A', val: 1}, {tipo: 'B', val: 2}, {tipo: 'A', val: 3}], 'tipo'))