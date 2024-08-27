const http = require('http');

// Função para simular uma operação intensiva de I/O
export function operacaoIntensivaIO(tempo: number) {
  const inicio = Date.now();

  // Simula uma operação de I/O que leva 'tempo' milissegundos
  while (Date.now() - inicio < tempo) {
    // Apenas espera até que o tempo necessário seja atingido
  }

  // Retorna uma mensagem indicando o término da operação
  return `Operação de I/O concluída em ${tempo} ms`;
}

const server = http.createServer((req: any, res: any) => {
  // Simulação de uma operação intensiva de I/O
  const resultado = operacaoIntensivaIO(1000);
  
  res.end(resultado);
});

export const PORT_SEG03 = 3002;

server.listen(PORT_SEG03, () => {
  console.log(`Servidor ouvindo na porta ${PORT_SEG03}`);
});
