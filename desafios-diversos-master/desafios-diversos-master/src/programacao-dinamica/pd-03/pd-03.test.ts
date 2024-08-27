//@ts-nocheck
import { pd03 } from "./pd-03";

describe("Testes para a função mochila", () => {
  test("Exemplo 1", () => {
    const valor = [40, 70, 30, 10];
    const peso = [20, 40, 10, 5];
    const capacidade = 60;
    expect(pd03(valor, peso, capacidade)).toBe(110);
  });

  it("Exemplo 2", () => {
    const valor = [60, 50, 70, 30];
    const peso = [5, 3, 4, 2];
    const capacidade = 5;
    expect(pd03(valor, peso, capacidade)).toBe(80);
  });

  it("Exemplo 3", () => {
    const valor = [10, 30, 20];
    const peso = [5, 10, 15];
    const capacidade = 8;
    expect(pd03(valor, peso, capacidade)).toBe(10);
  });
});
