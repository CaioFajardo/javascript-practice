// Exercício 05 - Validação de tipos no array
// Recebe um array e verifica se todos os elementos são do mesmo tipo

function getTipo(valor) {
    if (valor === null) {
        return "null"
    }

    if (Array.isArray(valor)) {
        return "array"
    }

    if (valor instanceof Date) {
        return "date"
    }

    if (Number.isNaN(valor)) {
        return "nan"
    }

    return typeof valor
}

function validaTipo(array) {

    if (!Array.isArray(array)) {
        return "Erro: Valor inválido!"
    }

    if (array.length === 0) {
        return true
    }

    const posZero = getTipo(array[0])

    for (let i = 1; i < array.length; i++) {
        if (getTipo(array[i]) !== posZero) {
            return false
        }
    }

    return true
}

console.log(validaTipo([1, 2, 3]))
console.log(validaTipo([1 , "2", 3]))
console.log(validaTipo(1))
console.log(validaTipo([]))

console.log(validaTipo([null, null]))     // true
console.log(validaTipo([[], []]))      // true
console.log(validaTipo([{}, {}]))         // true

console.log(validaTipo([null, []]))       // ❌ true (errado)
console.log(validaTipo([{}, []]))         // ❌ true (errado)

console.log(validaTipo([new Date(), new Date()]))
console.log(validaTipo([NaN, NaN]))

console.log(validaTipo([NaN, new Date()]))
console.log(validaTipo([new Date(), NaN]))