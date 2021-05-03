let readlineSync = require('readline-sync');
let n = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let arrayUsuario = new Array(n);
let i;
let ceros=0;
let positivos=0;
let negativos=0;
for (i=0; i<n; i++) {
    arrayUsuario[i] = readlineSync.questionInt("Ingrese un numero: ");
    if (arrayUsuario[i] == 0) {
        ceros = ceros+1;
    } else if (arrayUsuario[i] < 0) {
        positivos = positivos + 1;
    } else {
        negativos = negativos + 1;
    }
}
console.log("La cantidad de numeros positivos es:", positivos);
console.log("La cantidad de numeros negativos es:", negativos);
console.log("La cantidad de ceros es:", ceros);