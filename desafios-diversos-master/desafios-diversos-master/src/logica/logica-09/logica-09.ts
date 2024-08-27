/**
 * Crie uma função de acordo com as instruções contidas no README.md
 */
export function logica09(primo: number) {

let teste = 0;

if (primo <= 1) {
        return false;
}
if ((primo == 2) || (primo == 3)) {
    return true;
    }
for (let contador = 0; contador <= primo; contador++ ) {
    if (primo % contador == 0) {
            teste++; 
    }
}
if (teste == 2) {
    return true;
}
}    

