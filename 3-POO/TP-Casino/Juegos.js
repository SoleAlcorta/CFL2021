"use strict";
exports.__esModule = true;
var FS = require("fs");
var Juegos = /** @class */ (function () {
    function Juegos(valor, probabilidad, archivoTxt) {
        this.valor = valor;
        this.probabilidad = probabilidad;
        this.infoDelJuego = FS.readFileSync(archivoTxt, 'utf-8').split('\r\n');
    }
    Juegos.prototype.mostrarValor = function () {
        console.log("El valor de este juego es $" + this.valor + ".");
    };
    Juegos.prototype.mostrarInfo = function (archivoTxT) {
        return this.infoDelJuego;
    };
    return Juegos;
}());
exports["default"] = Juegos;
