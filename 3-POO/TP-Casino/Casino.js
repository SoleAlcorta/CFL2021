"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var Ruleta_1 = require("./Ruleta");
var Tragamonedas_1 = require("./Tragamonedas");
var Casino = /** @class */ (function () {
    function Casino(abierto) {
        this.estaAbierto = abierto;
        // this.ruleta;
        // this.tragamonedas;
    }
    Casino.prototype.darBienvenida = function () {
        console.log("Bienvenid@ al Casino!");
    };
    Casino.prototype.eleccionJuego = function () {
        var opcion = RLS.question('Ingrese una opcion: (1) Ruleta, (2) Tragamonedas, (X) para finalizar: ').toUpperCase();
        while (opcion != 'X') {
            switch (opcion) {
                case '1': {
                    new Ruleta_1["default"];
                    break;
                }
                case '2': {
                    this.tragamonedas.juegoDeTragamonedas();
                    break;
                }
            }
            //Debería haber alguna manera de mostrar las veces que se jugó.
            opcion = RLS.question('Ingrese una opcion: (1) Ruleta, (2) Tragamonedas, (X) para finalizar: ').toUpperCase();
        }
    };
    Casino.prototype.getRuleta = function () {
        var newRuleta = new Ruleta_1["default"]();
    };
    Casino.prototype.getTragamonedas = function () {
        var newTragamonedas = new Tragamonedas_1["default"]();
    };
    return Casino;
}());
exports["default"] = Casino;
// let casino1 = new Casino(true);
// casino1.darBienvenida();
