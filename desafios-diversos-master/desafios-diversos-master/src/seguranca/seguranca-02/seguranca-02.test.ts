import request from 'supertest';
import { server } from './seguranca-02';

describe('seguranca02', () => {

  afterAll(() => {
    server.close();
  });

  test('Deve realizar login com sucesso', async () => {
    const credenciais = { username: 'admin', password: 'admin' };

    const response = await request(server)
      .post('/login')
      .send(credenciais);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login bem-sucedido!');
  });

  test('Deve retornar credenciais inválidas para login mal-sucedido', async () => {
    const credenciais = { username: 'user', password: 'senha_incorreta' };

    const response = await request(server)
      .post('/login')
      .send(credenciais);

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Credenciais inválidas');
  });

  test('Deve verificar vunerabilidade SQL Injection', async () => {
    const credenciais = {
      username: 'admin',
      password: "' OR 1=1; --", // SQL Injection intencional
    };

    const response = await request(server)
      .post('/login')
      .send(credenciais);

    expect(response.status).not.toBe(200);
    // O teste verifica se a resposta indica um login bem-sucedido, o que seria uma vulnerabilidade
    expect(response.body.message).not.toBe('Login bem-sucedido!');
  });
});
