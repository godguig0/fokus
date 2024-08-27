// spreadObjeto.js
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "Prata",
  ligado: false // Nova propriedade indicando o estado do carro (ligado/desligado)
};

const carroNovo = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2023,
  cor: "Azul"
};

// Utilize o operador spread para criar um novo objeto com as propriedades de carro e carroNovo
const carroComNovosDetalhes = { ...carro, ...carroNovo };

// Imprima no console o objeto carroComNovosDetalhes
console.log("Carro com Novos Detalhes:");
console.log(carroComNovosDetalhes);

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes
carroComNovosDetalhes.modelo = "Accord";

// Imprima novamente no console o objeto carroComNovosDetalhes
console.log("\nCarro com Detalhes Modificados:");
console.log(carroComNovosDetalhes);
