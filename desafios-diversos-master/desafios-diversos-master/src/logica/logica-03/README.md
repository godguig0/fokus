
# Lógica 3

fazer uma função que recebe uma string de entrada, supostamente uma expressão matemática ou um trecho de código, e que me diga se todos os seus abre parênteses/colcehetes/chaves são corretamente fechados.

## Exemplo

```1 * 2 (3 + [4 / 5])``` 
deveria retornar **true**

```9 / [(8 + 7] - 6)``` deveria retornar **false**

## Para verificar se a solução funcionou

``` npm run test-logica03 ```

Com isso você realiza a execução de testes de unidade em [**Jest**](https://jestjs.io/pt-BR/).
