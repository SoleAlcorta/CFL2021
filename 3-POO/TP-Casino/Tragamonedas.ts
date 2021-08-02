import * as RLS from 'readline-sync';
import Juegos from './Juegos';

export default class Tragamonedas extends Juegos {
    private num1: number;
    private num2: number;
    private num3: number;
    // private aciertosIguales: number;   LO QUE ESTÁ COMENTADO ES PORQUE QUISE 
    // private aciertosEscalera: number;   CREAR UN ARCHIVO TXT, HEREDANDO FUNCIÓN. NO SALIÓ.
    infoDelJuego: string[];

    public constructor(){
        super(50, 50, './tragamonedas.txt');
        // this.aciertosIguales = 0;
        // this.aciertosEscalera = 0;
        this.juegoDeTragamonedas();
    }
    
    public juegoDeTragamonedas(){
        console.log(this.infoDelJuego);
        console.log(this.mostrarValor());
        this.seleccionarJuego();
        // let aciertos: number = this.contadorDeAciertos();
        //this.guardarEstadisticas('./estadisticasTragamonedas.txt', (this.numerosIguales() + this.numerosEscalera()));
    }
     
    private seleccionarJuego(){
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

            }
        } else console.log("Ingrese una opcion valida.");
    }
                
    private numerosIguales()/*:number*/{
        this.obtenerNumeros();
        console.log(this.num1, this.num2, this.num3);
        if (this.num1 == this.num2 && this.num1 == this.num3){
            console.log ("FELICITACIONES! Usted ha ganado");
            //this.aciertosIguales+1;
            this.seleccionarJuego();
        } else {
            console.log("Usted no ha ganado");
            this.seleccionarJuego();
        }
        //return this.aciertosIguales;
    }
            
    private numerosEscalera()/*:number*/{
        this.obtenerNumeros();
        console.log(this.num1, this.num2, this.num3);
        if (this.num2 == this.num1+1 && this.num3 == this.num2+1){
            console.log("FELICITACIONES! Usted ha ganado");
            //this.aciertosEscalera+1;
            this.seleccionarJuego();
        } else {
            console.log("Usted no ha ganado");
            this.seleccionarJuego();
        }
        //return this.aciertosEscalera;
    }

    private obtenerNumeros():number{
        this.num1 = Math.floor(Math.random()*3);
        this.num2 = Math.floor(Math.random()*3);
        this.num3 = Math.floor(Math.random()*3);
        return (this.num1, this.num2, this.num3);
    }

    // private contadorDeAciertos(): number{
    //     return (this.numerosIguales() + this.numerosEscalera())
    // }
}
let miTragamonedas = new Tragamonedas();