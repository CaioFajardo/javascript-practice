const vendas = [
    {
        produto: "Mouse Gamer",
        preco: 120,
        quantidade: 2
    },
    {
        produto: "Teclado Mecânico",
        preco: 350,
        quantidade: 1
    },
    {
        produto: "Mouse Gamer",
        preco: 120,
        quantidade: 3
    },
    {
        produto: "Headset",
        preco: 180,
        quantidade: 2
    },
    {
        produto: "Teclado Mecânico",
        preco: 350,
        quantidade: 2
    }
]

function calcular(arr) {
    const totalPorVenda = arr.map(p => ({
        produto: p.produto,
        total: p.preco * p.quantidade
    }))

    const produtosAgrupados = totalPorVenda.reduce((acc, p) => {
        if (!acc[p.produto]) {
            acc[p.produto] = []
        }

        acc[p.produto].push(p)

        return acc
    }, {})

    const totalPorProduto = Object.entries(produtosAgrupados).map(([produto, vendas]) => ({

        produto,

        faturamento: vendas.reduce((acc, venda) => acc + venda.total, 0)

    }))

    return {
        totalPorVenda,
        produtosAgrupados,
        totalPorProduto
    }
}

console.dir(calcular(vendas), { depth: null })