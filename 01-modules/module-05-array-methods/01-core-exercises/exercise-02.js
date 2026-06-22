const produtos = [
    {
        nome: "Mouse Gamer",
        preco: 120,
        emEstoque: true
    },
    {
        nome: "Teclado Mecânico",
        preco: 350,
        emEstoque: false
    },
    {
        nome: "Monitor 24 Polegadas",
        preco: 900,
        emEstoque: true
    },
    {
        nome: "Headset",
        preco: 180,
        emEstoque: true
    },
    {
        nome: "Webcam",
        preco: 250,
        emEstoque: false
    },
    {
        nome: "Mousepad",
        preco: 50,
        emEstoque: true
    },
    {
        nome: "Notebook",
        preco: 3200,
        emEstoque: true
    }
];

function ordenacao(arr) {
    const prods = arr

    const resultado = prods
        .filter(p => p.emEstoque === true)
        .sort((a, b) => a.preco - b.preco)
        .map(p => p.nome)

    return resultado
}

console.log(ordenacao(produtos))