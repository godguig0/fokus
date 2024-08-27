// @ts-nocheck
import { logica09 } from "./logica-09";

describe('logica09', () => {
    test('deve retornar true para números primos', () => {
        expect(logica09(2)).toBeTruthy();
        expect(logica09(3)).toBeTruthy();
        expect(logica09(5)).toBeTruthy();
        expect(logica09(7)).toBeTruthy();
        expect(logica09(11)).toBeTruthy();
    });

    test('deve retornar false para números não primos', () => {
        expect(logica09(1)).toBeFalsy();
        expect(logica09(4)).toBeFalsy();
        expect(logica09(6)).toBeFalsy();
        expect(logica09(8)).toBeFalsy();
        expect(logica09(9)).toBeFalsy();
    });
});