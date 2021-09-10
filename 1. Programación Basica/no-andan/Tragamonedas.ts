import * as RLS from 'readline-sync';
import Juegos from './Juegos';
// import FS from 'fs';

export default class Tragamonedas extends Juegos {
    private num1: number;
    private num2: number;
    private num3: number;
    // private juegos: void;
    infoDelJuego: string[];

    public constructor(){
        super(50, 50, './tragamonedas.txt');
        this.juegoDeTragamonedas();
    }
    
    public juegoDeTragamonedas(){
        console.log(this.infoDelJuego);
        console.log(this.mostrarValor());
        this.seleccionarJuego();
    }
     
    private seleccionarJuego(): void{
        console.log("Ingrese una opcion para seleccionar juego.")
        let seleccionJuego:number = RLS.questionInt("Ingrese 1 para ESCALERA - Ingrese 2 para IGUALES - Ingrese 0 para salir: ");
        if(seleccionJuego <= 2) {
            switch (seleccionJuego){
                case 1:
                    this.numerosEscalera();
                    break;
                case 2:
                    this.numerosIguales();
                    break;
                case 0:
                    // algo para salir de nuevo al menú o qué?
            }
        } else console.log("Ingrese una opcion valida.");
    }
                
    private numerosIguales(){
        this.obtenerNumeros();
        console.log(this.num1, this.num2, this.num3);
        if (this.num1 == this.num2 && this.num1 == this.num3){
            console.log ("FELICITACIONES! Usted ha ganado");
            this.seleccionarJuego();
        } else {
            console.log("Usted no ha ganado");
            this.seleccionarJuego();
         }
    }
            
    private numerosEscalera(){
        this.obtenerNumeros();
        console.log(this.num1, this.num2, this.num3);
        if (this.num2 == this.num1+1 && this.num3 == this.num2+1){
            console.log("FELICITACIONES! Usted ha ganado");
            this.seleccionarJuego();
        } else {
            console.log("Usted no ha ganado");
            this.seleccionarJuego();
        }
    }

    private obtenerNumeros():number{
        this.num1 = Math.floor(Math.random()*3);
        this.num2 = Math.floor(Math.random()*3);
        this.num3 = Math.floor(Math.random()*3);
        return (this.num1, this.num2, this.num3);
    }

    // public estadisticasRuleta (apuestasRealizadas: number[], cantidadAciertos: number){
    //     let aGuardar: string= `Los numeros apostados fueron ${apuestasRealizadas} y la cantidad de aciertos: ${cantidadAciertos} \n`;
    //     FS.appendFileSync('./estadisticasRuleta.txt', aGuardar, 'utf-8');
    // }
}
//Me falta el archivo con las estadisticas. Y capaz una función que retorne las veces ganadas o algo así...
// let miTragamonedas = new Tragamonedas();