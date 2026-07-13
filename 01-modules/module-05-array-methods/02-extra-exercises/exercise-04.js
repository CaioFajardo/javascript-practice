const alunos = [
    {
        nome: "Caio",
        notas: [9, 8, 10, 7]
    },
    {
        nome: "João",
        notas: [5, 6, 4, 5]
    },
    {
        nome: "Maria",
        notas: [10, 9, 8, 10]
    },
    {
        nome: "Pedro",
        notas: [7, 7, 7, 7]
    },
    {
        nome: "Ana",
        notas: [6, 7, 8, 6]
    },
    {
        nome: "Lucas",
        notas: [3, 5, 4, 6]
    },
    {
        nome: "Beatriz",
        notas: [8, 9, 7, 8]
    }
]

function media(array) {
    return array
        .map(aluno => ({
            nome: aluno.nome,
            media: aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length
        }))
        .filter(aluno => aluno.media >= 7)
        .sort((a, b) => b.media - a.media)
}

console.log(media(alunos))