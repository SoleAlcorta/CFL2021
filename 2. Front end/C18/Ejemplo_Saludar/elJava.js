"use strick";

console.log("Hola Mundo!");

function saludar() {
    console.log("Ola k asè");
}

// Contador de clicks
let contador = 0;
function clickear() {
  contador = contador + 1;
  alert("Hiciste " + contador + " clicks")
}

// Seleccionando elementos
let element = document.querySelector('h1')
console.log(element);

function ocultar() {
  document.getElementById('principal').className = 'hidden';
}

function cambiarImg() {
  document.querySelector('img').src = "rapinoe.jpg";
}

// Saludo con nombre
function actualizarSaludo() {
  let nodoInput = document.getElementById('txtNombre');
  let nombre = nodoInput.value;
  console.log(nombre)
  let nodoSaludo = document.getElementById('txtSaludo');
  nodoSaludo.innerHTML = "Hola " + nombre;

  if (nombre.length > 5) {
    document.getElementById('alerta').className = 'alert'
  }
}

// Agregar elemento en html. NO FUNCIONA
function crearNodo() { debugger
  
  let alerta = document.createElement('p');
  let node = document.createTextNode("Holaaaa!");
  alerta.appendChild(node);
  
  let padre = document.getElementById('padre');
  padre.appendChild(alerta);
}
