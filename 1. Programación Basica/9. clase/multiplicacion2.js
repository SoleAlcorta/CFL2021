let readlineSync =require('readline-sync');
let dimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arreglo1 = new Array(dimension);
let arreglo2 = new Array(dimension);
let arreglo3 = new Array(dimension);
let arreglo4 = new Array(dimension);
let vResultado = new Array(dimension);

function cargarVector(v, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        v[indice] = readlineSync.question("Ingrese un valor: ");
    }
}

function multiplicarArreglo(v1, v2, v3, v4, v5, cantidad) {
    let indice;
    for (indice=0; indice<cantidad;indice++) {
        v5[indice] = v1[indice]*v2[indice]*v3[indice]*v4[indice];
    }
} 

console.log("CARGANDO ARREGLO 1")
cargarVector(arreglo1, dimension);
console.log("CARGANDO ARREGLO 2");
cargarVector(arreglo2, dimension);
console.log("CARGANDO ARREGLO 3");
cargarVector(arreglo3, dimension);
console.log("CARGANDO ARREGLO 4");
cargarVector(arreglo4, dimension);
multiplicarArreglo(arreglo1, arreglo2, arreglo3, arreglo4, vResultado, dimension);
console.log("Los resultados son", vResultado);