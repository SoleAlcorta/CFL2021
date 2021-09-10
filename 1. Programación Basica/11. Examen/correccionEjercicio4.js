let lector = require('readline-sync');
//leo la fecha del usuario
let fecha = lector.question('Ingrese el fecha a evaluar [dd/mm/aaaa]: ');
//separo la fecha en sus partes
let dia = fecha.substr(0,2);
let mes = fecha.substr(3,2);
let año = fecha.substr(6,4);
//inicializo un arreglo con la cantidad de dias que tiene cada año NO bisiesto
let diasMeses = new Array(31,28,31,30,31,30,31,31,30,31,30,31);

function esBisiesto(año) {
//funcion que me indica si un año es bisiesto o no
    return (((año % 4 == 0) && (año % 100 != 0)) || (año % 400 == 0));
}
function contarDias(dia,mes,año,diasMeses) {
//funcion que cuenta los dias que restan hasta fin de año
    let cantidadDias=0;
    let i;
//se cuentan los dias correspondientes a meses completos
    for (i=11; i>mes-1; i--) {  //mes-1 porque el arreglo es zero-based
        cantidadDias+=diasMeses[i];
    }
//y luego se agregan los dias que faltan para terminar el mes de la fecha
    cantidadDias+=diasMeses[mes-1]-dia;
    return cantidadDias;
}

if (esBisiesto(año)) {
//si es un año bisiesto debo modificar la cantidad de dias de febrero
    diasMeses[1]=29;
}

//solo falta llamar a la funcion y mostrar el resultado
console.log('faltan',contarDias(dia,mes,año,diasMeses),'dias para terminar el año.');