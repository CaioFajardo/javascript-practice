function contaBancaria(valorInicial = 0) {
    let saldo = valorInicial

    function depositar(valor) {
        if (valor <= 0) {
            return "O valor do deposito deve ser maior que 0!"
        }

        saldo += valor

        return `Deposito no valor de ${valor} realizado.`
    }

    function sacar(valor) {
        if (valor <= 0) {
            return "O valor do saque deve ser maior que 0!"
        }
        
        if (valor > saldo) {
            return "Saldo insuficiente!"
        }

        saldo -= valor

        return `Saque no valor de ${valor} realizado.`
    }

    function verSaldo() {
        return saldo
    }

    return {
        depositar,
        sacar,
        verSaldo
    }
}

const conta = contaBancaria(100)

console.log(conta.depositar(50))
console.log(conta.sacar(20))
console.log(conta.verSaldo())