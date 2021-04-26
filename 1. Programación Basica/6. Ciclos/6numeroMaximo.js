let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("Ingrese un numero: ")
let numMayor = 1;
while (numero !=0) {
    if (numero > numMayor) {
        numMayor = numero
    }
    numero = readlineSync.questionInt("Ingrese un numero: ");
}
console.log("El maximo es: ", numMayor)