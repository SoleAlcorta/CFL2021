let readlineSync = require("readline-sync");
let alturaPermitida = 1.80;
let alturaPersona = readlineSync.questionFloat("Ingrese su altura: ");
if (alturaPersona >= alturaPermitida){
    console.log("Usted puede ingresar al parque.")
} else {
    console.log("Usted no puede ingresar al parque.")
}