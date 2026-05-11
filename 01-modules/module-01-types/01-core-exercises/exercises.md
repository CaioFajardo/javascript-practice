# 📘 Módulo 01 — Tipagem Dinâmica e Tipos Primitivos

Este módulo tem como objetivo compreender os tipos básicos do JavaScript e os problemas causados pela tipagem dinâmica.

---

## 🎯 Exercícios

### 1️⃣ Tipo real do valor

Crie uma função que recebe um valor e retorna seu tipo **exato**.

> 💡 Use `typeof`, mas trate corretamente:

* `null`
* `array`
* `NaN`

---

### 2️⃣ Corrigir função de soma

Corrija a função abaixo para que **sempre retorne um número**, mesmo se receber strings:

```js
function somar(a, b) {
    return a + b;
}
```

> 💡 Dica: faça conversão explícita de tipos

---

### 3️⃣ Validação de CPF

Crie uma função que valida se um CPF possui **exatamente 11 dígitos**.

> ⚠️ Regras:

* Deve ignorar pontos e traços
* Deve funcionar com string ou número

---

### 4️⃣ Conversão de temperatura

Crie uma função que converte temperatura de **Celsius para Fahrenheit**.

> ⚠️ Regras:

* Se receber `string` ou `null`, deve retornar erro
* Fórmula:

```
F = (C × 9/5) + 32
```

---

### 5️⃣ Verificar tipos do array

Crie uma função que recebe um array e retorna:

* `true` → se **todos os elementos são do mesmo tipo**
* `false` → caso contrário

---

## 🧪 Dicas gerais

* Teste suas funções com diferentes tipos de entrada
* Use `console.log` para validar os resultados
* Pense em casos extremos (edge cases)

---

## 🚀 Objetivo

Ao finalizar este módulo, você deve ser capaz de:

* Identificar tipos corretamente
* Evitar bugs de tipagem dinâmica
* Validar dados de forma segura
* Escrever funções mais previsíveis

---

## 📌 Observação

Estes exercícios fazem parte do processo de construção de uma base sólida em JavaScript.
A prática consistente é essencial para evolução como desenvolvedor.
