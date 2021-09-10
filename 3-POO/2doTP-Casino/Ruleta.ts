import * as RLS from 'readline-sync';

class Ruleta {
    // private numerosRuleta: number; //No se
    private apuestas: number;
    private numeroBolilla: number;
    private aciertos: number;

    constructor(/*apuestas:number, numeroBolilla:number, aciertos:number*/) {
        // this.apuestas = apuestas;
        // this.numeroBolilla = numeroBolilla;
        // this.aciertos = aciertos;
        this.solicitarApuestas;
        this.numeroResultante;
        this.apuestasAcertadas;
    }

    // Se solicita numero al usuario. Me falta agregar algún error si no pone un número del 0 al 36, ni 123
    public solicitarApuestas():number {
        // this.apuestas = this.todasLasApuestas;
        let todasLasApuestas:number[] = new Array();
        // let todasLasApuestas: number[]= [];
        let numeroUsuario: number = RLS.questionInt("Ingrese un numero del 0 al 36 (Ingrese 123 para cerrar apuesta):");
        let i=0;

        while (numeroUsuario !== 123) {

            if (numeroUsuario>36) {
                console.log("Ingrese un numero válido");
                numeroUsuario = RLS.questionInt("Ingrese un numero del 0 al 36 (Ingrese 123 para cerrar apuesta):");
            } else while (numeroUsuario<36) {
                todasLasApuestas[i] = numeroUsuario;
                numeroUsuario = RLS.questionInt("Ingrese un numero del 0 al 36 (Ingrese 123 para cerrar apuesta):");   
                i++;
            }
        console.log(`Usted ha realizado las siguientes apuestas: ${todasLasApuestas}`);
        }

        return todasLasApuestas[todasLasApuestas.length];
    }

    //Se obtiene numero al azar, a modo de lanzamiento de bolilla en la ruleta
    public numeroResultante():number {
        console.log("No va más");
        console.log("[La ruleta esta girando...]");
        let numero:number = Math.floor(Math.random()*36)
        console.log(`El numero es ${numero}`);

        return numero;
    }

    //Chequea si los numeros apostados coinciden con el numero que salió antes.???
    public apuestasAcertadas(numeroSalio: number, lasApuestas:number): string {
        let acertados:number = 0;
        let contenedorDeApuestas = new Array(lasApuestas)
        // let totalDeApuestas:number = apuestas;
        // let apuest: number[] = this.solicitarApuestas;
        // return `Voy a mostrar la variable que no se ${totalDeApuestas}`;
        for (let i:number=0; i < lasApuestas; i++) {
            if (numeroSalio == contenedorDeApuestas[i]) {
                acertados++;            
            // } else return "Usted no ha tenido aciertos";
            }       
        } 
        return "Usted ha tenido "+acertados+" aciertos";
        // Como quisiera que funcione:
        if (acertados != 0) {
            return `FELICITACIONES! Usted ha tenido ${acertados} aciertos`;
        } else return "Usted no ha tenido aciertos"; 
     
    } 
}

let ruleta1 = new Ruleta;
console.log(ruleta1);
ruleta1.numeroResultante;
ruleta1.apuestasAcertadas;
