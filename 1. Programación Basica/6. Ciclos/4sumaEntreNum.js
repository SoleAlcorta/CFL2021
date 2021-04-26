let readlineSync = require('readline-sync');
let numero1 = readlineSync.questionInt("Ingrese el 1er numero: ");
let numero2 = readlineSync.questionInt("Ingrese el 2do numero: ");
let suma = 0;
if (numero1 == numero2) {
    console.log(numero1, " = ", numero2);
} else {
    if (numero1 < numero2) {
        while (numero1 <= numero2) {
            console.log(numero1, " + ");
            suma = suma+numero1;
            numero1 = numero1+1;
        }
        console.log("= ", suma)
    } else {
        while (numero1 >= numero2) {
            console.log(numero1, " + ");
            suma = suma+numero1;
            numero1 = numero1-1
        }
        console.log("= ",suma)
    }
}