function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

printTitulo("NÍVEL 1")

function debounce(fn, delay) {
    let timeout
    
    return function(...args) {
        clearTimeout(timeout)

        timeout = setTimeout(() => fn(...args), delay)
    }
}

const buscar = debounce(console.log, 500)

buscar("a")
buscar("ab")
buscar("abc")