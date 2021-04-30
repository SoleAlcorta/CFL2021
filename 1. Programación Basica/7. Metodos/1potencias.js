let readlineSync = require('readline-sync');
let base = readlineSync.questionInt("Ingrese BASE: ");
let exponente = readlineSync.questionInt("Ingrese EXPONENTE: ");
function potencia (b, e) {
    let contador=1;
    let resultado = b;
    for (b>=0; contador<e; contador++) {
        resultado = resultado*b
    }
    return resultado;
}
let resultado = potencia(base, exponente);
console.log("El resultado es: ", resultado);