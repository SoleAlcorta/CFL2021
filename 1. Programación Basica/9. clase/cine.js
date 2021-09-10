let readlineSync = require('readline-sync');
let butacas = readlineSync.questionInt("Ingrese la cantidad de butacas: ");
let ocupacionButacas = new Array(butacas);

function cargarArreglo(v, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        v[indice] = readlineSync.question("La butaca numero "+indice+" esta ocupada?: ");
    }
}

function mostrarArreglo(v, cantidad) {
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        if (v[indice] == "si") {
            console.log("La butaca numero", indice, "esta ocupada:", true);
        } else console.log("La butaca numero", indice, "esta ocupada:", false); 
    }
}

cargarArreglo(ocupacionButacas, butacas);   
mostrarArreglo(ocupacionButacas, butacas); 
//console.log(ocupacionButacas);
