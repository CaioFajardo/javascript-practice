// Exercício 02 - Soma com conversão de tipos
// Recebe dois valores e retorna a soma, garantindo que sejam números
 

function somar(a, b) {
    const numA = Number(a)
    const numB = Number(b)

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        return "Erro: Valores inválidos!"
    }

    return numA + numB

}

console.log(somar(2, 3))
console.log(somar("2", "3"))
console.log(somar("#", 3))