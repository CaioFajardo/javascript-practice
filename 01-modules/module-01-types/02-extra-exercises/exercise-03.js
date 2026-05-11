/**
 * Exercício 03 - Validação de CPF
 * sanitizar entrada e validar formato básico (11 dígitos)
 */ 

function printTitulo(titulo) {
   console.log("\n==============================")
   console.log(titulo)
   console.log("==============================")
}

// NÍVEL 1
// transformar em string e garantir 11 dígitos

function validarCPF(cpf) {
   cpf = String(cpf)
   cpf = cpf.replace(/\D/g, "")

   if (cpf.length !== 11) {
      return false
   }

   return true
}

printTitulo("NÍVEL 1")

console.log(validarCPF("123.456.789-10"))
console.log(validarCPF("12345678910"))
console.log(validarCPF(12345678910))

console.log(validarCPF("123"))
console.log(validarCPF("1234567891011"))

console.log(validarCPF(null))
console.log(validarCPF(undefined))
console.log(validarCPF(""))
console.log(validarCPF("###########"))
console.log(validarCPF([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))
console.log(validarCPF({cpf: "12345678910"}))
console.log(validarCPF(/abc/))
console.log(validarCPF(new Date()))