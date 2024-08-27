//@ts-nocheck
import { logica06 } from "./logica-06";

describe("logica07", () => {
    test('logica06 deve retornar true para palavras palindrômicas', () => {
        expect(logica06('level')).toBe(true);
        expect(logica06('radar')).toBe(true);
        expect(logica06('madam')).toBe(true);
        expect(logica06('anilina')).toBe(true);
    });

    test('logica06 deve retornar false para palavras não palindrômicas', () => {
        expect(logica06('hello')).toBe(false);
        expect(logica06('world')).toBe(false);
        expect(logica06('github')).toBe(false);
        expect(logica06('rodrigo')).toBe(false);
    });
});