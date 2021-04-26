let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("Ingrese un numero: ");
while (numero == 0) {
    console.log("El numero ingresado no es par ni impar");
    numero = readlineSync.questionInt("Ingrese un numero mayor a 0: ")
} if (numero % 2 == 0) {
    console.log("El numero ingresado es PAR.");
        } else {
            console.log("El numero ingresado es IMPAR")
        }