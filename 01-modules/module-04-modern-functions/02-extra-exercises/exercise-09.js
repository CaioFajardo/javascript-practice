function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

printTitulo("NÍVEL 1")

function memoize(fn) {
    const cache = {}

    return function(...args) {
        const key = JSON.stringify(args)
        if (key in cache) {
            console.log(`Retornando do cache para: ${key}`)
            return cache[key]
        }
        console.log(`Calculando para: ${key}`)
        const resultado = fn(...args)
        cache[key] = resultado
        return resultado
    }
}

const fib = memoize(n => {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
})

console.log(fib(5))
console.log(fib(5))