let readlineSync = require('readline-sync');
let dimensionArreglo = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arregloNombres = new Array(dimensionArreglo);
let indice = 0;
for (indice=0; indice<dimensionArreglo; indice++) {
    let nombre = readlineSync.question("Ingrese un numbre: ");
    arregloNombres[indice] = nombre;
}
for (indice=0; indice<dimensionArreglo; indice++) {
    console.log("El nombre ingresado en el indice", indice, "es:", arregloNombres[indice]);
}