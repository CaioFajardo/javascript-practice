# 🧠 Exercícios — Módulo 02 (Objetos e Arrays)

> Foco: Objetos, Arrays, Destructuring, Spread, Métodos básicos e JSON

---

## 🧩 1. Objeto com método

Crie um objeto `livro` com:

- titulo
- autor
- ano
- paginas

Adicione um método que retorna:

"TÍTULO por AUTOR (ANO)"

---

## 🧩 2. Lista de produtos

Crie um array com 5 produtos.

Cada produto deve ser um objeto com:

- nome
- preco

Use destructuring para extrair:

- o primeiro produto
- o último produto

---

## 🧩 3. Spread operator

Crie:

- dois arrays de números
- combine os dois usando spread

Depois:

- adicione um novo número ao array combinado sem modificar o original

Também:

- crie um objeto
- adicione uma nova propriedade usando spread sem alterar o original

---

## 🧩 4. Transformando objeto em array de strings

Dado:

const user = { nome: 'João', idade: 30, cidade: 'SP' }

Crie um array assim:

['nome: João', 'idade: 30', 'cidade: SP']

Use:

- Object.entries()
- laço de repetição

---

## 🧩 5. Contador de elementos

Crie uma função:

contarElementos(array)

Ela deve retornar um objeto com a contagem de cada item.

Exemplo:

['a', 'b', 'a', 'c', 'b', 'a']

Resultado esperado:

{ a: 3, b: 2, c: 1 }

---

## 🧩 6. Copiando e comparando objetos

Crie um objeto.

Faça uma cópia dele usando:

- Object.assign
- spread operator

Compare:

- se são iguais em valor
- se são iguais em referência

---

## 🧩 7. Trabalhando com arrays

Crie um array de números.

Use:

- includes
- indexOf
- slice
- concat
- join
- reverse

Mostre no console o resultado de cada operação.

---

## 🧩 8. Manipulação de objetos

Crie um objeto pessoa.

Faça:

- adicionar uma propriedade
- modificar uma propriedade
- deletar uma propriedade

Mostre o objeto em cada etapa.

---

## 🧩 9. JSON na prática

Crie um objeto.

Converta para JSON usando:

JSON.stringify

Depois:

- converta de volta usando JSON.parse

Mostre:

- tipo antes
- tipo depois

---

## 🧩 10. Destructuring avançado

Crie um objeto com várias propriedades.

Use destructuring para:

- extrair valores
- renomear variáveis
- usar valor padrão

---

## 🧩 11. Arrays com destructuring

Crie um array com vários elementos.

Use destructuring para:

- pegar o primeiro
- ignorar alguns valores
- pegar o resto com ...

---

## 🧩 12. Verificando tipos

Crie variáveis com:

- array
- objeto
- string

Use:

- typeof
- Array.isArray
- instanceof

Mostre os resultados e compare.

---

## 🧩 13. Objeto com array dentro

Crie um objeto que contém um array.

Acesse:

- o array
- um elemento específico do array

---

## 🧩 14. Array com objetos

Crie um array de objetos (ex: pessoas).

Acesse:

- uma propriedade específica de um item
- todos os nomes usando laço

---

## 🧩 15. Método dentro de objeto

Crie um objeto com um método que usa:

this

O método deve usar uma propriedade do próprio objeto.

---

## 🚀 Observações

- Priorize clareza ao invés de complexidade
- Use console.log para visualizar tudo
- Evite usar coisas que ainda não foram ensinadas (map, filter, etc)
- Foque em entender, não só fazer funcionar