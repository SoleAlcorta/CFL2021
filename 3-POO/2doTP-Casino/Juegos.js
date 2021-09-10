"use strict";
exports.__esModule = true;
var Juegos = /** @class */ (function () {
    function Juegos(valor, probabilidad, infoDelJuego) {
        this.valor = valor;
        this.probabilidad = probabilidad;
        this.infoDelJuego = infoDelJuego;
    }
    Juegos.prototype.mostrarInfo = function (infoDelJuego) {
        return this.infoDelJuego;
        //Debería guardar en una variable un archivo .txt?
    };
    Juegos.prototype.guardarResultados = function () {
    };
    return Juegos;
}());
exports["default"] = Juegos;
