import e from "express";

/**
 * Crie uma função de acordo com as instruções contidas no README.md
 */
export function logica10(array: number[]) {
  const listaPositiva = array.filter(
    (elemento) => typeof elemento === "number" && elemento > 0
  );

  if (listaPositiva.length == 0) {
    return 0;
  }
  const somatorio = listaPositiva.reduce((acc, num) => {
    return acc + num;
  }, 0);
  return somatorio / listaPositiva.length;
}
