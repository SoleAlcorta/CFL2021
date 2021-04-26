let readlineSync = require('readline-sync');
let clave = "eureka";
let cantClave = 1;
//Solicito la clave
let claveIngresada = readlineSync.question("Ingrese la clave: ");
//Si la clave no es correcta, inicio el ciclo
while (claveIngresada != clave && cantClave<3) {
    //Aviso que la clave no es correcta
    console.log("Clave Incorrecta");
    //Contador
    cantClave = cantClave + 1
    //Actualizo la variable claveIngresada
    claveIngresada = readlineSync.question("Ingrese la clave: ")
} /* Si la clave es correcta salgo del ciclo.
Si se agotaron los intentos doy aviso*/
if (claveIngresada != clave) {
    console.log("Ud. ha agotado los intentos.")
} 