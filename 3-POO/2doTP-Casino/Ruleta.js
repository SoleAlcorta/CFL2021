"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var Ruleta = /** @class */ (function () {
    function Ruleta( /*apuestas:number, numeroBolilla:number, aciertos:number*/) {
        // this.apuestas = apuestas;
        // this.numeroBolilla = numeroBolilla;
        // this.aciertos = aciertos;
        this.solicitarApuestas;
        this.numeroResultante;
        this.apuestasAcertadas;
    }
    // Se solicita numero al usuario. Me falta agregar algún error si no pone un número del 0 al 36, ni 123
    Ruleta.prototype.solicitarApuestas = function () {
        // this.apuestas = this.todasLasApuestas;
        var todasLasApuestas = new Array();
        // let todasLasApuestas: number[]= [];
        var numeroUsuario = RLS.questionInt("Ingrese un numero del 0 al 36 (Ingrese 123 para cerrar apuesta):");
        var i = 0;
        while (numeroUsuario !== 123) {
            if (numeroUsuario > 36) {
                console.log("Ingrese un numero válido");
                numeroUsuario = RLS.questionInt("Ingrese un numero del 0 al 36 (Ingrese 123 para cerrar apuesta):");
            }
            else
                while (numeroUsuario < 36) {
                    todasLasApuestas[i] = numeroUsuario;
                    numeroUsuario = RLS.questionInt("Ingrese un numero del 0 al 36 (Ingrese 123 para cerrar apuesta):");
                    i++;
                }
            console.log("Usted ha realizado las siguientes apuestas: " + todasLasApuestas);
        }
        return todasLasApuestas[todasLasApuestas.length];
    };
    //Se obtiene numero al azar, a modo de lanzamiento de bolilla en la ruleta
    Ruleta.prototype.numeroResultante = function () {
        console.log("No va más");
        console.log("[La ruleta esta girando...]");
        var numero = Math.floor(Math.random() * 36);
        console.log("El numero es " + numero);
        return numero;
    };
    //Chequea si los numeros apostados coinciden con el numero que salió antes.???
    Ruleta.prototype.apuestasAcertadas = function (numeroSalio, lasApuestas) {
        var acertados = 0;
        var contenedorDeApuestas = new Array(lasApuestas);
        // let totalDeApuestas:number = apuestas;
        // let apuest: number[] = this.solicitarApuestas;
        // return `Voy a mostrar la variable que no se ${totalDeApuestas}`;
        for (var i = 0; i < lasApuestas; i++) {
            if (numeroSalio == contenedorDeApuestas[i]) {
                acertados++;
                // } else return "Usted no ha tenido aciertos";
            }
        }
        return "Usted ha tenido " + acertados + " aciertos";
        // Como quisiera que funcione:
        if (acertados != 0) {
            return "FELICITACIONES! Usted ha tenido " + acertados + " aciertos";
        }
        else
            return "Usted no ha tenido aciertos";
    };
    return Ruleta;
}());
var ruleta1 = new Ruleta;
console.log(ruleta1);
ruleta1.numeroResultante;
ruleta1.apuestasAcertadas;
