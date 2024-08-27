/**
 * Crie uma função de acordo com as instruções contidas no README.md
 */
export function logica01(degrau) {
  if (degrau < 1 || degrau > 100) {
    console.error('Erro, 1 <= n <=100');
    return 0;
  }
  let escada = [];
  for (let i = 1; i <= degrau; i++) {
    let espaco = "";
    let hashtag = "";
    for (let j = 0; j < degrau - i; j++) {
      espaco += " ";
    }
    for (let k = 0; k < i; k++) {
      hashtag += "#";
    }
    let linha = espaco + hashtag;
    escada.push(linha);
  }
  console.log(escada);
  return escada;
}
logica01(32);
