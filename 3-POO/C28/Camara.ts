export default class Camara {
    activada:boolean;

    constructor(camaraAct: boolean){
        this.activada = camaraAct;
    }

    sacarFoto():string{
        if (this.activada == true){
            return "Camara Activada";
        } else return "La camara no esta activada"; 
    }
}