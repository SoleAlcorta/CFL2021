let readlineSync=require('readline-sync');
let primerNumero = readlineSync.questionFloat("Ingrese un numero: ");
let segundoNumero = readlineSync.questionFloat("Ingrese otro numero: ");
function esMultiplo (x, y) {
    let responder;
    let resto = x%y;
    if (resto == 0) {
        responder = "Verdadero";    
    } else {
        responder = "Falso";
    }
    return responder
} 
let final = esMultiplo(primerNumero, segundoNumero);
console.log(primerNumero, "es multiplo de", segundoNumero, ":", final);