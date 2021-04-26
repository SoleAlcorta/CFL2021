let readlineSync = require('readline-sync');
let primerNumero = readlineSync.questionInt("Ingrese un el primer numero: ");
let segundoNumero = readlineSync.questionInt("Ingrese el segundo numero: ");
let tercerNumero = readlineSync.questionInt("Ingrese el tercer numero: ");
let numeroMayor = primerNumero && segundoNumero && tercerNumero; 
if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log(primerNumero + " es el mayor de los 3 numeros.");
} else {
    if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
        console.log(segundoNumero + " es el mayor de los 3.");
    } else {
        if (tercerNumero > primerNumero && tercerNumero > segundoNumero) {
            console.log(tercerNumero + " es el mayor de los 3.")
        }
    }
}