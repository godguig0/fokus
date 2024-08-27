// @ts-nocheck
import { pd01 } from "./pd-01";

describe('Programação Dinâmica 01', () => {
    test('Exemplo 1', () => {
        const input = [1, 2, 3, 4, 5];
        const output = 15;
        expect(pd01(input)).toBe(output);
    });

    test('Exemplo 2', () => {
        const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        const output = 6;
        expect(pd01(input)).toBe(output);
    });

    test('Exemplo 3', () => {
        const input = [5, -2, 3, 4, -2, -1, 8, 2, -6, 5];
        const output = 17;
        expect(pd01(input)).toBe(output);
    });

    test('Exemplo 4', () => {
        const input = [-1, -2, -3, -4];
        const output = -1;
        expect(pd01(input)).toBe(output);
    });
});
