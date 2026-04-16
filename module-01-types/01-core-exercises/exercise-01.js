// Exercício 01 - Tipo real do valor
// Retorna o tipo exato, tratando casos especiais como null, array e NaN

function tipoReal(valor) {
    if (valor === null) {
        return "null"
    }

    if (Array.isArray(valor)) {
        return "array"
    }

    if (Number.isNaN(valor)) {
        return "nan"
    }
    
    return typeof valor
}

console.log(tipoReal("Caio"))
console.log(tipoReal(10))
console.log(tipoReal(true))
console.log(tipoReal(null))
console.log(tipoReal([1, 2, 3]))
console.log(tipoReal(undefined))
console.log(tipoReal(NaN))