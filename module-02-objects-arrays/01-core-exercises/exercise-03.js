const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arrCombinado = [...arr1, ...arr2]

const obj = {
    nome: "Bola",
    preco: 15
}

const objNovaProp = {...obj, estoque: 10}

console.log(arrCombinado)
console.log(objNovaProp)