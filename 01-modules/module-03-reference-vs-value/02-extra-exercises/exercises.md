````md
# 🧠 Exercícios Extras — Módulo 03 (Valor vs Referência)

> Foco: Mutabilidade, referências, cópias superficiais, cópias profundas e imutabilidade

---

## 🧩 1. Atualização imutável de objeto

Crie uma função:

```js
function atualizarUsuario(usuario, novoNome) {

}
````

Regras:

* NÃO modificar o objeto original
* retornar um NOVO objeto
* manter as outras propriedades

Exemplo:

```js
const usuario = {
    nome: "João",
    idade: 25
}
```

Saída esperada:

```js
{
    nome: "Pedro",
    idade: 25
}
```

---

## 🧩 2. Atualização imutável de array

Crie uma função:

```js
function adicionarItem(lista, item) {

}
```

Regras:

* NÃO modificar o array original
* retornar um NOVO array
* adicionar o item no final

Exemplo:

```js
[1, 2, 3]
```

Resultado esperado:

```js
[1, 2, 3, 4]
```

---

## 🧩 3. Cópia profunda com structuredClone

Crie uma função:

```js
function copiarUsuario(usuario) {

}
```

Regras:

* criar uma cópia profunda
* modificar apenas a cópia
* o original deve permanecer intacto

Teste com:

* objetos aninhados
* arrays dentro de objetos

---

## 🧩 4. Atualizando objetos dentro de arrays

Crie uma função:

```js
function atualizarNome(usuarios, id, novoNome) {

}
```

Regras:

* NÃO modificar o array original
* retornar um NOVO array
* atualizar apenas o usuário com o `id` informado

Exemplo:

```js
const usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" }
]
```

---

## 🧩 5. Congelando objetos profundamente

Crie uma função:

```js
function congelarProfundo(objeto) {

}
```

Regras:

* congelar TODAS as camadas do objeto
* funcionar com objetos aninhados
* impedir alterações futuras

💡 Aqui você vai praticar recursão

---

## 🧩 6. Deep clone manual (desafio)

Crie:

```js
function deepClone(objeto) {

}
```

⚠️ Regras:

* NÃO usar `structuredClone`
* NÃO usar JSON.parse/stringify
* usar recursão

💡 Esse exercício serve para fixar:

* referências
* recursão
* objetos aninhados
* cópia profunda

---

## 🚀 Observações

* Sempre teste se o objeto original foi modificado
* Priorize imutabilidade ao invés de mutação
* Tente visualizar mentalmente os objetos na memória
* Recursão é um dos conceitos mais importantes desse módulo