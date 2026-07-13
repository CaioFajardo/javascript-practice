# 🧠 Exercícios Extras — Módulo 05 (Manipulação de Arrays ES6+)

> Foco: map, filter, reduce, find, every, some, sort, chaining e manipulação de estruturas
> 💡 Objetivo: aprender a enxergar transformações de dados e escolher o método adequado

---

## 🧩 1. sumBy()

Crie:

```js
function sumBy(array, chave) {

}
```

Regras:

* somar todos os valores da propriedade informada

💡 Exemplo:

```js
sumBy(
  [
    { preco: 100 },
    { preco: 250 },
    { preco: 50 }
  ],
  "preco"
)
```

Resultado:

```
400
```

---

## 🧩 2. pluck()

Crie:

```js
function pluck(array, chave) {

}
```

Regras:

* retornar um novo array contendo apenas os valores da chave informada

💡 Exemplo:

```js
pluck(
[
    { nome: "João" },
    { nome: "Maria" },
    { nome: "Pedro" }
],
"nome")
```

Resultado:

```
["João", "Maria", "Pedro"]
```

---

## 🧩 3. countBy()

Crie:

```js
function countBy(array, chave) {

}
```

Regras:

* contar quantas vezes cada valor da chave aparece

💡 Exemplo:

```js
countBy(
[
    { cidade: "SP" },
    { cidade: "RJ" },
    { cidade: "SP" },
    { cidade: "MG" },
    { cidade: "SP" }
],
"cidade")
```

Resultado:

```js
{
    SP: 3,
    RJ: 1,
    MG: 1
}
```

---

## 🧩 4. Média por aluno

Dado:

```js
[
    {
        nome,
        notas: [...]
    }
]
```

Retorne:

```js
[
    {
        nome,
        media
    }
]
```

Depois:

* filtre apenas quem possui média maior ou igual a 7
* ordene pela maior média

💡 Dica:

Use chaining.

---

## 🧩 5. Ranking de jogadores

Dado:

```js
[
    {
        nome,
        pontos,
        vitorias
    }
]
```

Ordene:

* maior pontuação primeiro
* em caso de empate, quem possui mais vitórias
* persistindo o empate, ordem alfabética

---

## 🧩 6. partition()

Crie:

```js
function partition(array, callback) {

}
```

Regras:

* dividir o array em dois
* primeiro array: elementos que passaram no teste
* segundo array: elementos que não passaram

💡 Exemplo:

```js
partition(
    [1,2,3,4,5],
    n => n % 2 === 0
)
```

Resultado:

```js
[
    [2,4],
    [1,3,5]
]
```

---

## 🧩 7. Mini desafio final

Dado:

```js
[
    {
        categoria,
        produto,
        preco,
        quantidade
    }
]
```

Retorne um relatório contendo:

```js
{
    categorias: [
        {
            categoria,
            faturamento
        }
    ],

    faturamentoTotal,

    produtoMaisVendido
}
```

Regras:

* calcular faturamento de cada venda
* agrupar por categoria
* calcular faturamento por categoria
* descobrir o produto mais vendido (pela quantidade)
* ordenar categorias pelo maior faturamento

💡 Dica:

Use vários métodos em conjunto (`map`, `reduce`, `sort`, `Object.entries`, etc.).