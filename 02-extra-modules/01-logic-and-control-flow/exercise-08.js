function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

for (let i = 0; i < 10; i++) {
    if (i === 4) {
        continue
    }

    if (i === 7) {
        break
    }
    
    console.log(i)
}