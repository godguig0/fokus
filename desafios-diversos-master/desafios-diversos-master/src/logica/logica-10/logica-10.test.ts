// @ts-nocheck
import { logica10 } from "./logica-10";

describe("logica10", () => {
    it("deve retornar a média dos números positivos no array", () => {
        expect(logica10([1, 2, 3])).toBe(2);
    });

    it("deve retornar 0 se não houver números positivos no array", () => {
        expect(logica10([-1, -2, -3])).toBe(0);
    });

    it("deve lidar com números decimais e retornar a média correta", () => {
        expect(logica10([1.5, 2.5, 3.5])).toBe(2.5);
    });

    it("deve ignorar valores não numéricos no array e calcular a média apenas dos números positivos", () => {
        expect(logica10([1, "2", 3, "four", 5])).toBe(3);
    });
});