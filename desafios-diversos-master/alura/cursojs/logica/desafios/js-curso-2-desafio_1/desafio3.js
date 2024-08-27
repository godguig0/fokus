function IMC(altura, peso) {
  return altura / peso;
}
console.log(parseFloat(IMC(181, 84).toFixed(2)));

let resultado = 1
function fatorial(num) {
  for (let i = 2; i <= num; i++) {
        resultado *= i;
  }
  return resultado;
}

console.log(fatorial(5));

function converteDolar(valor) {
    return valor * 4.8;
}

console.log(converteDolar(100));

function area(altura, largura) {
    let perimetro = (altura + largura) * 2;
    let area = altura*largura;
    console.log(`A área é: ${area}\n o perímetro é: ${perimetro}`)
}

area(5,4);

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  

 mostrarTabuada(7);
