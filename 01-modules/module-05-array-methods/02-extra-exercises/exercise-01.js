function sumBy(array, chave) {
    return array.reduce((acc, item) => acc + valor[chave], 0)
}

console.log(sumBy([
    { preco: 100 },
    { preco: 250 },
    { preco: 50 }
], "preco"))