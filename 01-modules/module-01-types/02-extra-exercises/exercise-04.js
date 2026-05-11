/**
 * Exercício — Conversor de Temperatura
 *
 * Evolução progressiva:
 * Nível 1 → conversão simples
 * Nível 2 → validação de temperatura mínima
 * Nível 3 → suporte a múltiplas escalas
 * Nível 4 → normalização de input
 * Nível 5 → parsing de string (ex: "40C")
 * Nível 6 → linguagem natural (ex: "40 graus celsius")
 * Nível 7 → (próximo passo: refatoração/modularização)
 */

function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// NÍVEL 1
// conversão básica (C → F) + validação simples

function converterTemperaturaNivel1(valor) {
    if (typeof valor === "string") {
        if (valor.trim() === "") {
            return "Erro: Valor inválido!"
        }

        valor = Number(valor)
    }

    if (!Number.isFinite(valor)) {
        return "Erro: Valor inválido!"
    }

    return (valor * 9 / 5) + 32
}

printTitulo("NÍVEL 1")

console.log(converterTemperaturaNivel1(40))
console.log(converterTemperaturaNivel1("40"))

console.log(converterTemperaturaNivel1(true))
console.log(converterTemperaturaNivel1(null))
console.log(converterTemperaturaNivel1(undefined))
console.log(converterTemperaturaNivel1(""))
console.log(converterTemperaturaNivel1("##"))
console.log(converterTemperaturaNivel1([40]))
console.log(converterTemperaturaNivel1({ celcius: 40 }))
console.log(converterTemperaturaNivel1(/40/))
console.log(converterTemperaturaNivel1(new Date()))

// NÍVEL 2
// valida temperatura mínima (zero absoluto)

function converterTemperaturaNivel2(valor) {
    if (typeof valor === "string") {
        if (valor.trim() === "") {
            return "Erro: Valor inválido!"
        }

        valor = Number(valor)
    }

    if (!Number.isFinite(valor)) {
        return "Erro: Valor inválido!"
    }
    
    if (valor < -273.15) {
        return "Erro: Temperatura inválida!"
    }
    
    return (valor * 9 / 5) + 32
}

printTitulo("NÍVEL 2")

console.log(converterTemperaturaNivel2(40))
console.log(converterTemperaturaNivel2("40"))

console.log(converterTemperaturaNivel2(true))
console.log(converterTemperaturaNivel2(null))
console.log(converterTemperaturaNivel2(undefined))
console.log(converterTemperaturaNivel2(""))
console.log(converterTemperaturaNivel2("##"))
console.log(converterTemperaturaNivel2([40]))
console.log(converterTemperaturaNivel2({ celcius: 40 }))
console.log(converterTemperaturaNivel2(/40/))
console.log(converterTemperaturaNivel2(new Date()))

console.log(converterTemperaturaNivel2("-300"))
console.log(converterTemperaturaNivel2(" -273.15 "))

// NÍVEL 3
// suporte a escalas: C, F, K

function converterTemperaturaNivel3(valor, escala) {
    if (escala === "F" || escala === "K" || escala === "C") {

        if (escala === "F") {
            valor = (valor - 32) * 5 / 9
        }

        if (escala === "K") {
            valor = valor - 273.15
        }

        if (valor < -273.15) {
            return "Erro: Temperatura inválida!"
        }

        return (valor * 9 / 5) + 32
    }

    return "Erro: escala inválida!"
}

printTitulo("NÍVEL 3")

console.log(converterTemperaturaNivel3(0, "C"))
console.log(converterTemperaturaNivel3(32, "F"))
console.log(converterTemperaturaNivel3(273.15, "K"))

console.log(converterTemperaturaNivel3(-500, "C"))
console.log(converterTemperaturaNivel3(0, "K"))

// NÍVEL 4
// normalização de escala + validação completa

function converterTemperaturaNivel4(valor, escala) {
    if (typeof valor !== "number" && typeof valor !== "string") {
        return "Erro: Valor inválido!"
    }

    if (typeof valor === "string") {
        if (valor.trim() === "") {
            return "Erro: Valor inválido!"
        }

        valor = Number(valor)
    }

    if (!Number.isFinite(valor)) {
        return "Erro: Valor inválido!"
    }

    if (typeof escala !== "string") {
        return "Erro: Valor inválido!"
    }

    const mapa = {
        c: "C",
        f: "F",
        k: "K"
    }

    escala = mapa[escala.trim().toLowerCase()[0]]

    if (!escala) {
        return "Erro: Escala inválida!"
    }

    if (escala === "F") {
        valor = (valor - 32) * 5 / 9
    }

    if (escala === "K") {
        valor = valor - 273.15
    }

    if (valor < -273.15) {
        return "Erro: Temperatura inválido!"
    }

    return ((valor * 9 / 5) + 32).toFixed(2) + "°F"
}

printTitulo("NÍVEL 4")

console.log(converterTemperaturaNivel4("40", "c"))
console.log(converterTemperaturaNivel4(32, "fahrenheit"))
console.log(converterTemperaturaNivel4(300, "kelvin"))

