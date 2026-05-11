const user = { nome: 'João', idade: 30, cidade: 'SP' }

resultado = []

for (const [chave, valor] of Object.entries(user)) {
    resultado.push(`${chave}: ${valor}`)
}

console.log(resultado)