let readlineSync = require('readline-sync');

let palabra = readlineSync.question("Ingrese la palabra a invertir: ");
let cantidadLetras = palabra.length;

function mostrarVectorInvertido(v, cantidad) {
    let indice;
    for (indice=cantidad-1; indice >=0; indice--) {
        console.log(v[indice], " ");
    }
}

function invertirVector(v, cantidad) {
    let indiceIzq=0;
    let indiceDer=cantidad-1;
    let aux;
    while (indiceIzq<indiceDer) {
         aux=v[indiceIzq];
         v[indiceIzq]=v[indiceDer];
         v[indiceDer]=aux;
         indiceIzq++;
         indiceDer++;
    }
}

function mostrarVector(v, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        console.log(v[indice]);
    }
}

console.log("Mostrando invertido");
mostrarVectorInvertido(palabra, cantidadLetras);

console.log("Invierto los valores en el vector");
invertirVector(palabra, cantidadLetras);

console.log("Mostrando vector");
mostrarVector(palabra, cantidadLetras);
