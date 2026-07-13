function countBy(array, chave) {
    return array.reduce((acc, item) => {
        const valor = item[chave]

        if (!acc[valor]) {
            acc[valor] = 0 
        }

        acc[valor] += 1

        return acc
    }, {})
}

console.log(countBy([
    { cidade: "SP" },
    { cidade: "RJ" },
    { cidade: "SP" },
    { cidade: "MG" },
    { cidade: "SP" }
], "cidade"))