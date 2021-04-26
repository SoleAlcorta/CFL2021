let readlineSync = require("readline-sync");
let Usuario = "Juan";
let contraseña = "claveJuan";
let nombreUsuario = readlineSync.question("Ingrese su nombre de usuario: ");
let contraseñaUsuario = readlineSync.question("Ingrese su clave: ");
if (nombreUsuario == Usuario && contraseñaUsuario == contraseña){
    console.log("Usted ha sido registrado")
} else {
    console.log("Los datos ingresados no son validos")
}