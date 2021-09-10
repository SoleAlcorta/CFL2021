"use strick";

let botonSumar = document.querySelector(".botonSumar");
botonSumar.addEventListener("click",sumar1);

let cantidad=0;

let botonRestar = document.querySelector(".botonRestar");
botonRestar.addEventListener("click",restar1);

let botonSumarInput = document.querySelector(".botonSumarInput");
botonSumarInput.addEventListener("click",sumarInput);

let botonVolverACero = document.querySelector(".volverACero");
botonVolverACero.addEventListener("click",volverAcero);

let contador = document.querySelector(".contador");

function sumar1(){
    cantidad ++ ;
    document.querySelector(".contador").innerHTML = cantidad;
}

function restar1(){
    cantidad -=1 ;
    document.querySelector(".contador").innerHTML = cantidad;
}

function sumarInput(){
    let miInput = document.querySelector(".miInput").value;
    cantidad += Number(miInput);   
    document.querySelector(".contador").innerHTML = cantidad;
}

function volverAcero(){
    cantidad = 0;   
    document.querySelector(".contador").innerHTML = cantidad;
}