import express from 'express';
import responseTime from "response-time"
const sqlite3 = require('sqlite3').verbose();


export const app = express();
const port_bd01 = 3003;

app.use(responseTime());

// Configuração do banco de dados SQLite
export const db = new sqlite3.Database(':memory:'); // Use ":memory:" para um banco de dados temporário em memória

// Criação das tabelas e dados de exemplo
db.serialize(() => {
  db.run(`
    CREATE TABLE produtos (
      id INTEGER PRIMARY KEY,
      nome TEXT,
      preco REAL
    )
  `);

  db.run(`
    CREATE TABLE pedidos (
      id INTEGER PRIMARY KEY,
      cliente TEXT
    )
  `);

  db.run(`
    CREATE TABLE detalhes_pedidos (
      id INTEGER PRIMARY KEY,
      pedido_id INTEGER,
      produto_id INTEGER,
      quantidade INTEGER,
      FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
      FOREIGN KEY (produto_id) REFERENCES produtos(id)
    )
  `);

  // Inserção de dados de exemplo
  const produtos = [
    { nome: 'Produto A', preco: 50.0 },
    { nome: 'Produto B', preco: 30.0 },
    // Adicione mais produtos conforme necessário
  ];

  const pedidos = [
    { cliente: 'Cliente 1' },
    { cliente: 'Cliente 2' },
    // Adicione mais pedidos conforme necessário
  ];

  const detalhesPedidos = [
    { pedido_id: 1, produto_id: 1, quantidade: 2 },
    { pedido_id: 1, produto_id: 2, quantidade: 1 },
    // Adicione mais detalhes de pedidos conforme necessário
  ];

  const insertData = (table: string, data: any[]) => {
    const placeholders = Object.keys(data[0]).map(() => '?').join(',');
    const stmt = db.prepare(`INSERT INTO ${table} VALUES (NULL, ${placeholders})`);

    data.forEach((item) => stmt.run(Object.values(item)));

    stmt.finalize();
  };

  insertData('produtos', produtos);
  insertData('pedidos', pedidos);
  insertData('detalhes_pedidos', detalhesPedidos);
});

// Rota para a consulta original
app.get('/consulta-original', (req: any, res: any) => {
  const consulta = `
    SELECT pedidos.id AS pedido_id, pedidos.cliente, produtos.nome AS produto, detalhes_pedidos.quantidade
    FROM pedidos
    JOIN detalhes_pedidos ON pedidos.id = detalhes_pedidos.pedido_id
    JOIN produtos ON detalhes_pedidos.produto_id = produtos.id
  `;

  db.all(consulta, (err: any, rows: any) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    res.json(rows);
  });
});

// Rota para a consulta otimizada
app.get('/consulta-otimizada', (req: any, res: any) => {

  // >>>>>>>>>>>>>>>>>> IMPLEMENTE A CONSULTA OTIMIZADA AQUI

});

// Inicie o servidor
export const server = app.listen(port_bd01, () => {
  console.log(`Servidor iniciado em http://localhost:${port_bd01}`);
});
