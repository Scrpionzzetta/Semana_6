
//Definimos una Variable
var nombre = "Daniel";
console.log("El nombre es: ", nombre);

console.log("-------------------------------------");
if(true){
    //Cambiamos el valor de la varia en un bloque logico
    var nombre = "Abraham";
    console.log("Modificamos el nombre: ", nombre);
}
console.log("-------------------------------------");
//LLamamos la variable y maneitne el resultado del var
//es decir que cambiamos este valor siempre
console.log("El nombre se modifico: ", nombre);


console.log("¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡");



//Definimos una variable con LET
let apellido = "Scarlazzetta";
console.log("El apellido es: ", apellido);

console.log("-------------------------------------");
if(true){
    //Cambiamos el valor del LET en un bloque logico
    let apellido = "Sepúlveda";
    console.log("Modificamos el Apellido: ", apellido);
}
console.log("-------------------------------------");
//Este valor se mantiene como al principio
console.log("El apellido se manetiene: ", apellido);