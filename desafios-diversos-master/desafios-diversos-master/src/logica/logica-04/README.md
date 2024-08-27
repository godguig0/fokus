# Lógica 04

Imagine um labirinto representado por uma matriz 2D onde:

* 0 representa um caminho disponível.
* 1 representa uma parede.
* S é o ponto de início.
* E é o ponto de chegada.

Seu objetivo é escrever uma função em TypeScript que determine se é possível chegar do ponto de início S ao ponto de chegada E no labirinto.

A função tem a seguinte assinatura:
```ts
function podeChegarAoDestino(labirinto: string[][]): boolean {
  // lógica a ser implementada
}

```

A função deve retornar **true** se for possível chegar do ponto de início ao ponto de chegada, e **false** caso contrário.

Exemplo de labirinto:

```ts
const labirinto = [
  ['S', '0', '1', '0', '0'],
  ['0', '1', '0', '1', '0'],
  ['0', '0', '0', '0', 'E'],
  ['0', '1', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
];

console.log(podeChegarAoDestino(labirinto)); // Deve retornar true
```

No exemplo acima, é possível chegar do ponto de início S ao ponto de chegada E. O caminho pode ser algo como: S -> (1,0) -> (2,0) -> (2,1) -> (2,2) -> (2,3) -> (2,4) -> E.


## Dicas

### Entenda o Problema

Analise cuidadosamente os requisitos do problema e a função que você deve implementar. Certifique-se de entender como a matriz do labirinto é estruturada.

### Abordagem Passo a Passo

Considere a abordagem passo a passo para resolver o problema. Pense em como você poderia explorar o labirinto, marcando as células visitadas para evitar loops infinitos.

### Considere Casos Especiais:

Pense em casos especiais, como um labirinto vazio, um labirinto onde o ponto de início é igual ao ponto de chegada, ou um labirinto sem um ponto de chegada.

### Depure Passo a Passo:

Se encontrar dificuldades, use a depuração passo a passo. Isso ajuda a entender como sua função está se comportando durante a execução.

### Documente Seu Código:

Ao finalizar, adicione comentários ao seu código para explicar a lógica por trás de cada parte. Isso não só ajuda outras pessoas a entenderem seu código, mas também pode ser útil para você no futuro.

## Para verificar se a solução funcionou

1. npm i
2. npm run test-logica04

Com isso você realiza a execução de testes de unidade em [**Jest**](https://jestjs.io/pt-BR/).
