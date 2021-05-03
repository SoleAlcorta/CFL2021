let readlineSync = require('readline-sync');
let numeroUsuario = readlineSync.questionInt("Ingrese el numero de mes a identificar: ");
let meses = new Array (12);
meses[0] = "Enero";
meses[1] = "Febrero";
meses[2] = "Marzo";
meses[3] = "Abril";
meses[4] = "Mayo";
meses[5] = "Junio";
meses[6] = "Julio";
meses[7] = "Agosto";
meses[8] = "Septiembre";
meses[9] = "Octubre";
meses[10] = "Noviembre";
meses[11] = "Diciembre";
if (numeroUsuario > 12) {
    numeroUsuario = readlineSync.questionInt("Por favor ingrese un numero menor de 12: ");
} else {
    let mesElegido = numeroUsuario-1;
    console.log("El numero", numeroUsuario, "identifica al mes", meses[mesElegido]);
}