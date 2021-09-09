import * as RLS from 'readline-sync';
import Ruleta from './Ruleta';
import Tragamonedas from './Tragamonedas';


export default class Casino {
    private estaAbierto: boolean;
    private ruleta: Ruleta;
    private tragamonedas: Tragamonedas;

    constructor(abierto: boolean){
        this.estaAbierto = abierto;
        this.ruleta;
        this.tragamonedas;
    
    }

    public darBienvenida(){
        console.log("Bienvenid@ al Casino!");
    }


    public eleccionJuego(){
        let opcion: string = RLS.question('Ingrese una opcion: (1) Ruleta, (2) Tragamonedas, (X) para finalizar: ').toUpperCase();
        while (opcion != 'X') {
            switch (opcion) {
                case '1': {
                    new Ruleta;
                    break;
                }
                case '2': {
                    this.tragamonedas.juegoDeTragamonedas();
                    break;            
                }
            }
            //Debería haber alguna manera de mostrar las veces que se jugó.
            opcion = RLS.question('Ingrese una opcion: (1) Ruleta, (2) Tragamonedas, (X) para finalizar: ').toUpperCase();
        }
    }

    getRuleta(){
        let newRuleta = new Ruleta();
    }

    getTragamonedas(){
        let newTragamonedas = new Tragamonedas();
    }
}

let casino1 = new Casino(true);
casino1.darBienvenida();
