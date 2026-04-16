// Exercício 03 - Validação básica de CPF
// Remove caracteres não numéricos e verifica se possui 11 dígitos

function validaCPF(cpf) {
    cpf = String(cpf)

    cpf = cpf.replace(/\D/g, "")

    if (cpf.length !== 11) {
        return "Erro: CPF inválido!"
    }

    return "CPF validado com sucesso!"
}

console.log(validaCPF("123.456.789-10"))
console.log(validaCPF("12345678910"))
console.log(validaCPF(12345678910))
console.log(validaCPF("123"))
console.log(validaCPF("123.456.789-1011"))
console.log(validaCPF("!@#$%¨&*()-"))