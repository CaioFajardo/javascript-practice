const pipe = (...fns) => (valor) => fns.reduce((acc, fn) => fn(acc), valor)

const adicionar10 = x => x + 10
const multiplicarPor2 = x => x * 2
const subtrair5 = x => x -5

const transformar = pipe(adicionar10, multiplicarPor2, subtrair5)

console.log(transformar(5))