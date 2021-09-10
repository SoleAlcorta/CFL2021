import * as RLS from 'readline-sync';
import Juegos from './Juegos';

export default class Tragamonedas {
    private num1: number;
    private num2: number;
    private num3: number;
    private juegos: void;
    // private combinacionObtenida: number[];

    public constructor(/*juegos: void, num1:number, num2:number, num3:number*/){
        // this.num1 = this.obtenerNumeros();
        // this.num2 = this.obtenerNumeros();
        // this.num3 = this.obtenerNumeros();
        this.juegos = this.seleccionarJuego();
        // this.combinacionObtenida = this.mostrarResultado();
    }
    
     
    // mostrarResultado():number[]{
    //     let seObtuvo:number[] = [this.num1, this.num2, this.num3];
    //     return seObtuvo;
    // }
    
    
    seleccionarJuego(): void{
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

}

let miTragamonedas = new Tragamonedas();


