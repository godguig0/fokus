// @ts-nocheck
import { pd02 } from "./pd-02";

describe('pd-02', () => {

    test('resultado deve ser 3', () => {
        const quantiaDinheiro = 11;
        const arrayMoedas = [1, 2, 5];
        const resultado = pd02(quantiaDinheiro, arrayMoedas);
        expect(resultado).toEqual(3);
    });

    test('resultado deve ser -1', () => {
        const quantiaDinheiro = 7;
        const arrayMoedas = [2, 4];
        const resultado = pd02(quantiaDinheiro, arrayMoedas);
        expect(resultado).toEqual(-1);
    });


    test('resultado deve ser 0', () => {
        const quantiaDinheiro = 0;
        const arrayMoedas = [1, 2, 3];
        const resultado = pd02(quantiaDinheiro, arrayMoedas);
        expect(resultado).toEqual(0);
    });

    test('resultado deve ser 0', () => {
        const quantiaDinheiro = 15;
        const arrayMoedas = [1, 3, 5];
        const resultado = pd02(quantiaDinheiro, arrayMoedas);
        expect(resultado).toEqual(3);
    });
});
