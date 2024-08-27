import e from "express";

export function logica02(array: number[]) {
  const max = array.reduce((acc, num) => (acc > num ? acc : num), array[0]);
  const min = array.reduce((acc, num) => (acc < num ? acc : num), array[0]);
  const somatorio = array.reduce((acc, num) => {
    return acc + num;
  }, 0);

  return `${somatorio - max}  ${somatorio - min}`;
}
