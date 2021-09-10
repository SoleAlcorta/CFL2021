let readlineSync = require('readline-sync');
let dimensionArray = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arrayUsuario = new Array(dimensionArray);
let arrayInvertido = new Array(dimensionArray);
let i=0;
let indice=0;
for (i=0; i<dimensionArray; i++) {
    arrayUsuario[i] = readlineSync.questionInt("Ingrese un numero: ");
}
while (dimensionArray >=0) { //Esto es mejor con un for.
    arrayInvertido[indice] = arrayUsuario[dimensionArray];
    indice=indice+1;
    dimensionArray = dimensionArray-1;
}
console.log(arrayUsuario);
console.log(arrayInvertido);//Ojo, recordar que habia que restarle 1. Por eso no sale.
