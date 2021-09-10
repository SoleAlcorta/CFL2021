import * as RLS from "readline-sync";

let cantPalabras: number = RLS.question("Cuantas palabras va a ingresar?: ")

let listaPalabras: string = new Array[cantPalabras];

function cargarPalabras(arreglo, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        let palabra: string = RLS.question("Ingrese una palabra: ");
        this.arreglo[i] = palabra;
    }
    return listaPalabras;
}

cargarPalabras(listaPalabras, cantPalabras); 