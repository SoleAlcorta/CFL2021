let readlineSync = require('readline-sync');
let arreglo1 = new Array(6);
let arreglo2 = new Array(6);
let arraySuma = new Array(6);
let i;
for (i=0; i<6; i++) {
    arreglo1[i] = readlineSync.questionInt("Ingrese un numero a almacenar en el PRIMER arreglo: ");
}
for (i=0; i<6; i++) {
    arreglo2[i] = readlineSync.questionInt("Ingrese un numero a almacenar en el SEGUNDO arreglo: ");
}
for (i=0; i<6; i++) {
    arraySuma[i] = arreglo1[i] + arreglo2[i];
}
console.log("Los elementos del primer arreglo son: ", arreglo1);
console.log("Los elementos del segundo arreglo son: ", arreglo2);
console.log("Los elementos obtenidos a partir de la suma de los 2 arreglos anteriores son: ", arraySuma);