class Cartuchera {
    estaAbierta: boolean;
    tieneCosas: number;

    constructor(estadoActual: boolean, suContenido: number) {
        this.estaAbierta=estadoActual;
        this.tieneCosas=suContenido;
    }

    abrirCerrar(): void {
        if (this.estaAbierta) {
        this.estaAbierta = false;
        } else this.estaAbierta = true;
    }

    meterAlgo(): void {
        this.tieneCosas = this.tieneCosas +1;
    }

    sacarAlgo(): void {
        this.tieneCosas = this.tieneCosas -1;
    }

    mostrarContenido() {
        // console.log("Esta cartuchera esta abierta ${this.estaAbierta} y contiene ${this.tieneCosas} elementos");
        console.log("Esta cartuchera esta abierta ", this.estaAbierta, " y contiene ", this.tieneCosas, " elementos");

    }
}

let miCartuchera = new Cartuchera(true, 10);
miCartuchera.meterAlgo();
miCartuchera.mostrarContenido();
