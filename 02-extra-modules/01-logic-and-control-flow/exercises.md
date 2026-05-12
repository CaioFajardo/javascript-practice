# 📘 Module 03 — Logic and Control Flow

Este módulo tem como objetivo consolidar lógica de programação, controle de fluxo, validações e comportamento do JavaScript.

Até aqui, os estudos focaram muito em:

* tipos
* objetos
* arrays
* referências
* estruturas de dados

Agora o foco será:

* tomada de decisão
* validação
* comparações
* repetição
* coerção de tipos
* truthy e falsy
* interpretação lógica

---

## 🎯 Exercícios

### 🧩 1. Comparações básicas

Crie variáveis numéricas e faça comparações usando:

* `>`
* `<`
* `>=`
* `<=`
* `==`
* `===`

Mostre os resultados no console.

> 💡 Compare também:

```js
5 == "5"
5 === "5"
```

---

### 🧩 2. Truthy e Falsy

Teste valores como:

* `0`
* `1`
* `""`
* `"texto"`
* `[]`
* `{}`
* `null`
* `undefined`
* `NaN`
* `false`
* `true`

Use `if` para descobrir quais valores o JavaScript considera truthy ou falsy.

---

### 🧩 3. if / else

Crie validações usando:

* `if`
* `else`
* `else if`

Exemplos:

* idade mínima
* senha correta
* usuário ativo
* nota escolar

---

### 🧩 4. Operadores lógicos

Use:

* `&&`
* `||`
* `!`

Crie validações combinando múltiplas condições.

---

### 🧩 5. switch

Crie um sistema simples usando `switch`.

Exemplos:

* dias da semana
* níveis de usuário
* opções de menu

---

### 🧩 6. for clássico

Crie loops usando:

```js
for (let i = 0; i < 10; i++)
```

Teste:

* contagem crescente
* contagem regressiva
* números pares
* números ímpares

---

### 🧩 7. while e do while

Use:

* `while`
* `do while`

Compare os comportamentos.

---

### 🧩 8. break e continue

Use:

* `break`
* `continue`

Dentro de loops.

Entenda:

* quando o loop para
* quando uma iteração é ignorada

---

### 🧩 9. for of

Percorra arrays usando:

```js
for (const valor of array)
```

Compare com:

```js
for (let i = 0; i < array.length; i++)
```

---

### 🧩 10. for in

Percorra objetos usando:

```js
for (const chave in objeto)
```

Compare com:

```js
Object.entries()
```

---

### 🧩 11. Validação de dados

Crie validações reais usando:

* `typeof`
* `Array.isArray`
* `if`
* operadores lógicos

---

### 🧩 12. Curto-circuito

Teste comportamentos usando:

```js
valor && "executou"
valor || "fallback"
```

Entenda:

* curto-circuito
* fallback
* comportamento lógico

---

### 🧩 13. Mini desafio final

Crie um pequeno sistema que:

* valida dados
* usa loops
* usa condicionais
* usa operadores lógicos
* usa arrays e objetos
* mostra mensagens diferentes dependendo das condições