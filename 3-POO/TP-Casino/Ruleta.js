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
var FileSystem = require("fs");
var Juegos_1 = require("./Juegos");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta() {
        var _this = _super.call(this, 100, 50, "./ruleta.txt") || this;
        _this.juegoDeRuleta();
        return _this;
    }
    Ruleta.prototype.juegoDeRuleta = function () {
        console.log(this.infoDelJuego);
        this.apuestas = this.solicitarApuestas();
        this.numeroBolilla = this.numeroResultante();
        console.log(this.mostrarResultados());
        this.estadisticasRuleta(this.apuestas, this.aciertos);
    };
    // Se solicita numero al usuario. Me falta agregar algún error si no pone un número del 0 al 36, ni 123
    Ruleta.prototype.solicitarApuestas = function () {
        var todasLasApuestas = new Array();
        var numeroUsuario = RLS.questionInt("Ingrese un numero del 0 al 36 (Ingrese 123 para cerrar apuesta):");
        var i = 0;
        while (numeroUsuario !== 123) {
            if (numeroUsuario > 36) {
                console.log("Ingrese un numero válido");
                numeroUsuario = RLS.questionInt("Ingrese un numero del 0 al 36 (Ingrese 123 para cerrar apuesta):");
            }
            else
                while (numeroUsuario <= 36) {
                    todasLasApuestas[i] = numeroUsuario;
                    numeroUsuario = RLS.questionInt("Ingrese un numero del 0 al 36 (Ingrese 123 para cerrar apuesta):");
                    i++;
                }
            console.log("Usted ha realizado las siguientes apuestas: " + todasLasApuestas);
        }
        return todasLasApuestas;
    };
    //Se obtiene numero al azar, a modo de lanzamiento de bolilla en la ruleta
    Ruleta.prototype.numeroResultante = function () {
        console.log("No va más");
        console.log("[La ruleta esta girando...]");
        var numero = Math.floor(Math.random() * 36);
        console.log("El numero es " + numero);
        return numero;
    };
    //Chequea si los numeros apostados coinciden con el numero que salió antes.
    Ruleta.prototype.apuestasAcertadas = function (lasApuestas, numGanador) {
        var acertados = 0;
        var numApuestas = lasApuestas.length;
        var i;
        for (i = 0; i < numApuestas; i++) {
            if (numGanador == lasApuestas[i]) {
                acertados + 1;
            }
        }
        return acertados;
    };
    Ruleta.prototype.mostrarResultados = function () {
        this.aciertos = this.apuestasAcertadas(this.apuestas, this.numeroBolilla);
        if (this.aciertos == 0) {
            return "Usted no ha tenido aciertos";
        }
        else
            return "FELICITACIONES! Usted ha tenido " + this.aciertos + " aciertos.";
    };
    Ruleta.prototype.estadisticasRuleta = function (apuestasRealizadas, cantidadAciertos) {
        var aGuardar = "Los numeros apostados fueron " + apuestasRealizadas + " y la cantidad de aciertos: " + cantidadAciertos + " \n";
        FileSystem.appendFileSync('./estadisticasRuleta.txt', aGuardar, 'utf-8');
    };
    return Ruleta;
}(Juegos_1["default"]));
exports["default"] = Ruleta;
var ruleta1 = new Ruleta();
