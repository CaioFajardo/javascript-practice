// 4. Explique por que este código tem um bug:
   
// const original = { lista: [1, 2, 3] };
// const copia = { ...original };
// copia.lista.push(4);
// console.log(original.lista); // [1, 2, 3, 4] ← Por quê?

// Resposta: A constante copia foi copiada de forma superficial (shallow copy), ou seja, o objeto externo é novo, mas os valores internos, como arrays e objetos continuam compartilhando a mesma referência. Então mesmo sendo uma cópia, ele continua apontando para o mesmo array na memória. Para evitar isso, o ideal é fazer uma cópia profunda (deep copy), assim ele cria uma variável completamente nova com endereços diferentes na memória.