var Cartuchera = /** @class */ (function () {
    function Cartuchera(estadoActual, suContenido) {
        this.estaAbierta = estadoActual;
        this.tieneCosas = suContenido;
    }
    Cartuchera.prototype.abrirCerrar = function () {
        if (this.estaAbierta) {
            this.estaAbierta = false;
        }
        else
            this.estaAbierta = true;
    };
    Cartuchera.prototype.meterAlgo = function () {
        this.tieneCosas = this.tieneCosas + 1;
    };
    Cartuchera.prototype.sacarAlgo = function () {
        this.tieneCosas = this.tieneCosas - 1;
    };
    Cartuchera.prototype.mostrarContenido = function () {
        console.log("Esta cartuchera esta abierta " + this.estaAbierta + " y contiene " + this.tieneCosas + " elementos");
        // console.log("Esta cartuchera esta abierta ", this.estaAbierta, " y contiene ", this.tieneCosas, " elementos");
    };
    return Cartuchera;
}());
var miCartuchera = new Cartuchera(true, 10);
miCartuchera.meterAlgo();
miCartuchera.mostrarContenido();
