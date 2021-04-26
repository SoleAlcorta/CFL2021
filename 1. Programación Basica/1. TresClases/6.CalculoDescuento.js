let readlineSync = require('readline-sync');
let precioProducto = readlineSync.questionInt("Precio del producto: ");
let descuento = readlineSync.questionInt("Porcentaje de descuento: ");
let aDescontar = (descuento*precioProducto)/100;
let PrecioFinal = precioProducto-aDescontar;
console.log("Total a pagar: ", PrecioFinal);