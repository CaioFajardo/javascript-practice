// Exercício 04 - Conversão de temperatura
// Recebe um valor em Celsius e retorna em Fahrenheit

function celciusToFahrenheit(valor) {
    if (typeof valor !== "number" || Number.isNaN(valor)) {
        return "Erro: Valor inválido!"
    }

    const fahrenheit = (valor * 9/5) + 32

    return fahrenheit
}

console.log(celciusToFahrenheit(40))
console.log(celciusToFahrenheit("40"))
console.log(celciusToFahrenheit(null))
console.log(celciusToFahrenheit(undefined))
console.log(celciusToFahrenheit(true)) 
console.log(celciusToFahrenheit(NaN))
console.log(celciusToFahrenheit([1, 2, 3]))
console.log(celciusToFahrenheit({nome: "caio"}))
console.log(celciusToFahrenheit(() => {}))