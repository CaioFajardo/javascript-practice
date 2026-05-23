function retry(fn, tentativas = 3) {
    for (let i = 1; i <= tentativas; i++) {
        try {
            return fn()
        } catch (erro) {
            console.log(`Tentativa ${i} falhou`)

            if (i === tentativas) {
                throw new Error("Todas as tentativas falharam")
            }
        }
    }
}

const resultado = retry(() => {
    if (Math.random() > 0.5) {
        return "OK"
    }

    throw new Error("Erro aleatório")
})

console.log(resultado)