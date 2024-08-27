import request from 'supertest';
import { server } from './seguranca-01';

describe('seguranca01', () => {

  afterAll(() => {

    server.close();
  });

  test('Deve postar uma mensagem com sucesso', async () => {
    const mensagem = { user: 'Alice', content: 'Olá, mundo!' };

    const response = await request(server)
      .post('/post-message')
      .send(mensagem);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Mensagem postada com sucesso!');
  });

  test('Deve obter a lista de mensagens', async () => {
    const response = await request(server).get('/messages');

    expect(response.status).toBe(200);
    expect(response.body.messages).toBeDefined();
  });

  test('Deve evitar Cross-Site Scripting (XSS)', async () => {
    const mensagem = {
      user: 'Alice',
      content: '<script>alert("XSS");</script>',
    };

    const responsePostMessage = await request(server)
      .post('/post-message')
      .send(mensagem);

    expect(responsePostMessage.status).toBe(200);

    const responseGetMessage = await request(server).get('/messages');
    console.log(responseGetMessage.body.messages);
    expect(responseGetMessage.body.messages[responseGetMessage.body.messages.length - 1].content).not.toContain(mensagem.content);
  });
});

