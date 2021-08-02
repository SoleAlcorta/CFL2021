import * as ReadlineSync from 'readline-sync';
import Casino from './Casino';

let casino: Casino = new Casino(true);
casino.darBienvenida();

//menu de opciones
let opcion: string = ReadlineSync.question('Ingrese una opcion: (1) Ruleta, (2) Tragamonedas, (X) para finalizar: ').toUpperCase();
while (opcion != 'X') {
    switch (opcion) {
        case '1': {
            casino.getRuleta();
            break;
        }
        case '2': {
            casino.getTragamonedas();
            break;            
        }
    }
    opcion = ReadlineSync.question('Ingrese una opcion: (1) Ruleta, (2) Tragamonedas, (X) para finalizar: ').toUpperCase();
}