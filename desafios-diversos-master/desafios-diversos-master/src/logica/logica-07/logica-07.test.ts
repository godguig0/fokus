// @ts-nocheck
import { logica07 } from './logica-07';

describe('fatorial', () => {
    test('deve retornar 1 quando a entrada for 0', () => {
        expect(logica07(0)).toBe(1);
    });

    test('deve retornar 1 quando a entrada for 1', () => {
        expect(logica07(1)).toBe(1);
    });

    test('deve calcular o fatorial de um número', () => {
        expect(logica07(5)).toBe(120);
        expect(logica07(10)).toBe(3628800);
    });
});
