"use strick";

let primerNum = valorInicial()
let segundoNum = aSumar()

function valorInicial() {
    let inicial = document.getElementById('inicial');
    console.log(inicial.value);
    return inicial;
}

function aSumar() {
    let sumarle = document.getElementById('final');
    console.log(sumarle.value);
    return sumarle;
}

function total(){ debugger
    let resultado = (primerNum + segundoNum);
    console.log(resultado);
    
    // let resultadoFinal = document.getElementById('total');
    // resultadoFinal.innerHTML = resultado;

}


// function valorInicial() {
//     let inicial = document.getElementById('inicial');
//     console.log(inicial.value);
//     let sumarle = document.getElementById('final');
//     console.log(sumarle.value);

//     let resultado = inicial.value + sumarle.value;
//     console.log(resultado);
//     let resultadoFinal = document.getElementById('total');  
//     resultadoFinal.innerHTML = "El total de manzanas es: " + resultado;
//}
