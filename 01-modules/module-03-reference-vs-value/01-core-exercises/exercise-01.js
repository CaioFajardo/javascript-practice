function retornaCopia(array) {

    const copia = []

    for (const numero of array) {
        copia.push(numero * 2)
    }

    return copia
}

console.log(retornaCopia([1, 2, 3]))