import * as arte from "ascii-art";
import * as RLS from "readline-sync";

let frase: string = RLS.question("Ingrese una palabra: ");

arte.font(frase, 'doom' ,  ( err ,  renderizado ) => { 
    console.log (err || renderizado)
} ) ;