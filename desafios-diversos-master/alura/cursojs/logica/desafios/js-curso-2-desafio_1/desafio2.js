function ola() {
    return console.log('Olá mundo')
}
ola();
function nome(nome) {
    return console.log(`Olá ${nome}`)
}
nome('Rod');

function dobro(num) {
    return console.log(num * 2);
}
dobro(16)

function media(num1,num2,num3) {
    soma = num1 + num2+ num3;
    return console.log(soma/3);
}

media (2,4,6)

function max(x1, x2) {
    if (x1 > x2) {
        return console.log(x1);
    }
    else {
        return console.log(x2);
    }
}

max(32, 4);

function multiplicacao(numero) {
    return console.log(numero*numero)
}
multiplicacao(3);
