

//Creamos una variable en este caso sera numerica
let menu = 1;

//Definimos un switch basico, operado por nuemros
//Acá se intregan las opciones en los cases
//Tarea realizar hasta la opción 3
switch(menu){
    case 1:
        imprime = "Opción 1";
        break;
    case 2:
        imprime = "Opción 2";
        break;
    case 3:
        imprime = "Opción 3";
        break;
    default:
        imprime= "Opcion No definida";
}
console.log(imprime);


console.log("----------------------");
console.log("----------------------");
console.log("----------------------");
console.log("----------------------");

//Definimos una variable
var dia = "lunes";

//Defginimos el Switch con una variable de texto
switch (dia) {
    case "lunes":
        imprime2 = ("Este es el dia" + dia);
        break;
    case "sabado":
        imprime2 = ("Fin de semana" + dia);
    case "domingo":
        imprime2 = ("Fin de semana" + dia);
        break;
    default:
        imprime2 = "Día no válido";
}

console.log(imprime2);















console.log("-------------------------------------");



console.log(semana_fin);

console.log("-------------------------------------");

//Definimos una variable
var edad = 13;
var esNino = edad < 13;
var esAdolescente = edad >= 13 && edad < 18;
var esAdulto = edad >= 18 && edad < 65;
var esAdultoMayor = edad >= 65;
console.log(typeof (esNino));
switch (true) {
    case esNino:
        parametros = "Eres un niño";
        break;
    case esAdolescente:
        parametros = "Eres adolescente";
        break;
    case esAdulto:
        parametros = "Eres adulto";
        break;
    case esAdultoMayor:
        parametros = "Eres adulto mayor";
        break;
    default:
        parametros = "Edad no válida";
        break;
}
console.log(parametros);
