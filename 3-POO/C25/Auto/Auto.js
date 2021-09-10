"use strict";
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.velocidadActual = 0;
    }
    Auto.prototype.acelerar = function (velocidad) {
        this.velocidadActual = this.velocidadActual + velocidad;
    };
    Auto.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getAño = function () {
        return this.año;
    };
    return Auto;
}());
