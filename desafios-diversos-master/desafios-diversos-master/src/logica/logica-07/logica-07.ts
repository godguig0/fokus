/**
 * Crie uma função de acordo com as instruções contidas no README.md
 */
export function logica07(fatorial:number) {

if (typeof fatorial =='number' && fatorial > 0) {
    let produto = 1;   

    for (let i = 1; i <= fatorial; i++) {
    produto *= i;
    }
    return produto; ;
}
if (fatorial == 0){
    return 1;
}
}