console.log(converterTemperaturaNivel4("   ", "c"))
console.log(converterTemperaturaNivel4(40, "x"))

// NÍVEL 5
// parsing de string (ex: "40C")

function converterTemperaturaNivel5(valor) {
    if (typeof valor !== "string") {
        return "Erro: Valor inválido!"
    }

    valor = valor.trim()

    if (valor === "") {
        return "Erro: Valor inválido!"
    }

    let numero = parseFloat(valor)

    if (!Number.isFinite(numero)) {
        return "Erro: Valor inválido!"
    }

    let escala = valor.slice(String(numero).length).trim()

    if (!escala) {
        return "Erro: Escala inválida!"
    }

    const mapa = {
        c: "C",
        f: "F",
        k: "K"
    }

    escala = mapa[escala.toLowerCase()]

    if (!escala) {
        return "Erro: Escala inválida!"
    }

    let celsius = numero

    if (escala === "F") {
        celsius = (numero - 32) * 5 / 9
    }

    if (escala === "K") {
        celsius = numero - 273.15
    }

    if (celsius < -273.15) {
        return "Erro: Temperatura inválida!"
    }

    return ((celsius * 9 / 5) + 32).toFixed(2) + "°F"
}

printTitulo("NÍVEL 5")

console.log(converterTemperaturaNivel5("40C"))
console.log(converterTemperaturaNivel5("40 C"))
console.log(converterTemperaturaNivel5("  40c "))

console.log(converterTemperaturaNivel5("40kg"))
console.log(converterTemperaturaNivel5("40kg"))
console.log(converterTemperaturaNivel5(""))

// NÍVEL 6
// linguagem natural + símbolo °

function converterTemperaturaNivel6(valor) {
    if (typeof valor !== "string") {
        return "Erro: Valor inválido!"
    }

    valor = valor.trim()

    if (valor === "") {
        return "Erro: Valor inválido!"
    }

    let numero = parseFloat(valor)

    if (!Number.isFinite(numero)) {
        return "Erro: Valor inválido!"
    }

    let escala = valor.slice(String(numero).length).trim()

    if (escala[0] === "°") {
        escala = escala.slice(1)
    }

    escala = escala.toLowerCase()

    const mapaPalavra = {
        celsius: "C",
        fahrenheit: "F",
        kelvin: "K"
    }

    for (let chave in mapaPalavra) {
        if (escala.includes(chave)) {
            escala = mapaPalavra[chave]
            break
        }
    }

    if (escala.length !== 1) {
        return "Erro: Escala inválida!"
    }

    const mapa = {
        c: "C",
        f: "F",
        k: "K"
    }

    escala = mapa[escala.toLowerCase()]

    if (!escala) {
        return "Erro: Escala inválida!"
    }

    let celsius = numero

    if (escala === "F") {
        celsius = (numero - 32) * 5 / 9
    }

    if (escala === "K") {
        celsius = numero - 273.15
    }

    if (celsius < -273.15) {
        return "Erro: Temperatura inválido!"
    }

    return ((celsius * 9 / 5) + 32).toFixed(2) + "°F"
}

printTitulo("NÍVEL 6")

console.log(converterTemperaturaNivel6("40°C"))
console.log(converterTemperaturaNivel6("273.15K"))
console.log(converterTemperaturaNivel6("32°F"))

console.log(converterTemperaturaNivel6("40 graus celsius"))

// NÍVEL 7
// modularização: separação de responsabilidades

function converterTemperaturaNivel6(valor) {
    if (typeof valor !== "string") {
        return "Erro: Valor inválido!"
    }

    valor = valor.trim()

    if (valor === "") {
        return "Erro: Valor inválido!"
    }

    let numero = parseFloat(valor)

    if (!Number.isFinite(numero)) {
        return "Erro: Valor inválido!"
    }

    let escala = valor.slice(String(numero).length).trim()

    if (escala[0] === "°") {
        escala = escala.slice(1)
    }

    escala = escala.toLowerCase()

    const mapaPalavra = {
        celsius: "C",
        fahrenheit: "F",
        kelvin: "K"
    }

    for (let chave in mapaPalavra) {
        if (escala.includes(chave)) {
            escala = mapaPalavra[chave]
            break
        }
    }

    if (escala.length !== 1) {
        return "Erro: Escala inválida!"
    }

    const mapa = {
        c: "C",
        f: "F",
        k: "K"
    }

    escala = mapa[escala.toLowerCase()]

    if (!escala) {
        return "Erro: Escala inválida!"
    }

    let celsius = numero

    if (escala === "F") {
        celsius = (numero - 32) * 5 / 9
    }

    if (escala === "K") {
        celsius = numero - 273.15
    }

    if (celsius < -273.15) {
        return "Erro: Temperatura inválido!"
    }

    return ((celsius * 9 / 5) + 32).toFixed(2) + "°F"
}

printTitulo("NÍVEL 7")

console.log(converterTemperaturaNivel6("40°C"))
console.log(converterTemperaturaNivel6("273.15K"))
console.log(converterTemperaturaNivel6("32°F"))

console.log(converterTemperaturaNivel6("40 graus celsius"))