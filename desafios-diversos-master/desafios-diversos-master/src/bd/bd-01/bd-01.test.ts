import request from 'supertest';
import { db, app, server } from './bd-01';

describe('bd01', () => {
    afterAll(() => {
        // Feche o banco de dados após todos os testes
        db.close();
        server.close();
    });

    test('Consulta Original vs Consulta Otimizada', async () => {
        // Executar consulta original
        const responseOriginal = await request(app).get('/consulta-original');

        // Executar consulta otimizada (modificar a rota conforme necessário)
        const responseOtimizada = await request(app).get('/consulta-otimizada');

        // Avaliar se as consultas retornam resultados
        expect(responseOriginal.body.length).toBeGreaterThan(0);
        expect(responseOtimizada.body.length).toBeGreaterThan(0);
        expect(responseOriginal.body).toEqual(responseOtimizada.body);

        // Avaliar se a consulta otimizada é mais rápida (tempo de resposta menor)
        const tempoOriginal = responseOriginal.header['x-response-time'];
        const tempoOtimizado = responseOtimizada.header['x-response-time'];

        console.log(`Tempo Original: ${tempoOriginal}`);
        console.log(`Tempo Otimizado: ${tempoOtimizado}`);

        // Certifique-se de ajustar a condição de acordo com a sua otimização
        expect(parseFloat(tempoOtimizado)).toBeLessThan(parseFloat(tempoOriginal));
    });
});
