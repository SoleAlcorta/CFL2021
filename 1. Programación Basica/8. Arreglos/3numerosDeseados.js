let readlineSync = require('readline-sync');
let num = new Array (5);
let indice=0;
num[0] = readlineSync.questionInt("Ingrese un numero: ");
num[1] = readlineSync.questionInt("Ingrese un numero: ");
num[2] = readlineSync.questionInt("Ingrese un numero: ");
num[3] = readlineSync.questionInt("Ingrese un numero: ");
num[4] = readlineSync.questionInt("Ingrese un numero: ");
while(indice<5) {
    console.log("El numero en la posicion es", indice, "es", num[indice]);
    indice++;
}