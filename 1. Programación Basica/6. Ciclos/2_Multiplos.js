let numero=0
for (numero=0; numero*2<=100 && numero*3<=100; numero++) {
    console.log(numero*2, " es multiplo de 2.");
    if (numero*3 != numero*2) {
        console.log(numero*3, " es multiplo de 3.");
    }
} /*No logro hacer modificación alguna con los 
numeros que se repiten. Todo cambio que intento hacer 
solo se aplica al número 0.*/