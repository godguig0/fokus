import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoBoss = new Mago("Boss", 10, "fogo", 5, 4);
const magoJulia = new Mago("Julia", 8, "gelo", 7, 10);
const arqueiroRod = new Arqueiro("Rod", 10, 10);
const arqueiroMagoDouglas = new ArqueiroMago("Douglas", 7, 10, "ar", 4, 8);
const guerreiroGlauco = new Guerreiro("Glauco", 12, 32);


const personagens = [magoBoss, magoJulia, arqueiroRod, arqueiroMagoDouglas, guerreiroGlauco];

new PersonagemView(personagens).render();

console.log(Personagem.verificarVencedor(arqueiroRod, arqueiroMagoDouglas))