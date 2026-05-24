function contaBancaria(valorInicial = 0) {
    let saldo = valorInicial

    function depositar(valor) {
        if (valor <= 0) {
            return "O depósito precisa ser maior que zero"
        }

        saldo += valor;

        return `Deposito de R$ ${valor} realizado`
    }

    function sacar(valor) {
        if (valor <= 0) {
            return "O saque precisa ser maior que zero"
        }

        if (valor > saldo) {
            return "Saldo insuficiente"
        }
        
        saldo -= valor;

        return `Saque no valor de: R$ ${valor} realizado`
    }

    function verSaldo() {
        return `Saldo atual: R$ ${saldo}`
    }

    return {
        depositar,
        sacar,
        verSaldo
    }
}

const conta = contaBancaria(1000)

console.log(conta.verSaldo())

console.log(conta.depositar(500))
console.log(conta.verSaldo())

console.log(conta.sacar(300))
console.log(conta.verSaldo())

console.log(conta.sacar(5000))
console.log(conta.depositar(-50))