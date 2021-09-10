import Camara from './Camara';
import Telefono from './Telefono';

class TelefonoConCamara extends Telefono{
    encendido: boolean;
    bateria: number;
    linterna;

    camara: Camara;

    constructor(){
        super();
        this.encendido;

        this.camara.sacarFoto(); 
        
    }

}