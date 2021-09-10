import * as RLS from 'readline-sync';
import * as FS from 'fs';
import Juegos from './Juegos';

export default class Ruleta extends Juegos {
    private apuestas: number[];
    private numeroBolilla: number;
    public aciertos: number;
    infoDelJuego: string[];

    constructor() {
        super(100, 50, "./ruleta.txt");
        this.juegoDeRuleta();
    }
    
    public juegoDeRuleta(){
        console.log(this.infoDelJuego);
        this.apuestas = this.solicitarApuestas();
        this.numeroBolilla = this.numeroResultante();
        console.log(this.mostrarResultados());  
        this.estadisticasRuleta(this.apuestas, this.aciertos);       
    }

    // Se solicita numero al usuario. Me falta agregar algún error si no pone un número del 0 al 36, ni 123
    public solicitarApuestas():number[] {
        let todasLasApuestas:number[] = new Array();
        let numeroUsuario: number = RLS.questionInt("Ingrese un numero del 0 al 36 (Ingrese 123 para cerrar apuesta):");
        let i=0;

        while (numeroUsuario !== 123) {
            if (numeroUsuario>36) {
                console.log("Ingrese un numero válido");
                numeroUsuario = RLS.questionInt("Ingrese un numero del 0 al 36 (Ingrese 123 para cerrar apuesta):");
            } else while (numeroUsuario<=36) {
                todasLasApuestas[i] = numeroUsuario;
                numeroUsuario = RLS.questionInt("Ingrese un numero del 0 al 36 (Ingrese 123 para cerrar apuesta):");   
                i++;
            }
        console.log(`Usted ha realizado las siguientes apuestas: ${todasLasApuestas}`);
        }

        return todasLasApuestas; 
    }

    //Se obtiene numero al azar, a modo de lanzamiento de bolilla en la ruleta
    private numeroResultante():number {
        console.log("No va más");
        console.log("[La ruleta esta girando...]");
        let numero:number = Math.floor(Math.random()*36)
        console.log(`El numero es ${numero}`);

        return numero;
    }

    //Chequea si los numeros apostados coinciden con el numero que salió antes.
    private apuestasAcertadas(lasApuestas: number[], numGanador:number): number {
        let acertados:number = 0;
        let numApuestas:number = lasApuestas.length;
        let i;
        
        for (i=0; i<numApuestas; i++){
            if (numGanador == lasApuestas[i]) {
                acertados+1;
            }
        }
        return acertados
    }

    public mostrarResultados(): string{
        this.aciertos = this.apuestasAcertadas(this.apuestas, this.numeroBolilla);
        if (this.aciertos == 0){
            return "Usted no ha tenido aciertos";
        } else return `FELICITACIONES! Usted ha tenido ${this.aciertos} aciertos.`
    }


    public estadisticasRuleta (apuestasRealizadas: number[], cantidadAciertos: number){
        let aGuardar: string= `Los numeros apostados fueron ${apuestasRealizadas} y la cantidad de aciertos: ${cantidadAciertos} \n`;
        FS.appendFileSync('./estadisticasRuleta.txt', aGuardar, 'utf-8');
    }
} 

let ruleta1 = new Ruleta();
