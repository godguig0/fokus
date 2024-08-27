# Programação Dinâmica - Problema da Mochila

Dado um conjunto de itens, cada um com um valor e um peso, e uma capacidade máxima de peso para uma mochila, determine a combinação de itens que maximize o valor total sem exceder a capacidade da mochila.

## Dicas

**Entenda o Problema:** Compreenda completamente o problema antes de começar a implementar a solução. Certifique-se de entender a relação entre valores, pesos e a capacidade da mochila.

**Modelagem do Problema:** Considere como você pode representar o problema usando estruturas de dados. Neste caso, pode ser útil usar matrizes para armazenar subproblemas e suas soluções.

**Recorrência:** Identifique a relação de recorrência entre os subproblemas. Como o valor total máximo é afetado pelo valor e peso de cada item, você pode criar uma função recursiva para explorar todas as combinações possíveis.

**Memoização ou Programação Dinâmica:** Para evitar recálculos desnecessários, use memoização (recursão com memorização) ou programe dinamicamente para armazenar e reutilizar soluções de subproblemas já resolvidos.

## Exemplos

```ts
// Exemplo 1
const valor1 = [40, 70, 30, 10];
const peso1 = [20, 40, 10, 5];
const capacidade1 = 60;
console.log(mochila(valor1, peso1, capacidade1)); // Saída esperada: 110

// Exemplo 2
const valor2 = [60, 50, 70, 30];
const peso2 = [5, 3, 4, 2];
const capacidade2 = 5;
console.log(mochila(valor2, peso2, capacidade2)); // Saída esperada: 80

// Exemplo 3
const valor3 = [10, 30, 20];
const peso3 = [5, 10, 15];
const capacidade3 = 8;
console.log(mochila(valor3, peso3, capacidade3)); // Saída esperada: 10
```
