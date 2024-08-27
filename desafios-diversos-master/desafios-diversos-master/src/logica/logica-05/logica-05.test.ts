//@ts-nocheck
import { logica05 } from "./logica-05";

describe('logica-05', () => {

  test('soma deve ser 20', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const resultado = logica05(array);
    expect(resultado).toBe(20);
  });

  test('soma deve ser 240', () => {
    const array = [23, 17, 5, 20, 12, 28, 9, 14, 2, 11, 21, 4, 16, 30, 7, 26, 19, 25, 6, 22, 18, 13, 27, 15, 29, 8, 24, 10, 3, 1];
    const resultado = logica05(array);
    expect(resultado).toBe(240);
  });
});