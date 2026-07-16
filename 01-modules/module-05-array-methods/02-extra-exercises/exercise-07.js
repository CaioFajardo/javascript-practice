const vendas = [
    {
        categoria: "Eletrônicos",
        produto: "Notebook",
        preco: 3500,
        quantidade: 2
    },
    {
        categoria: "Periféricos",
        produto: "Mouse",
        preco: 120,
        quantidade: 5
    },
    {
        categoria: "Eletrônicos",
        produto: "Monitor",
        preco: 900,
        quantidade: 3
    },
    {
        categoria: "Periféricos",
        produto: "Teclado",
        preco: 250,
        quantidade: 4
    },
    {
        categoria: "Eletrônicos",
        produto: "Notebook",
        preco: 3500,
        quantidade: 1
    },
    {
        categoria: "Áudio",
        produto: "Headset",
        preco: 400,
        quantidade: 6
    },
    {
        categoria: "Áudio",
        produto: "Microfone",
        preco: 800,
        quantidade: 2
    },
    {
        categoria: "Periféricos",
        produto: "Mouse",
        preco: 120,
        quantidade: 3
    }
]

function relatorio(array) {
    const faturamentoVenda = array.map(item => ({
        ...item,
        faturamento: item.preco * item.quantidade
    }))

    const porCategoria = faturamentoVenda.reduce((acc, item) => {
        const categoria = item.categoria

        if (!acc[categoria]) {
            acc[categoria] = []
        }

        acc[categoria].push(item)

        return acc
    }, {})

    const faturamentoCategoria = Object.entries(porCategoria).map(([categoria, itens]) => {
        const faturamento = itens.reduce((acc, item) => acc + item.faturamento, 0)

        return {
            categoria,
            faturamento
        }
    })

    const quantidadeVendas = array.reduce((acc, item) => {
        const produto = item.produto

        if (!acc[produto]) {
            acc[produto] = 0
        }

        acc[produto] += item.quantidade

        return acc
    }, {})

    const maisVendido = Object.entries(quantidadeVendas).reduce((acc, [produto, quantidade]) => {
        if (quantidade > acc[1]) {
            return [produto, quantidade]
        }

        return acc
    }, ["", 0])

    const [produtoMaisVendido] = maisVendido

    const categoriasOrdenadas = faturamentoCategoria.toSorted((a, b) => b.faturamento - a.faturamento)

    const faturamentoTotal = faturamentoCategoria.reduce((acc, categoria) => acc + categoria.faturamento, 0)

    return {
        categorias: categoriasOrdenadas,
        faturamentoTotal,
        produtoMaisVendido
    }
}

console.log(relatorio(vendas))