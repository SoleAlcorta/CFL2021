let readlineSync = require('readline-sync');
let alumno = readlineSync.question("Nombre del alumno: ");
let practica, problema, teoria, notaFinal;
while (alumno != "") {
    practica = readlineSync.questionInt("Ingrese nota PRACTICA: ");
    problema = readlineSync.questionInt("Ingrese nota PROBLEMAS: ");
    teoria = readlineSync.questionInt("Ingrese nota TEORIA: ");
    if ((practica <=10 && practica >=0) && (problema <=10 && problema >=0) && (teoria <=10 && teoria >=0)) {
        notaFinal = practica*0.1 + problema*0.5 + teoria*0.4;
        console.log("La nota de " + alumno + " es " + notaFinal);
    } else {
        console.log("Error en las notas ingresadas.");
    }
    alumno = readlineSync.question("Nombre del alumno: ");    
}