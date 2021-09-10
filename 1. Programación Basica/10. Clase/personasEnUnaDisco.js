let personasDisco = new Array(270);
let indice=0;
let contador=0;
let contador2=0;

function cargarArreglo(v, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        v[indice] = aleatorio(19, 40);
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (indice=0; indice<cantidad; indice++) {
    if (personasDisco[indice] <= 20) {
        contador++;
    } else if (personasDisco[indice] >=21) {
        contador2++; //Oja, alcanza con restar la cantidad de menores al total
    }

cargarArreglo(personasDisco, 270);
console.log(personasDisco);