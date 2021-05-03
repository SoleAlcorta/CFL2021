let readlineSync = require('readline-sync');
let nombres = new Array(2);
let numeros = new Array(3);
let indice = 0;
let i = 0;
nombres[0] = readlineSync.question("Ingrese un nombre: ");
nombres[1] = readlineSync.question("Ingrese un nombre: ");
numeros[0] = readlineSync.questionInt("Ingrese un numero: ");
numeros[1] = readlineSync.questionInt("Ingrese un numero: ");
numeros[2] = readlineSync.questionInt("Ingrese un numero: ");
while (indice < 2) {
    console.log("El nombre ingresado en la posición", indice, "es:", nombres[indice]);
    indice++;
}
while (i < 3) {
    console.log("El numero ingresado en la posicion", i, "es:", numeros[i]);
    i++;
}