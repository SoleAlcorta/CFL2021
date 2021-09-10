let readlineSync = require('readline-sync');
let dia = readlineSync.questionInt("Ingrese un dia: ");
let mes = readlineSync.questionInt("Ingrese un mes: ");
let año = readlineSync.questionInt("Ingrese año: ");

let añoActual = new Array(3);
añoActual[0] = 31;
añoActual[1] = 12;
añoActual[2] = año;

let datosUsuario = new Array(2);
