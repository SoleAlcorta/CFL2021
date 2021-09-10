"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var RLS = __importStar(require("readline-sync"));
var FS = __importStar(require("fs"));
//estructura para las palabras
var palabras = new Array();
//funciones CRUD
function addPalabra(palabra) {
    palabras.push(palabra);
}
function findPalabra(palabra) {
    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i] == palabra) {
            return i;
        }
    }
    return -1;
}
function updPalabra(palabraOriginal, palabraReemplazo) {
    var posicion = findPalabra(palabraOriginal);
    if (posicion != -1) {
        palabras[posicion] = palabraReemplazo;
    }
}
function delPalabra(palabra) {
    var posicion = findPalabra(palabra);
    if (posicion != -1) {
        palabras.splice(posicion, 1);
    }
}
//funcion para mostrar el contenido del arreglo
function mostrarPalabras() {
    console.log(palabras);
}
//funcion para leer palabras desde teclado
function leerPalabras() {
    var palabra = RLS.question('Ingrese una palabra, enter para finalizar: ');
    while (palabra.trim() != '') {
        palabras.push(palabra);
        palabra = RLS.question('Ingrese una palabra, enter para finalizar: ');
    }
}
//funcion para leer palabras desde archivo
function leerPalabrasArchivo() {
    var texto = FS.readFileSync('palabras.txt', 'utf8');
    palabras = texto.split(';');
}
//Principal
leerPalabrasArchivo();
mostrarPalabras();
//menu de opciones CRUD
var opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
var palabra;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            palabra = RLS.question('Ingrese la palabra a agregar: ');
            addPalabra(palabra);
            break;
        }
        case 'R': {
            palabra = RLS.question('Ingrese la palabra a buscar: ');
            console.log("Encontre la palabra en la posicion " + findPalabra(palabra) + ".");
            break;
        }
        case 'U': {
            var palabra1 = RLS.question('Ingrese la palabra a buscar: ');
            var palabra2 = RLS.question('Ingrese la palabra que la reeplaza: ');
            updPalabra(palabra1, palabra2);
            break;
        }
        case 'D': {
            palabra = RLS.question('Ingrese la palabra a eliminar: ');
            delPalabra(palabra);
            break;
        }
    }
    mostrarPalabras();
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
}
