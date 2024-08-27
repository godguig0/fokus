// @ts-nocheck
import { logica04 } from "./logica-04";

describe("logica04", () => {
  test("deve retornar true para um labirinto com caminho válido", () => {
    const labirinto = [
      ["S", "0", "1", "0", "0"],
      ["0", "1", "0", "1", "0"],
      ["0", "0", "0", "0", "E"],
      ["0", "1", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];

    const resultado = logica04(labirinto);

    expect(resultado).toBe(true);
  });

  test("deve retornar false para um labirinto sem ponto de início", () => {
    const labirinto = [
      ["0", "0", "1", "0", "0"],
      ["0", "1", "0", "1", "0"],
      ["0", "0", "0", "0", "E"],
      ["0", "1", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];

    const resultado = logica04(labirinto);

    expect(resultado).toBe(false);
  });

  test("deve retornar false para um labirinto sem ponto de chegada", () => {
    const labirinto = [
      ["S", "0", "1", "0", "0"],
      ["0", "1", "0", "1", "0"],
      ["0", "0", "0", "0", "0"],
      ["0", "1", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];

    const resultado = logica04(labirinto);

    expect(resultado).toBe(false);
  });

  test("deve retornar true para um labirinto com caminho válido", () => {
    const labirinto = [
      ["0", "0", "0", "0", "0"],
      ["0", "1", "1", "0", "1"],
      ["0", "1", "1", "0", "0"],
      ["0", "0", "0", "1", "0"],
      ["E", "0", "0", "1", "S"],
    ];

    const resultado = logica04(labirinto);

    expect(resultado).toBe(true);
  });

  test("deve retornar false para um labirinto não regular", () => {
    const labirinto = [
      ["0", "0", "1", "0", "0"],
      ["0", "1", "0", "1", "0"],
      ["S", "0", "0", "0", "E"],
      ["0", "1", "1", "0", "0"],
      ["0", "0", "0", "1"],
    ];

    const resultado = logica04(labirinto);

    expect(resultado).toBe(false);
  });

  test("deve retornar false para um labirinto vazio", () => {
    const labirinto = [];

    const resultado = logica04(labirinto);

    expect(resultado).toBe(false);
  });

  test("deve retornar false para um labirinto sem caminho válido", () => {
    const labirinto = [
      ["S", "1", "1", "1", "1"],
      ["0", "1", "0", "1", "0"],
      ["0", "0", "0", "1", "E"],
      ["0", "1", "1", "0", "1"],
      ["0", "0", "0", "1", "1"],
    ];

    const resultado = logica04(labirinto);

    expect(resultado).toBe(false);
  });

  test("deve retornar true para um labirinto em que o ponto de início é igual ao ponto de chegada", () => {
    const labirinto = [["S"]];

    const resultado = logica04(labirinto);

    expect(resultado).toBe(true);
  });
});
