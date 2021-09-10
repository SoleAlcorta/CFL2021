export default class Telefono{
    private estaPrendido: boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;

    constructor (encendido: boolean, bateria:number, linterna:boolean){
        this.estaPrendido = encendido;
        this.bateriaActual = bateria;
        this.linternaPrendida = linterna;
    }



    public mandarMensaje(msg:string, numero:number):boolean{
        return

    }

    public hacerLlamada():void{

    }

    public prenderApagar():void{

    }
}