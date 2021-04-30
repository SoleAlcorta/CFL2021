let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("Ingrese un numero: ");
function cantidaDeDivisores(n) {
    let contador, x;
    sumatoria = 0;
    for (contador=1; contador<=n; contador++) {
        x = n%contador;
        if (x == 0) {
            sumatoria = sumatoria+1;
        }
    }
    return sumatoria;
}
let cantidadDivisores = cantidaDeDivisores (numero);
console.log(cantidadDivisores);