import * as rls from "readline-sync";
import * as cs from "cowsay";

let frase: string = rls.question("La vaca dice: ");

console.log(cs.say ( { 
    text : frase , 
    e : "oO" , 
    T : "U" 
} ) ) ;