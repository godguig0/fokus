import e from "express";


export 
function logica03(entrada:string) {
 let resultado = true;
 if (entrada.includes("(")) {
    if (entrada.includes(")")) {
      console.log(resultado);
      return resultado;
    } else {
      resultado = false;
      console.log(resultado);
      return resultado;
    }
  }
  if (entrada.includes("[")) {
    if (entrada.includes("]")) {
      console.log(resultado);
      return resultado;
    } else {
      resultado = false;
      console.log(resultado);
      return resultado;
    }
  }
  if (entrada.includes("{")) {
    if (entrada.includes("}")) {
      console.log(resultado);
      return resultado;
    } else {
      resultado = false;
      console.log(resultado);
      return resultado;
    }
  }
}
logica03('7 * 3 + (32 + 12)');
