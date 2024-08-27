// main.ts

import * as readline from 'readline';
import * as fs from 'fs/promises';
import * as events from 'events';

// Define a classe TaskManager para gerenciar tarefas
export class TaskManager extends events.EventEmitter {
  private tasks: string[] = [];

  // Adiciona uma tarefa
  async addTask(task: string): Promise<void> {
    await this.delay(500); // Simula uma operação assíncrona, como acesso ao banco de dados
    this.tasks.push(task);
    this.emit('taskAdded', task); // Emite um evento quando uma tarefa é adicionada
  }

  // Completa uma tarefa
  async completeTask(index: number): Promise<void> {
    await this.delay(300);
    const completedTask = this.tasks.splice(index, 1)[0];
    this.emit('taskCompleted', completedTask); // Emite um evento quando uma tarefa é concluída
  }

  // Lista todas as tarefas
  async listTasks(): Promise<string[]> {
    await this.delay(200);
    return [...this.tasks];
  }

  // Função utilitária para simular atraso em operações assíncronas
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Cria uma instância do gerenciador de tarefas
const taskManager = new TaskManager();

// Cria uma interface de leitura para interagir com o usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define uma função para iniciar a interação com o usuário
export async function startApp() {
  console.log('Bem-vindo ao Gerenciador de Tarefas!');

  // Registra um ouvinte de eventos para notificar quando uma tarefa é adicionada
  taskManager.on('taskAdded', task => {
    console.log(`Tarefa adicionada: ${task}`);
  });

  // Registra um ouvinte de eventos para notificar quando uma tarefa é concluída
  taskManager.on('taskCompleted', task => {
    console.log(`Tarefa concluída: ${task}`);
  });

  // Loop principal para interação contínua
  while (true) {
    const userInput = await askQuestion('O que você gostaria de fazer? (adicionar/completar/listar/sair): ');

    switch (userInput.toLowerCase()) {
      case 'adicionar':
        const newTask = await askQuestion('Digite a nova tarefa: ');
        await taskManager.addTask(newTask);
        break;
      case 'completar':
        const tasks = await taskManager.listTasks();
        if (tasks.length === 0) {
          console.log('Não há tarefas para completar.');
        } else {
          console.log('Lista de tarefas:');
          tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));

          const taskIndex = parseInt(await askQuestion('Digite o número da tarefa a ser concluída: '), 10) - 1;
          if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < tasks.length) {
            await taskManager.completeTask(taskIndex);
          } else {
            console.log('Índice inválido. Operação cancelada.');
          }
        }
        break;
      case 'listar':
        const taskList = await taskManager.listTasks();
        console.log('Lista de tarefas:');
        taskList.forEach((task, index) => console.log(`${index + 1}. ${task}`));
        break;
      case 'sair':
        rl.close();
        process.exit(0);
        break;
      default:
        console.log('Comando inválido. Tente novamente.');
    }
  }
}

// Função utilitária para fazer uma pergunta ao usuário e obter a resposta
function askQuestion(question: string): Promise<string> {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer);
    });
  });
}

// Inicia a interação com o usuário
startApp();
