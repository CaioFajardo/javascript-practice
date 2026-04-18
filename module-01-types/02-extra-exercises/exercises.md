# 🧠 Exercícios Extras — Módulo 01 (JavaScript)

> Foco: Tipagem dinâmica, validação de dados e fundamentos do JavaScript

---

## 🧩 1. Tipo real (pegadinha do JS)

Crie uma função:

```js
function tipoReal(valor) {

}
````

Ela deve retornar:

* `"string"`
* `"number"`
* `"boolean"`
* `"null"`
* `"array"`
* `"undefined"`
* `"nan"`

💡 **Dica:** `typeof` sozinho NÃO resolve tudo

---

## 🧩 2. Soma segura (corrigir bug real)

```js
function somar(a, b) {
    return a + b
}
```

👉 Faça funcionar corretamente mesmo se vier:

```js
somar("10", "20") // 30
somar(10, "20")   // 30
```

💡 Sem deixar virar concatenação

---

## 🧩 3. Validador de CPF (nível básico)

Crie:

```js
function validarCPF(cpf) {

}
```

Regras:

* Pode vir com `"."` e `"-"`
* Deve ter **11 dígitos**

Exemplos:

```js
"123.456.789-10" → true
"123" → false
```

💡 Dica: use regex `/\D/g`

---

## 🧩 4. Temperatura segura

```js
function celsiusParaFahrenheit(valor) {

}
```

Fórmula:

```js
(C * 9/5) + 32
```

Regra:

* Se NÃO for número → retornar `"Valor inválido"`

---

## 🧩 5. Todos do mesmo tipo

```js
function mesmoTipo(array) {

}
```

💡 Bônus:

* Tratar array vazio
* Tratar `null` e `NaN` corretamente

---

## 🧩 6. Truthy vs Falsy (pegadinha forte)

```js
function ehVerdadeiro(valor) {

}
```

👉 Deve retornar `true` ou `false`

Teste com:

```js
0
""
"0"
[]
{}
null
undefined
NaN
```

💡 Aqui você vai entender MUITO sobre JavaScript

---

## 🧩 7. Propriedade segura

```js
function pegarNome(usuario) {

}
```

Regra:

* Se não existir → retornar `"Nome não encontrado"`

💡 Use:

* Optional chaining `?.`
* Nullish coalescing `??`

---

## 🧩 8. Limpeza de número

```js
function limparNumero(valor) {

}
```

Entrada:

```js
"R$ 1.234,56"
```

Saída esperada:

```js
1234.56
```

💡 Envolve:

* String
* Regex
* Number

---

## 🧩 9. Retorno consistente (muito importante)

```js
function dividir(a, b) {

}
```

Regras:

* Se for inválido → `"Erro"`
* Se válido → número

👉 Nunca retornar tipos diferentes sem controle

---

## 🧩 10. Normalizador de dados

```js
function normalizarUsuario(usuario) {

}
```

Entrada:

```js
{ nome: "caio", idade: "22" }
```

Saída:

```js
{ nome: "Caio", idade: 22 }
```

💡 Regras:

* Primeira letra maiúscula
* Idade como número

---

## 🧩 11. Validador de lista

```js
function validarLista(lista) {

}
```

Regras:

* Precisa ser array
* Não pode estar vazio
* Todos os elementos devem ser `number`

---

## 🧩 12. Soma de valores válidos

```js
function somarNumeros(lista) {

}
```

Entrada:

```js
[10, "20", "abc", 30]
```

Saída:

```js
60
```

💡 Regras:

* Ignorar inválidos
* Converter quando possível

---

## 🧩 13. Comparador inteligente

```js
function comparar(a, b) {

}
```

Regras:

* Se forem iguais → `"igual"`
* Se tipos diferentes → `"tipos diferentes"`
* Se números → comparar maior/menor

---

## 🚀 Observações

* Sempre teste suas funções com diferentes tipos de entrada
* Priorize código claro ao invés de código complexo
* Evite confiar apenas no `typeof`

````

---

# 💬 Dica final (importante)

Quando você subir isso pro GitHub:

👉 nomeia como:

```bash
exercises.md
````

ou

```bash
EXERCISES.md
```
