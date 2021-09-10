let readlineSync = require('readline-sync');
let opcionMenu = readlineSync.questionInt("Numero: ");
let numero1 = 1;
let numero2 = 2;
if (opcionMenu == 1) {
    dibujar40guiones();
    console.log("El resultado de la operacion es: ", numero1 + numero2);
}
function dibujar40guiones() {
    let i;
    let linea = "-";
    for (i=1; i<=40; i++) { 
        linea=linea+"-";
     }
     console.log(linea);
}