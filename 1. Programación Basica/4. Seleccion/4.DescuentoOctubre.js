let readlineSync = require('readline-sync');
let precioFinal = readlineSync.questionFloat("Ingrese el precio final: $");
let fechaNacimiento = readlineSync.question("En que mes cumple años? ");
let descontar = 15*precioFinal/100;
let descuentOctubre = precioFinal - descontar; 
if (fechaNacimiento == "octubre") {
    console.log("Usted tiene un 15% de descuento!");
    console.log("El total a pagar es de: ", descuentOctubre)
} else {
    console.log("Usted no tiene descuento.");
    console.log("El total a pagar es:", precioFinal)
}