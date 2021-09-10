let readlineSync = require('readline-sync');
let n = readlineSync.questionInt("Ingrese la dimension del arreglo: ")
let arreglo1 = new Array(n);
let arreglo2 = new Array(n);
let producto = new Array(n)

function cargarArreglo(v, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        v[indice] = readlineSync.question("Ingrese un numero: ");
    }
}

function productoEscalar(v1, v2, v3, cantidad) {
    let i;
    let sumatoria=0;
    for (i=0; i<cantidad; i++) {
        v3[i]=v1[i]*v2[i];
        sumatoria = v3[i]+sumatoria;
    }
    return sumatoria;
}

console.log("Cargando ARREGLO 1");
cargarArreglo(arreglo1, n);
console.log("Cargando ARREGLO 2");
cargarArreglo(arreglo2, n);
console.log("El producto escalar es:", productoEscalar(arreglo1, arreglo2, producto, n));