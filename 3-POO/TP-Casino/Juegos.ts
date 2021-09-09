import * as FS from 'fs';

export default class Juegos{
    protected valor: number;
    protected probabilidad: number;
    protected infoDelJuego: string[];


    constructor(valor:number, probabilidad:number, archivoTxt:string){   
        this.valor=valor;
        this.probabilidad=probabilidad;
        this.infoDelJuego=FS.readFileSync(archivoTxt, 'utf-8').split('\r\n');
    }

    protected mostrarValor():void{
        console.log("El valor de este juego es $"+this.valor+".");
    }

    protected mostrarInfo(archivoTxT: string): string[]{
        return this.infoDelJuego
    }

    //PENSABA IMPLEMENTAR ESTA FUNCIÓN, PERO NO SALIÓ.
    // protected guardarEstadisticas (guardarEn: string, cantidadAciertos: number, apuestasRealizadas?: number[]){
    //     let aGuardar: string;
    //     if (apuestasRealizadas){
    //         aGuardar = `Los numeros apostados fueron ${apuestasRealizadas} y la cantidad de aciertos: ${cantidadAciertos} \n`;
    //     } else aGuardar = `La cantidad de aciertos fue: ${cantidadAciertos} \n`
    //     FS.appendFileSync(guardarEn, aGuardar, 'utf-8');
    // }

}

