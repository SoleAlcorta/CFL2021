let readlineSync =requiere('readline-sync');
let n = readlineSync.questionInt("Cantidad de elementos del arreglo: ");
let arreglo = new Array(n);
let indice;

function calcularFactorRec(n) {
    let resultado=1;
    if (n == 0) {
        resultado=1;
    } else {
        resultado=n*calcularFactorRec(n-1);
    }
    return resultado;
}


