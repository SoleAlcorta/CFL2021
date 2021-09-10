"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RLS = require("readline-sync");
var Juegos_1 = require("./Juegos");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas() {
        var _this = _super.call(this, 50, 50, './tragamonedas.txt') || this;
        // this.aciertosIguales = 0;
        // this.aciertosEscalera = 0;
        _this.juegoDeTragamonedas();
        return _this;
    }
    Tragamonedas.prototype.juegoDeTragamonedas = function () {
        console.log(this.infoDelJuego);
        console.log(this.mostrarValor());
        this.seleccionarJuego();
        // let aciertos: number = this.contadorDeAciertos();
        //this.guardarEstadisticas('./estadisticasTragamonedas.txt', (this.numerosIguales() + this.numerosEscalera()));
    };
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
            //this.aciertosIguales+1;
            this.seleccionarJuego();
        }
        else {
            console.log("Usted no ha ganado");
            this.seleccionarJuego();
        }
        //return this.aciertosIguales;
    };
    Tragamonedas.prototype.numerosEscalera = function () {
        this.obtenerNumeros();
        console.log(this.num1, this.num2, this.num3);
        if (this.num2 == this.num1 + 1 && this.num3 == this.num2 + 1) {
            console.log("FELICITACIONES! Usted ha ganado");
            //this.aciertosEscalera+1;
            this.seleccionarJuego();
        }
        else {
            console.log("Usted no ha ganado");
            this.seleccionarJuego();
        }
        //return this.aciertosEscalera;
    };
    Tragamonedas.prototype.obtenerNumeros = function () {
        this.num1 = Math.floor(Math.random() * 3);
        this.num2 = Math.floor(Math.random() * 3);
        this.num3 = Math.floor(Math.random() * 3);
        return (this.num1, this.num2, this.num3);
    };
    return Tragamonedas;
}(Juegos_1["default"]));
exports["default"] = Tragamonedas;
var miTragamonedas = new Tragamonedas();
