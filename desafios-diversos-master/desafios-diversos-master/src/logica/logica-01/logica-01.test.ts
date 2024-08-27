// @ts-nocheck
import { logica01 } from "./logica-01";

describe("logica01", () => {

    test('Escada de tamanho 4', () => {

        const resultado = logica01(4);
        const esperado = [
            '   #',
            '  ##',
            ' ###',
            '####'
        ];
        expect(resultado).toEqual(esperado);
    });

    test('Escada de tamanho 6', () => {

        const resultado = logica01(6);
        const esperado = [
            '     #',
            '    ##',
            '   ###',
            '  ####',
            ' #####',
            '######'
        ];
        expect(resultado).toEqual(esperado);
    });

    test('Testar estrutura escada', () => {
        
        const n = Math.floor(100 * Math.random());
        const escada = logica01(n);
        expect(escada.length).toEqual(n);
        escada.forEach((degrau: string) => {
            expect(degrau.length).toEqual(n);
        })
        expect(escada[0].trim().length).toEqual(1);
        expect(escada[escada.length - 1].trim().length).toEqual(n);
    });
});