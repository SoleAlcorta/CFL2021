let lector = require('readline-sync');
//leo el texto del usuario
let texto = lector.question('Ingrese el texto a evaluar: ');
//en letras estan todas las letras que me interesan
let letras='abcdefghijklmnñopqrstuvwxyz';
//let letras = lector.question('Indique que letras desea contar: ');
let vocalesAcentuadas='áéíóú';
let vocalesNoAcentuadas='aeiou';
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
function quitarAcentos(texto,vocalesAcentuadas,vocalesNoAcentuadas) {
    let textoSinAcentos="";
    for(let i=0; i<texto.length; i++){
        if (texto[i]==vocalesAcentuadas[0]) {
            textoSinAcentos+=vocalesNoAcentuadas[0];
        } else {
            if (texto[i]==vocalesAcentuadas[1]) {
                textoSinAcentos+=vocalesNoAcentuadas[1];
            } else {
                if (texto[i]==vocalesAcentuadas[2]) {
                    textoSinAcentos+=vocalesNoAcentuadas[2];
                } else {
                    if (texto[i]==vocalesAcentuadas[3]) {
                        textoSinAcentos+=vocalesNoAcentuadas[3];
                    } else {
                        if (texto[i]==vocalesAcentuadas[4]) {
                            textoSinAcentos+=vocalesNoAcentuadas[4];
                        } else {
                            textoSinAcentos+=texto[i];
                        }
                    }
                }
            }
        }
    }
    return textoSinAcentos;    
}
function contarLetras(letras,texto,ocurrencias,vocalesAcentuadas,vocalesNoAcentuadas) {
//esta funcion cuenta las ocurrencias de cada letra del arreglo letras en el texto
    let indice;
//unifico el texto a minusculas porque el arreglo de letras esta en minusculas
    let textoConAcentos = texto.toLowerCase();
//con la funcion quitarAcentos reemplazo las vocales acentuadas por no acentuadas
    let textoLocal = quitarAcentos(textoConAcentos,vocalesAcentuadas,vocalesNoAcentuadas);
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
cuantasLetras=contarLetras(letras,texto,ocurrencias,vocalesAcentuadas,vocalesNoAcentuadas);
listado(letras,ocurrencias,cuantasLetras);
