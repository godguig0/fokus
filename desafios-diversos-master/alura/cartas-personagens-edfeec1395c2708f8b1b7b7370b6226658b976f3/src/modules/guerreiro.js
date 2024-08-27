import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
  static tipo = "Guerreiro";
  static descricao = "Você será esmagado pela fúria do Guerreiro!";
  forca;

  constructor(nome, level, forca) {
    super(nome, level);
    this.forca = forca;
  }
  obterInsignia() {
    if (super.level >= 7 && this.forca >= 5) {
      return `${super.nome} guerreiro furioso`;
    }
    return super.obterInsignia();
  }
}
