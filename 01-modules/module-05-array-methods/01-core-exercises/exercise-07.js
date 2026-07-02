const palavras = ["Cachorro", "Bola", "Sorvete", "Chapeu", "Carro"]

function palavraTamanho(palavras) {
    const maiorPalavra = palavras.reduce((acc, palavra) => {
        if (palavra.length > acc.length) {
            acc = palavra
        }

        return acc
    }, "")

    const menorPalavra = palavras.reduce((acc, palavra) => {
        if (palavra.length < acc.length) {
            acc = palavra
        }

        return acc
    }, maiorPalavra)

    const mediaPalavra = palavras.reduce((acc, palavra) => acc + palavra.length, 0) / palavras.length

    return {
        maiorPalavra,
        menorPalavra,
        mediaPalavra
    }
}

console.log(palavraTamanho(palavras))