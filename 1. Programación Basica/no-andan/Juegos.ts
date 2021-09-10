import * as FS from 'fs';
import Ruleta from './Ruleta';
import Tragamonedas from './Tragamonedas';

export default class Juegos{
    protected valor: number;
    protected probabilidad: number;
    protected infoDelJuego: string[];
    // protected archivoEstadisticas;

    // constructor(valor?:number, probabilidad?:number, archivoTxt?:string){ 
    //     this.datosJuego();  
    //     this.jugarRuleta();
    //     this.jugarTragamonedas();
    // }


    constructor(valor:number, probabilidad:number, archivoTxt:string){   
        this.valor=valor;
        this.probabilidad=probabilidad;
        this.infoDelJuego=FS.readFileSync(archivoTxt, 'utf-8').split('\r\n');
        this.jugarRuleta();
        this.jugarTragamonedas();
    }

    // datosJuego(){
    //     this.valor;
    //     this.probabilidad;
    //     this.infoDelJuego = FS.readFileSync(archivoTxt, 'utf-8').split('\r\n');
    // }

    protected mostrarValor():void{
        console.log("El valor de este juego es $"+this.valor+".");
    }

    protected mostrarInfo(archivoTxT: string): string[]{
        return this.infoDelJuego
    }

    public jugarRuleta(){
        let newRuleta = new Ruleta();
    }

    public jugarTragamonedas(){
        let newTragamonedas = new Tragamonedas();
    }
}

let juegoNuevo = new Juegos(1, 1, "a");
juegoNuevo.jugarRuleta;