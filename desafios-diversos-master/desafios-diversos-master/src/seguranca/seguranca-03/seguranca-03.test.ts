import { PORT_SEG03, operacaoIntensivaIO } from "./seguranca-03";
import http from 'http';


describe('seguranca03', () => {
  let server: any;

  beforeAll(() => {
    // Inicie o servidor antes de executar os testes
    server = http.createServer((req, res) => {
      const resultado = operacaoIntensivaIO(1000);
      res.end(resultado);
    });

    server.listen(3000);
  });

  afterAll((done) => {
    // Encerre o servidor após os testes
    server.close(done);
  });

  it('deve lidar com tráfego intenso sem ficar indisponível', async () => {
    const numSolicitacoes = 100;

    // Simule várias solicitações simultâneas
    const solicitudes = Array.from({ length: numSolicitacoes }, async () => {
      return new Promise((resolve, reject) => {
        http.get('http://localhost:' + PORT_SEG03, (res) => {
          res.on('data', () => {}); // Consumir a resposta para liberar a conexão
          res.on('end', resolve);
        }).on('error', reject);
      });
    });

    // Aguarde todas as solicitações serem concluídas
    await Promise.all(solicitudes);

    // Se o servidor conseguir lidar com todas as solicitações, o teste passa
    expect(true).toBe(true);
  });
});
