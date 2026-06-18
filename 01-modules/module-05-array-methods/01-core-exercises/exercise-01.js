const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function chaining(array) {
    const resultado = array
        .filter(n => n % 2 === 0)
        .map(n => n * 3)
        .reduce((acc, n) => acc + n, 0)

    return resultado
}

console.log(chaining(numeros))