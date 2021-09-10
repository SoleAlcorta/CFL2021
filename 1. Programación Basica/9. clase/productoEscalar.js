let readlineSync = require('readline-sync');
let n = readlineSync.questionInt("Ingrese la dimension del arreglo: ")
let arreglo1 = new Array(n);
let arreglo2 = new Array(n);

function cargarArreglo (x, cantidad) {
    let indice;
    for (indice=0; indice<=cantidad; indice++);
    x[indice]=readlineSync.questionInt("Ingrese el valor en: ", indice);
}

arreglo1 = cargarArreglo(arreglo1, n);
arreglo2 = cargarArreglo(arreglo2, n);

console.log(arreglo1, arreglo2)

