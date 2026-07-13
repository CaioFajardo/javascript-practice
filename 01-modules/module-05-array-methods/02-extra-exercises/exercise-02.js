function pluck(array, chave) {
    return array.map(item => item[chave])
}

console.log(pluck([
    { nome: "João" },
    { nome: "Maria" },
    { nome: "Pedro" }
], "nome"))