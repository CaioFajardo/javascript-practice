function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const produtosNível1 = [
    { nome: "produto 1", preco: 10},
    { nome: "produto 2", preco: 20},
    { nome: "produto 3", preco: 30},
    { nome: "produto 4", preco: 40},
    { nome: "produto 5", preco: 50}
]

const [primeiroNível1, , , , ultimoNível1] = produtosNível1

printTitulo("NÍVEL 1")

console.log(primeiroNível1)
console.log(ultimoNível1)

// Nível 2

const produtosNível2 = [
    { nome: "produto 1", preco: 10},
    { nome: "produto 2", preco: 20},
    { nome: "produto 3", preco: 30},
    { nome: "produto 4", preco: 40},
    { nome: "produto 5", preco: 50}
]

const [primeiroNível2, , , , ultimoNível2] = produtosNível2

const {nome: nomePrimeiroNível2} = primeiroNível2
const {preco: precoUltimoNível2} = ultimoNível2

printTitulo("NÍVEL 2")

console.log(primeiroNível2)
console.log(ultimoNível2)
console.log(nomePrimeiroNível2)
console.log(precoUltimoNível2)

// Nível 3

const produtosNível3 = [
    { nome: "produto 1", preco: 10},
    { nome: "produto 2", preco: 20},
    { nome: "produto 3", preco: 30},
    { nome: "produto 4", preco: 40},
    { nome: "produto 5", preco: 50}
]

const [
    {nome: nomePrimeiroNível3},
    ,
    ,
    ,
    {preco: precoUltimoNível3}
] = produtosNível3

printTitulo("NÍVEL 3")

console.log(nomePrimeiroNível3)
console.log(precoUltimoNível3)

// Nível 4

const produtosNível4 = [
    { nome: undefined, preco: 10},
    { nome: "produto 2", preco: 20},
    { nome: "produto 3", preco: 30},
    { nome: "produto 4", preco: 40},
    { nome: "produto 5", preco: undefined}
]

const [
    { nome: nomePrimeiroNível4 },
    ...resto
] = produtosNível4

const nomeFinalNível4 = nomePrimeiroNível4 ?? "Sem nome"

const { preco: precoUltimoNível4 } = resto[resto.length - 1]

const precoFinalNível4 = precoUltimoNível4 ?? 0

printTitulo("NÍVEL 4")

console.log(nomeFinalNível4)
console.log(precoFinalNível4)