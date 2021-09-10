let readlineSync =require('readline-sync');
let dimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ")
let arreglo1 = new Array(dimension);
let arreglo2 = new Array(dimension);
let suma = new Array(dimension);

function cargarArreglo(v, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        v[indice] = aleatorio(1, 50);
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function sumarArreglo(v1, v2, v3, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        v3[indice] = v1[indice] + v2[indice];
    }
}

function mostrarArreglo(v1, v2, v3, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        console.log(v1[indice], "+", v2[indice], "=", v3[indice]);
    }
}

console.log("CARGANDO ARREGLOS...");
cargarArreglo(arreglo1, dimension);
cargarArreglo(arreglo2, dimension);
sumarArreglo(arreglo1, arreglo2, suma, dimension);
mostrarArreglo(arreglo1, arreglo2, suma, dimension);