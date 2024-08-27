# Programação Dinâmica 01 - Soma Máxima em um Subarray

Dado um array de números inteiros, encontre o subarray (contíguo) com a maior soma e retorne o valor dessa soma.

## Dicas

* Antes de começar a escrever código, entenda completamente o problema. O que significa um "subarray contíguo"? Como você definiria a "maior soma"?
* Pesquise sobre o **algoritmo Kadane's**. Este é um algoritmo eficiente para resolver o problema de encontrar a subarray com a maior soma.

## Exemplos de entrada e saída

* Exemplo 1
  * Entrada: [1, 2, 3, 4, 5]
  * Saída: 15
  * Explicação: O subarray [1, 2, 3, 4, 5] tem a maior soma, que é 15.

* Exemplo 2
  * Entrada: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  * Saída: 6
  * Explicação: O subarray [4, -1, 2, 1] tem a maior soma, que é 6.



* Exemplo 3
  * Entrada: [5, -2, 3, 4, -2, -1, 8, 2, -6, 5]
  * Saída: 15
  * Explicação: O subarray [3, 4, -2, -1, 8, 2] tem a maior soma, que é 15.


* Exemplo 4
  * Entrada: [-1, -2, -3, -4]
  * Saída: -1
  * Explicação: Neste caso, a escolha é um subarray contendo apenas um elemento, que é o maior valor possível.

