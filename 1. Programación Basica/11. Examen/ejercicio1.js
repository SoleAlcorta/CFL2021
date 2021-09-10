let readlineSync =require('readline-sync');
let texto = readlineSync.question("Ingrese un texto: ");
let cantidad = texto.length;

let arreglo = new Array (cantidad);


/*function contarLetras(palabras) {
    let cantidadLetras = texto.length;
    let indice;
    let letra;
    let contadorLetra; 
    /*for (indice=0; indice<cantidadLetras; indice++) {
        if (palabras[indice] == palabras[indice+1]) {
            contadorLetra++

        }
    while (palabras[indice]<cantidadLetras) {
        palabra[indice]
    }
    }

        
    }
}

function mostrarArreglo (v, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        console.log(v[indice])
    }
}*/

//mostrarArreglo(arreglo, cantidad);

/*function compararCaracter(palabras) {
    let indice = 0;
    let otroIndice = 0
    let cantidadLetras = palabras.length;
    let repite, aparece;
    while (palabras[indice]<cantidadLetras) {
        if (palabras[indice] == palabras[otroIndice]) { 
            repite = palabra[indice];
            aparece++;
        }
    }
}*/

//function compararCaracteres(palabras, cantidadLetras) {
    let ocurrencia;
    let i=0;
    while (i<cantidad) {
        compararUnCaracter(texto[i], cantidad)
        i++;
        ocurrencia=0;
    }
    //return compararUnCaracter(palabras[i], cantidadLetras)
//}

function compararUnCaracter (x, i, cant) {
    let indice, ocurrencia;
    for (indice=0; indice<cant; indice++) {
        if (x[i] == x[indice]) {
            ocurrencia++;
        }
    return console.log("Cantidad de veces que aparece la letra", x[i], ":", ocurrencia)
    }
}

compararUnCaracter(texto, cantidad);
