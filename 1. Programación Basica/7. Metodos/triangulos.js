function calcularAreaTriangulo(base, altura) {
    return (base*altura)/2
    }
let b;
for (b=1; b<=10; b++) {
    console.log("El area del rectangulo es: ", calcularAreaTriangulo(b, b*2));
}