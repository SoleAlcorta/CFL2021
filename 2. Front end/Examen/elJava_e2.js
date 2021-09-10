"use strick";

let btnSumarTarea = document.getElementById('.btn-tareas');
btnSumarTarea.addEventListener('click', funcionAnonima);

let inputTarea = document.getElementById('tarea');

function funcionAnonima(e){
    guardarTarea(inputTarea) 
}

function guardarTarea(inputTarea) {
    document.getElementById(listaTareas).innerHTML = inputTarea;
    document.getElementById(listaTareas).classList.remove(hidden);
}

