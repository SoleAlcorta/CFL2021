"use strick";


// function arrojarDado(numeroDado) {
//     let numero = aleatorio(1, 6);
//     document.getElementById(numeroDado).innerHTML = numero;
// }

// function aleatorio (menorValor, mayorValor) {
//     return Math.floor(Math.random() * (mayorValor - menorValor)) + 1;
// }

let dado1 = new Array(1000);
let dado2 = new Array(1000);
let sumaDados = new Array(1000);


function cargarArreglo(v) {
    let indice;
    for (indice=0; indice<1000; indice++) {
        v[indice] = aleatorio(1, 6);
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function sumarArreglo(v1, v2, v3) {
    let indice, contador;
    for (indice=0; indice<1000; indice++) {
        v3[indice] = v1[indice] + v2[indice];
    }
}

function recorrerArreglo (v3) {
    let contador = 0;
    let indice;
    for (indice=0; indice<1000; indice++) {
        if (v3[indice] === 7) {
            contador ++;
        }
    }
    return contador
}

function arrojarDados() {
    cargarArreglo(dado1);
    cargarArreglo(dado2);
    sumarArreglo(dado1, dado2, sumaDados);
    let veces7 = (recorrerArreglo(sumaDados));
    document.getElementById('veces7').innerHTML = "El numero 7 salió " + veces7; 
}
