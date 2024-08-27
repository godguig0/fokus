/**
 * Crie uma função de acordo com as instruções contidas no README.md
 */
export function logica06(array: string[]) {
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1]) {
      return false;
    }
    return true;
  }
}
