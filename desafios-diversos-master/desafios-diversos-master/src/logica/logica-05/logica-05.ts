export function logica05(array: number[]) {
  var resultado = array.reduce((soma, num) => {
        if (num % 2 == 0) {
            return soma + num;
        }
        return soma;
    }, 0);
    return resultado;
    }