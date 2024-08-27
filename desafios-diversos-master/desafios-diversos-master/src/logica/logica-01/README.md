# Lógica 01

Esta é uma escada de tamanho **n=4**:

```
[
'   #',
'  ##',
' ###',
'####'
]
```
Sua base e altura são iguais a **n**. É desenhado usando **#** e espaços. A última linha não é precedida por nenhum espaço.

Escreva um programa que imprima em um array uma escada do tamanho **n**.

## Descrição da função

Complete a função de escada no editor abaixo.

escada tem os seguintes parâmetros:

* **n** : um número inteiro

## Imprimir

Imprima uma escada em um array conforme descrito acima.

## Formato de entrada

Um único número inteiro, **n**, definindo o tamanho da escada.

## Restrições

```0 < n < 100```

## Formato de saída

Imprima uma escada de tamanho **n** usando  **#** e espaços.

Nota : A última linha deve ter **n** caracteres nela (# ou espaços).

Exemplo de entrada

```6``` 

Saída de exemplo

```
[
'     #',
'    ##',
'   ###',
'  ####',
' #####',
'######'
]
```
## Explicação

A escada é alinhada à direita, composta por **#** e espaços, e tem altura e largura de **n**.

## Para verificar se a solução funcionou

``` npm run test-logica01 ```

Com isso você realiza a execução de testes de unidade em [**Jest**](https://jestjs.io/pt-BR/).
