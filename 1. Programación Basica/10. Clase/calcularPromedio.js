let readlineSync = require('readline-sync');
let cantidadChicxs = readlineSync.questionInt("Cuantos chicxs hay en el equipo?: ");
let edades = new Array (cantidadChicxs);
let promedio = 0;

function cargarArreglo(v, cantidad) {
    let indice;
    promedio;
    for (indice=0; indice<cantidad; indice++) {
        v[indice] = aleatorio(3, 7);
        promedio = promedio + v[indice];
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max - min + 1))+min;
}

function mostrarArreglo (v, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        console.log(v[indice])
    }
}

console.log("Las edades de lxs chicxs, son las siguientes: ");
cargarArreglo(edades, cantidadChicxs);
mostrarArreglo (edades, cantidadChicxs);
console.log("El promedio de edades es: ", promedio/cantidadChicxs);
