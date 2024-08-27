/**
 * Arquivo responsável por definir um servidor Express para lidar com mensagens.
 */

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

// Cria uma instância do Express
const app = express();

// Usa o middleware body-parser para interpretar o corpo das requisições como JSON
app.use(bodyParser.json());

// Serve arquivos estáticos a partir do diretório 'public'
app.use(express.static('public'));

// Define um tipo para as mensagens a serem armazenadas
interface Message {
  user: string;
  content: string;
}

// Array que armazenará as mensagens
const messages: Message[] = [];

/**
 * Rota POST para o caminho '/post-message'.
 * Recebe uma requisição com um objeto contendo o usuário e o conteúdo da mensagem.
 * Armazena a mensagem no array de mensagens e responde com um JSON indicando sucesso.
 * @param req - A requisição HTTP.
 * @param res - A resposta HTTP.
 */
app.post('/post-message', (req: Request<any, any, { user: string; content: string }>, res: Response<any>) => {
  // Extrai o usuário e o conteúdo da mensagem do corpo da requisição
  const { user, content } = req.body;

  // Armazena a mensagem no array de mensagens
  messages.push({ user, content });

  // Responde com um JSON indicando que a mensagem foi postada com sucesso
  res.status(200).json({ message: 'Mensagem postada com sucesso!' });
});

/**
 * Rota GET para o caminho '/messages'.
 * Retorna as mensagens armazenadas para exibição no frontend.
 * @param req - A requisição HTTP.
 * @param res - A resposta HTTP.
 */
app.get('/messages', (req: Request, res: Response) => {
  // Retorna as mensagens armazenadas para exibição no frontend
  res.json({ messages });
});

// Inicia o servidor na porta 3000 e imprime uma mensagem no console quando estiver pronto
export const server = app.listen(3000, () => {
  // console.log('Servidor iniciado na porta 3000');
});
