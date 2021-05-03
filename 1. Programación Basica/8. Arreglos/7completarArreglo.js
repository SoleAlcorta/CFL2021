let arregloAzar = new Array(10);
let i;

function Azar(tope) {
    return Math.floor(Math.random()*tope);
}

for (i=0; i<10; i++) {
    arregloAzar[i] = Azar(100);
}
for (indice=0; indice<10; indice++) {
    console.log("El numero ingresado en la posicion", indice, "es:", arregloAzar[indice]);
}