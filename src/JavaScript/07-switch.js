

//Creamos una variable para poder utilizarla
var menu = 2;


//Defginimos el Switch con una variable numerixa
switch (menu) {

    case 1:
        imprime = "Opción 1";
        break;
    case 2:
        imprime = "Opción 2";
        break;
    case 1:
        imprime = "Opción 3";
        break;
    default:
        imprime = "No ha seleccionado ninguna opción";
        break;

}

console.log(imprime);


console.log("-------------------------------------");


//Definimos una variable
var dia = "lunes";

//Defginimos el Switch con una variable de texto
switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        semana_fin = "Día de semana";
        break;
    case "sabado":
    case "domingo":
        semana_fin = "Fin de semana";
        break;
    default:
        semana_fin = "Día no válido";
}

console.log(semana_fin);

console.log("-------------------------------------");

//Definimos una variable
var edad = 13;

//Definimos las variables con condiciones
var esNino = edad < 13;
var esAdolescente = edad >= 13 && edad < 18;
var esAdulto = edad >= 18 && edad < 65;
var esAdultoMayor = edad >= 65;

//Preguntamos que tipo de valor estaremos trabajando
console.log(typeof (esNino));

//Realizamos el switch con valor != a numerico
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


console.log("-------------------------------------");