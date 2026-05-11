//Definimos las variables
let a = 22;
let b = 31;

//Declaramos una funcion
function sumar(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}
//Definimos Una variable llamando una funcion
let resultadoSuma = sumar(a, b);
let resultadoResta = resta(a, b);
let resultadoDiv = div(a, b);

console.log("El resultado de la Suma es: " + resultadoSuma);
console.log("El resultado de la Resta es: " + resultadoResta);
console.log("El resultado de la División es: " + resultadoDiv);






//----------------------------------------------


function sumar2(x, z) {
    return x + z;
}
function resta2(x, z) {
    return x - z;
}
function div2(x, z) {
    return x / z;
}

let resultadoSuma2 = sumar2(10, 5);
let resultadoResta2 = resta2(10, 5);
let resultadoDiv2 = div2(10, 5);
console.log("El resultado de la Suma es: " + resultadoSuma2);
console.log("El resultado de la Resta es: " + resultadoResta2);
console.log("El resultado de la División es: " + resultadoDiv2);

//----------------------------------------------








function multiplicar(a, b) {
    return a * b;
}

let resultado3 = multiplicar(10, 5);
console.log("El resultado de la multiplicación es: " + resultado3);