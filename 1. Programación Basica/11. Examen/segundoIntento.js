let readlineSync =require('readline-sync');
let texto = readlineSync.question("Ingrese un texto: ");
let cantidad = texto.length;

//let arreglo = new Array (cantidad);
let resultados = new Array (cantidad);

let ocurrencia;
let i=0;
while (i<cantidad) {
    compararUnCaracter(texto[i], cantidad, resultados)
    i++;
    ocurrencia=0;
}

function compararUnCaracter (x, i, cant, guardar) {
    let indice, ocurrencia;
    for (indice=0; indice<cant; indice++) {
        if (x[i] == x[indice]) {
            ocurrencia++;
        }
    }
    guardar[indice] = ocurrencia; 
    return guardar[indice];
}

function cargarArreglo(v, cant) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        v[indice] = guardar[indice]
    }
}

console.log(cargarArreglo(resultados, cantidad));

