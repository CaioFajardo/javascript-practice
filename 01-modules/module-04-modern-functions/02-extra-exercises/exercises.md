# 🧠 Exercícios Extras — Módulo 04 (Funções Modernas ES6+)

> Foco: Arrow Functions, HOF, Callbacks, Closures, Currying, Debounce e Memoization
> 💡 Objetivo: entender funções como “máquinas de comportamento”

---

## 🧩 1. Arrow Function + Destructuring

Crie uma função:

```js
const formatarUsuario = ({ nome, idade }) => {

}
```

Ela deve retornar:

```
"Nome tem Idade anos"
```

💡 Exemplo:

```js
formatarUsuario({ nome: "Caio", idade: 22 })
```

---

## 🧩 2. HOF — Aplicar função múltiplas vezes

Crie uma função:

```js
function aplicar(numero, funcao) {

}
```

Regras:

* aplica a função **3 vezes**
* cada resultado vira entrada da próxima

💡 Exemplo:

```js
aplicar(2, n => n * 2)
```

Resultado:

```
16
```

---

## 🧩 3. Retry (tentativas com falha)

Crie:

```js
function retry(fn) {

}
```

Regras:

* tentar executar até **3 vezes**
* se der erro, tenta de novo
* se funcionar, retorna resultado
* se falhar 3 vezes → retorna `"Falhou"`

💡 Exemplo:

```js
retry(() => Math.random() > 0.5 ? "OK" : throw Error())
```

---

## 🧩 4. Conta Bancária (Closure real)

Crie:

```js
function contaBancaria(valorInicial = 0) {

}
```

Deve retornar:

```js
{
  depositar,
  sacar,
  verSaldo
}
```

Regras:

* saldo deve ser **privado**
* não pode ser acessado diretamente
* só via métodos

💡 Exemplo:

```js
const conta = contaBancaria(100)

conta.depositar(50)
conta.sacar(20)
conta.verSaldo()
```

---

## 🧩 5. Pipe (encadeamento de funções)

Crie:

```js
const pipe = (...fns) => {

}
```

Uso:

```js
const transformar = pipe(
  adicionar10,
  multiplicarPor2,
  subtrair5
);
```

Regra:

* executa da esquerda → direita

💡 Exemplo:

```js
transformar(5)
```

Resultado:

```
25
```

---

## 🧩 6. Once (executa só 1 vez)

Crie:

```js
function once(fn) {

}
```

Regras:

* função só pode executar 1 vez
* depois disso, ignora chamadas

💡 Exemplo:

```js
const iniciar = once(() => console.log("Iniciado!"))

iniciar() // executa
iniciar() // nada acontece
```

---

## 🧩 7. Debounce (controle de execução)

Crie:

```js
function debounce(fn, delay) {

}
```

Regras:

* cancela chamadas anteriores
* só executa a última depois do tempo

💡 Exemplo:

```js
const buscar = debounce(console.log, 500)
buscar("a")
buscar("ab")
buscar("abc") // só essa executa
```

---

## 🧩 8. Currying (funções encadeadas)

Crie:

```js
const soma = a => b => c => {

}
```

💡 Exemplo:

```js
soma(1)(2)(3)
```

Resultado:

```
6
```

---

## 🧩 9. Memoization (cache de função)

Crie:

```js
function memoize(fn) {

}
```

Regras:

* armazenar resultados anteriores
* não recalcular se já existir

💡 Exemplo:

```js
const fib = memoize(n => {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
})
```

---

## 🧩 10. Mini desafio final (combinação real)

Crie uma função:

```js
const processar = pipe(
  x => x + 10,
  x => x * 2,
  x => x - 5
)
```

E teste:

```js
processar(5)
```