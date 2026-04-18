# 🧠 Dev Notes — Estudos e Aprofundamentos

Este arquivo serve como um registro do que já foi visto e do que ainda precisa ser aprofundado no aprendizado de JavaScript.

A ideia não é estudar tudo de uma vez, mas ir marcando conforme evolui.

---

## 🔸 1. Validação real de CPF

- [ ] Entender o algoritmo de validação (dígitos verificadores)
- [ ] Implementar validação sem depender apenas de regex
- [ ] Criar função reutilizável de validação
- [ ] Tratar casos inválidos e edge cases

💡 Objetivo: entender lógica matemática + validação de dados reais

---

## 🔸 2. Built-in Objects (nível mais profundo)

- [ ] Object
- [ ] Array
- [ ] Function
- [ ] Number / String / Boolean (wrappers)

- [ ] Entender o conceito de prototype nesses objetos
- [ ] Entender herança prototipada na prática

💡 Objetivo: entender como o JavaScript funciona “por baixo dos panos”

---

## 🔸 3. Object.prototype.toString.call

- [ ] Entender como funciona internamente
- [ ] Saber diferenciar de `typeof`
- [ ] Saber quando usar vs `instanceof`
- [ ] Entender por que é mais confiável em alguns casos

💡 Objetivo: identificação precisa de tipos em JavaScript

---

## 🔸 4. instanceof

- [ ] Entender funcionamento básico
- [ ] Entender prototype chain por trás
- [ ] Entender limitações (casos que falham)
- [ ] Comparar com outras formas de checagem de tipo

💡 Objetivo: entender verificação de instância de objetos

---

## 🔸 5. return vs console.log

- [x] Conceito básico entendido
- [ ] Aplicar em funções reais
- [ ] Entender impacto em funções puras
- [ ] Separação entre lógica e exibição de dados

💡 Objetivo: escrever código mais limpo e previsível

---

## 🔸 6. Tratamento robusto de tipos

- [ ] Criar validações defensivas
- [ ] Tratar inputs inesperados
- [ ] Trabalhar com edge cases
- [ ] Criar funções utilitárias (ex: getType, isValid)

💡 Objetivo: código mais seguro e profissional

---

## 🔸 7. Regex (RegExp)

- [ ] Entender sintaxe básica
- [ ] Flags (g, i, m, etc.)
- [ ] Grupos de captura
- [ ] Validações reais (email, CPF, etc.)
- [ ] Melhorar leitura de expressões complexas

💡 Objetivo: validação e manipulação de texto

---

## 🔸 8. Organização de código

- [ ] Separação de responsabilidades
- [ ] Funções auxiliares
- [ ] Estrutura de pastas em projetos
- [ ] Evitar lógica muito concentrada
- [ ] Reutilização de código

💡 Objetivo: código escalável e fácil de manter

---

## 🔸 9. Tratamento de erros (throw / try / catch)

- [x] Entender o que é `throw`
- [x] Entender o que é `Error`
- [x] Diferença entre erro de lógica e erro proposital
- [x] Usar `try/catch` para capturar erros
- [ ] Criar funções com modo "strict" (lança erro)
- [ ] Criar funções com modo "safe" (retorna fallback)
- [ ] Entender quando usar try/catch dentro vs fora da função

💡 Objetivo: controlar fluxo de erro de forma previsível e profissional

---

## 🔸 10. Padrão: função vs saída (lógica vs exibição)

- [x] Entender diferença entre `return` e `console.log`
- [ ] Evitar `console.log` dentro de funções de lógica
- [ ] Criar funções que retornam valores reutilizáveis
- [ ] Separar lógica de exibição (UI / console)

💡 Objetivo: escrever funções reutilizáveis e desacopladas

---

## 🔸 11. Validação numérica robusta

- [x] Entender `Number()`
- [x] Entender `NaN`
- [x] Entender `Number.isFinite`
- [ ] Diferença entre validação simples vs rígida
- [ ] Decidir regras de entrada (ex: aceitar "" ou null?)

💡 Objetivo: validar dados de forma consistente e consciente

---

## 🔸 12. Fluxo de execução com erro

- [ ] Entender como o `throw` interrompe o código
- [ ] Entender que o `try` para no primeiro erro
- [ ] Testar múltiplos cenários com funções auxiliares
- [ ] Criar funções para testes automatizados simples

💡 Objetivo: dominar o fluxo real do JavaScript em casos de erro

---

## 📌 Observações gerais

- Não tentar aprender tudo de uma vez
- Priorizar prática com pequenos projetos
- Revisitar este arquivo com frequência
- Marcar itens conforme forem sendo dominados

---

## 🚧 Próximos passos sugeridos

- Criar pequenos exercícios para cada tópico
- Aplicar validação de CPF em um projeto real
- Começar a refatorar códigos antigos usando essas ideias