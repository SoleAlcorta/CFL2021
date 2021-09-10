let lector = require('readline-sync');
//leo el texto del usuario
let texto = lector.question('Ingrese el texto a evaluar: ');
//en letras estan todas las letras que me interesan
let letras='abcdefghijklmnopqrstuvwxyz';
//todasLasLetras me dice cuantas letras debo evaluar
let todasLasLetras=letras.length;
//en ocurrencias voy a guardar la ocurrencia de cada una
let ocurrencias = new Array(todasLasLetras);
//en cuantasLetras tengo la cantidad total de "letras"
let cuantasLetras = 0;

function inicializar(ocurrencias) {
//pongo en 0 todos los contadores, uno por cada letra.
    let indice;
    for (indice = 0; indice < ocurrencias.length; indice++) {
        ocurrencias[indice]=0;        
    }
}
function cuantasVecesEsta(texto,largo,letra) { 
    let ocurrencia=0;              
    for(let i=0; i<largo; i++){      
        if (texto[i]==letra)  {      
            ocurrencia++  
        }
    }
    return ocurrencia;
}
function contarLetras(letras,texto,ocurrencias) {
//esta funcion cuenta las ocurrencias de cada letra del arreglo letras en el texto guardando la ocurrencia de cada una en el arreglo ocurrencias
    let indice;
//unifico el texto a minusculas porque el arreglo de letras esta en minusculas
    let textoLocal = texto.toLowerCase();
//inicializo la cantidad total de letras
    let cantidadTotalLetras = 0;
//recorro letra por letra 
    for (indice = 0; indice < letras.length; indice++) {
//uso la funcion para contar cuantas veces esta cada letra en el texto
        ocurrencias[indice]=cuantasVecesEsta(textoLocal,textoLocal.length,letras[indice]);
//acumulo la ocurrencia de cada letra en el contador de letras totales
        cantidadTotalLetras+=ocurrencias[indice];
    }
//retorno el total de letras
    return cantidadTotalLetras;
}
function listado(letras,ocurrencias,totalLetras) {
//funcion que informa el resultado de la evaluacion
    let indice;
//primero el total de letras
    console.log('En el texto ingresado hay',totalLetras);
    for (indice = 0; indice < letras.length; indice++) {
        if (ocurrencias[indice] != 0) {
//luego cada letra con su cantidad y probabilidad
            console.log('la letra',letras[indice],'aparece',ocurrencias[indice],'con una probabilidad de',ocurrencias[indice]/totalLetras);
        }
    }
}

inicializar(ocurrencias);
cuantasLetras=contarLetras(letras,texto,ocurrencias);
listado(letras,ocurrencias,cuantasLetras);
