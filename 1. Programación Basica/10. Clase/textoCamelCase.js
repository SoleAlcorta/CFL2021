//ignoro espacios y hago algo con lo que esta despues del espacio.
let readlineSync =require('readline-sync');
let palabrasIngresadas = readlineSync.question("Ingrese un texto: ");
let cantidad = palabrasIngresadas.length;
let palabrasConvertir = new Array(cantidad);

function conversion(v, cantidad) {
    let indice;
    let swap;
    for (indice=0; indice<cantidad; indice++) {
        if (palabrasConvertir[indice] == " ") {
            palabrasConvertir[indice] = palabrasConvertir[indice+1].toUpperCase();
        }//Venia bien esto
    }
}

conversion(palabrasConvertir, cantidad);
console.log("El texto en formato CamelCase es: ", conversion(palabrasConvertir, cantidad));