let readlineSync = require('readline-sync');
let paraProm = 0; 
let maximo = 0;
let minimo = 1;
let contador = 0;
let numero = readlineSync.questionInt("Ingrese numero: ");
while (numero !=0) {
    if (numero > maximo) {
        maximo = numero
    } else if (numero < minimo) {
        minimo = numero
    }
    paraProm = paraProm + numero
    contador = contador+1
    numero = readlineSync.questionInt("Ingrese numero: ");
}
console.log("El maximo es: ", maximo);
console.log("El minimo es: ", minimo);
console.log("El promedio es: ", paraProm/contador);