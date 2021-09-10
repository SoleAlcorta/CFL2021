export default class Juegos{
    protected valor: number;
    protected probabilidad: number;
    protected infoDelJuego: string;

    constructor(valor:number, probabilidad:number, infoDelJuego:string){
        this.valor=valor;
        this.probabilidad=probabilidad;
        this.infoDelJuego=infoDelJuego;
    }

    protected mostrarInfo(infoDelJuego: string): string{
        return this.infoDelJuego;
        //Debería guardar en una variable un archivo .txt?

    }

    protected guardarResultados(){

    }
}