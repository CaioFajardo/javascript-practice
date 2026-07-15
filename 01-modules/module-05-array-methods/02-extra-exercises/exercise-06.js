function partition(array, callback) {
    const passou = array.filter(callback)

    const naoPassou = array.filter(item => !callback(item))

    return [passou, naoPassou]
}

console.log(partition([1, 2, 3, 4, 5], n => n % 2 === 0))