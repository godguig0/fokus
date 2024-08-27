let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarCliqueConsole() {
    console.log('O botão foi clicado');
}

function botaoAlerta() {
    alert('Eu AMO JS');
}

function botaoPrompt() {
    let botaoPrompt = prompt('Escreva o nome de uma cidade no Brasil')
    alert(`Estive em ${botaoPrompt} e lembrei de vc`)
}

function botaoSoma() {
    let a = parseInt(prompt('digite o 1º num'));
    let b = parseInt(prompt('digite o 2º num'));
    
    alert(`${a + b}`);
}


