function unique(arr) {
    return arr.filter((n, indice) => {
        if (arr.indexOf(n) === indice) {
            return n
        }
    })
}

console.log(unique([1, 2, 2, 3, 3, 3, 4]))