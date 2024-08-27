// @ts-nocheck
import { logica08 } from "./logica-08";

describe('logica08', () => {
    it('deve retornar true para anagramas', () => {
        expect(logica08('listen', 'silent')).toBe(true);
        expect(logica08('debit card', 'bad credit')).toBe(true);
        expect(logica08('rail safety', 'fairy tales')).toBe(true);
    });

    it('deve retornar false para não anagramas', () => {
        expect(logica08('hello', 'world')).toBe(false);
        expect(logica08('cat', 'dog')).toBe(false);
        expect(logica08('apple', 'banana')).toBe(false);
    });

    it('deve ignorar a sensibilidade de maiúsculas e minúsculas', () => {
        expect(logica08('Listen', 'silent')).toBe(true);
        expect(logica08('Debit Card', 'Bad Credit')).toBe(true);
        expect(logica08('Rail Safety', 'Fairy Tales')).toBe(true);
    });

    it('deve ignorar espaços em branco', () => {
        expect(logica08('listen', 'silent ')).toBe(true);
        expect(logica08('debit card', ' bad credit')).toBe(true);
        expect(logica08('rail safety', 'fairy tales ')).toBe(true);
    });
});