let readlineSync = require('readline-sync');
let nombreAlumno = readlineSync.question("Ingrese el nombre del alumno: ");
let indice=1;
let sumatoria=0;
/*while (indice<=3) {
    let nota = readlineSync.questionFloat("Ingrese una nota: ");
    sumatoria = sumatoria+nota;
    indice++;
}
console.log("El promedio anual de ", nombreAlumno, "es: ", sumatoria/3);*/

function promedioAnual (alumno) {
    while (indice<=3) {
        let nota = readlineSync.questionFloat("Ingrese una nota: ");
        sumatoria = sumatoria+nota;
        indice++;
    }
    console.log("El promedio anual de ", alumno, "es: ", sumatoria/3); 
    //return sumatoria/3
}
promedioAnual(nombreAlumno);

