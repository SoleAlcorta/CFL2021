let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("Ingrese numero: ");
let contador = 0;
let paraProm = 0;
let porcentaje;
while (numero!=0) {
    if (numero >0) {
        paraProm = paraProm+1;
    }
    contador = contador+1;
    numero = readlineSync.questionInt("Ingrese numero: ");
}
porcentaje = (paraProm*100)/contador;
console.log(paraProm, "positivos,", porcentaje, "% del total");