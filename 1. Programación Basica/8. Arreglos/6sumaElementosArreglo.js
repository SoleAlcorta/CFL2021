let readlineSync = require('readline-sync');
let dimensionArreglo = readlineSync.questionInt("Ingrese la dimension del Arreglo: ");
let arregloUsuario = new Array(dimensionArreglo);
let indice=0;
let sumatoria=0;
let i;
for (indice=0; indice<dimensionArreglo; indice++) {
    arregloUsuario[indice] = readlineSync.questionInt("Ingrese un numero: ");
    sumatoria = sumatoria+arregloUsuario[indice];
}
for (i=0; i<dimensionArreglo; i++) {
    console.log("El numero ingresado en la posición", i, "es:", arregloUsuario[i]);
}
console.log("La suma de todos los elementos del arreglo es:", sumatoria);
