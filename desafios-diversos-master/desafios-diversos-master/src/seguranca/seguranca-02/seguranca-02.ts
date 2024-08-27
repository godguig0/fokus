// Importa o framework Express e a interface Request do módulo 'express'
import express, { Request } from 'express';

// Importa o middleware body-parser para processar o corpo das requisições HTTP
import bodyParser from 'body-parser';

// Importa o módulo sqlite3 para interagir com o SQLite (banco de dados)
import sqlite3 from 'sqlite3';

// Cria uma instância do Express
const app = express();

// Utiliza o middleware body-parser para analisar o corpo das requisições como JSON
app.use(bodyParser.json());


// Cria um banco de dados em memória usando o SQLite
const db = new sqlite3.Database(':memory:');


// Verificar em tempo de execução a query que está sendo executada.
//db.on('trace', (sql: any) => {
//    console.log('Query executada:', sql);
//});

// Cria uma tabela de usuários no banco de dados (apenas para fins de exemplo)
db.serialize(() => {
    db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)');
    db.run('INSERT INTO users (username, password) VALUES ("admin", "admin")');
    db.run('INSERT INTO users (username, password) VALUES ("user", "pass")');
});

// Define uma rota GET para o caminho '/'
app.get('/', (req: Request<any, any, any>, res: any) => {
    // Responde com um JSON indicando que o servidor está em execução
    res.status(200).json({ message: 'Exercício 04 em execução' });
});

app.get('/users', (req: any, res: any) => {
    // Utiliza uma consulta parametrizada para evitar injeção de SQL
    const query = 'SELECT * FROM users';
    db.all(query, (err: any, rows: any) => {
        if (err) {
            // Em caso de erro interno no servidor, retorna um status 500 e uma mensagem JSON
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        if (rows) {
            const resposta: any = [];
            rows.forEach((row: any) => {
                resposta.push(row);    // and other columns, if desired
            })
            res.json(resposta);
        } else {
            // Se a consulta não retornar uma linha, significa credenciais inválidas
            res.status(404).json({ error: 'Sem usuários' });
        }
    });
});

// Define uma rota POST para o caminho '/login'
app.post('/login', (req: any, res: any) => {
    // Extrai o username e password do corpo da requisição
    const { username, password } = req.body;

    // Utiliza uma consulta parametrizada para evitar injeção de SQL
    const query = "SELECT * FROM users WHERE username='" + username +  "' AND password='" + password + "'";

    // Executa a consulta no banco de dados SQLite, passando os parâmetros
    db.get(query, (err, row) => {
        if (err) {
            // Em caso de erro interno no servidor, retorna um status 500 e uma mensagem JSON
            return res.status(500).json({ error: 'Erro interno do servidor - ' + err.message });
        }

        if (row) {
            // Se a consulta retornar uma linha, significa que o login foi bem-sucedido
            res.json({ message: 'Login bem-sucedido!' });
        } else {
            // Se a consulta não retornar uma linha, significa credenciais inválidas
            res.status(401).json({ error: 'Credenciais inválidas' });
        }
    });
});

// Inicia o servidor na porta 3000 e imprime uma mensagem no console quando estiver pronto
export const server = app.listen(3001, () => {
    // console.log('Servidor iniciado na porta 3001');
});
