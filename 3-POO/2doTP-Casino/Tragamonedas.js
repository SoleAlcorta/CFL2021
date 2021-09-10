"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var Tragamonedas = /** @class */ (function () {
    // private combinacionObtenida: number[];
    function Tragamonedas( /*juegos: void, num1:number, num2:number, num3:number*/) {
        // this.num1 = this.obtenerNumeros();
        // this.num2 = this.obtenerNumeros();
        // this.num3 = this.obtenerNumeros();
        this.juegos = this.seleccionarJuego();
        // this.combinacionObtenida = this.mostrarResultado();
    }
    // mostrarResultado():number[]{
    //     let seObtuvo:number[] = [this.num1, this.num2, this.num3];
    //     return seObtuvo;
    // }
    Tragamonedas.prototype.seleccionarJuego = function () {
        console.log("Ingrese una opcion para seleccionar juego.");
        var seleccionJuego = RLS.questionInt("Ingrese 1 para ESCALERA - Ingrese 2 para IGUALES - Ingrese 0 para salir: ");
        if (seleccionJuego <= 2) {
            switch (seleccionJuego) {
                case 1:
                    this.numerosEscalera();
                    break;
                case 2:
                    this.numerosIguales();
                    break;
                case 0:
                // algo para salir de nuevo al menú o qué?
            }
        }
        else
            console.log("Ingrese una opcion valida.");
    };
    Tragamonedas.prototype.numerosIguales = function () {
        this.obtenerNumeros();
        console.log(this.num1, this.num2, this.num3);
        if (this.num1 == this.num2 && this.num1 == this.num3) {
            console.log("FELICITACIONES! Usted ha ganado");
        }
        else {
            console.log("Usted no ha ganado");
            this.seleccionarJuego();
        }
    };
    Tragamonedas.prototype.numerosEscalera = function () {
        this.obtenerNumeros();
        console.log(this.num1, this.num2, this.num3);
        if (this.num2 == this.num1 + 1 && this.num3 == this.num2 + 1) {
            console.log("FELICITACIONES! Usted ha ganado");
        }
        else {
            console.log("Usted no ha ganado");
            this.seleccionarJuego();
        }
    };
    Tragamonedas.prototype.obtenerNumeros = function () {
        this.num1 = Math.floor(Math.random() * 3);
        this.num2 = Math.floor(Math.random() * 3);
        this.num3 = Math.floor(Math.random() * 3);
        return (this.num1, this.num2, this.num3);
    };
    return Tragamonedas;
}());
exports["default"] = Tragamonedas;
var miTragamonedas = new Tragamonedas();
