let readlineSync = require('readline-sync');
let sueldoActual = readlineSync.questionInt("Ingrese sueldo actual: ");
if (sueldoActual <=15000) {
    console.log("Le corresponde un aumento de 20%");
        console.log("El sueldo con aumento es: ", sueldoActual + (20*sueldoActual/100));
} else {
    if (sueldoActual>=15001 && sueldoActual<=20000) {
        console.log("Le corresponde un aumento de 10%");
            console.log("El sueldo con aumento es: ", sueldoActual + (10*sueldoActual/100)); 
    } else {
        if (sueldoActual>=20001 && sueldoActual<=25000) {
            console.log("Le corresponde un aumento de 5%");
                console.log("El sueldo con aumento es: ", sueldoActual + (10*sueldoActual/100));
        } else {
            console.log("No recibe aumento.")
        }
    }
}