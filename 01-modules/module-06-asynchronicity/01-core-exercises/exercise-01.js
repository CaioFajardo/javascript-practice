async function buscaId(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        if (!response.ok) {
            throw new Error(`Usuário não encontrado: HTTP ${response.status}`)
        }

        return await response.json()
    } catch (erro) {
        console.error("Erro ao buscar usuário:", erro.message)
        throw erro
    }
}

async function executar() {
    try {
        const user = await buscaId(11)

        console.log(user)
    } catch {

    }
}

executar()