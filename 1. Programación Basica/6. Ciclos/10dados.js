let readlineSync = require('readline-sync');
let dados = readlineSync.questionInt("Cuantos dados va a tirar?: ");
let probNum = 6;
let probFinal = 1;
let contador;
for (contador=1; contador<=dados; contador++) {
    probFinal = probFinal*probNum;
}
console.log("La probabilidad es: 1/",probFinal);