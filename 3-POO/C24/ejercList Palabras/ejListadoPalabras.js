"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var cantPalabras = RLS.question("Cuantas palabras va a ingresar?: ");
var listaPalabras = new Array[cantPalabras];
function cargarPalabras(arreglo, cantidad) {
    for (var i = 0; i < cantidad; i++) {
        var palabra = RLS.question("Ingrese una palabra: ");
        this.arreglo[i] = palabra;
    }
    return listaPalabras;
}
cargarPalabras(listaPalabras, cantPalabras);
