const products = [
    { nome: "Bola", preco: "R$ 15,00" },
    { nome: "Chiclets", preco: "R$ 1,50" },
    { nome: "Camisa", preco: "R$ 30,00" },
    { nome: "Tênis", preco: "R$ 40,00" },
    { nome: "Brinquedo", preco: "R$ 20,00" }
]

const [primeiro, , , , ultimo] = products

console.log(primeiro)
console.log(ultimo)