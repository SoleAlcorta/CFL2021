let readlineSync = require('readline-sync');
console.log("TABLA DE MULTIPLICACION")
let numero = readlineSync.questionInt("Ingrese el numero: ");
let numeroLimite = readlineSync.questionInt("Ingrese hasta que numero:");
let multiplicar = 1;
while (multiplicar <= numeroLimite) {
    console.log(numero, "x", multiplicar, "=", numero*multiplicar);
    multipicar=multiplicar++;
}