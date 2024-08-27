// @ts-nocheck
import { logica03 } from "./logica-03";

describe('logica03', () => {

    test('Expressões com delimitadores corretos', () => {
        expect(logica03('1 * 2 (3 + [4 / 5])')).toEqual(true);
        expect(logica03('a * (b + [c / d]) { e + f }')).toEqual(true);
        expect(logica03('a * ((x + y) + b + [c / d]) { e + f }')).toEqual(true);
        expect(logica03('(abc) (abc) [def] {ghi}')).toEqual(true);
    });

    test('Expressões com delimitadores incorretos', () => {
        expect(logica03('9 / [(8 + 7] - 6)')).toEqual(false);
        expect(logica03('a * (b + [c / d) { e + f }')).toEqual(false);
        expect(logica03('(abc] [def {ghi}')).toEqual(false);
        expect(logica03('((')).toEqual(false);
        expect(logica03('))')).toEqual(false);
    });

    test('Expressões vazias', () => {
        expect(logica03('')).toEqual(true);
    });

    test('Expressões sem delimitadores', () => {
        expect(logica03('1 + 2')).toEqual(true);
    });

});
