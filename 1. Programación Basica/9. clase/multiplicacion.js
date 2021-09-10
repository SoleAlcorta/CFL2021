let readlineSync =require('readline-sync');
let dimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arreglo1 = new Array(dimension);
let arreglo2 = new Array(dimension);
let multiplicacion = new Array(dimension);

function cargarVector(v, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        v[indice] = readlineSync.question("Ingrese un valor: ");
    }
}

function multiplicarArreglo(v1, v2, v3, cantidad) {
    let indice;
    for (indice=0; indice<cantidad;indice++) {
        v3[indice] = v1[indice]*v2[indice];
    }
} 
console.log("CARGANDO ARREGLO 1")
cargarVector(arreglo1, dimension);
console.log("CARGANDO ARREGLO 2");
cargarVector(arreglo2, dimension);
multiplicarArreglo(arreglo1, arreglo2, multiplicacion, dimension);
console.log("Los resultados son", multiplicacion);