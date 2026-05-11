function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const valor = 5

printTitulo("NÍVEL 1")

switch (valor) {
    case 1:
        console.log("Domingo")
        break

    case 2:
        console.log("Segunda-feira")
        break

    case 3:
        console.log("Terça-feira")
        break

    case 4:
        console.log("Quarta-feira")
        break

    case 5:
        console.log("Quinta-feira")
        break

    case 6:
        console.log("Sexta-feira")
        break

    case 7:
        console.log("Sábado")
        break

    default:
        console.log("Valor inválido!")
}