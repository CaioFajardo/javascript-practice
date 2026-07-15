const jogadores = [
    { nome: "Caio", pontos: 60, vitorias: 9 },
    { nome: "Gustavo", pontos: 60, vitorias: 7 },
    { nome: "Ana", pontos: 60, vitorias: 9 },
    { nome: "Onofre", pontos: 50, vitorias: 7 },
    { nome: "Bruno", pontos: 50, vitorias: 7 }
]

function ranking(array) {
    return array.sort((a, b) => {
        if (b.pontos - a.pontos !== 0) {
            return b.pontos - a.pontos
        }

        if (b.vitorias - a.vitorias !== 0) {
            return b.vitorias - a.vitorias
        }

        return a.nome.localeCompare(b.nome)
    })
}

console.log(ranking(jogadores))