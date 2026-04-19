
//Definimos una variable numero
var numero = 10;

//Utilizamos el fot para incrementar en 1 cada numero
for (var i = 1; i <= numero; i++) {
    console.log("Numero: ", i);
}
console.log("-----------------------------------");

//Utilizamos el for para decrementar el numero en 1
for (var i = 10; i >= 1; i--) {
    console.log("Numero: ", i);
}
console.log("-----------------------------------");

//Buscamos el numero par, pero notar que estamos sumando 2
for (var i = 2; i <= numero; i += 2) {
    console.log("Par: ", i);
}
console.log("-----------------------------------");

//Identificamos los numeros par e impar
for (var i = 1; i <= numero; i++) {
    var esPar = i % 2 === 0;
    if (esPar) {
        console.log(i + " es par");
    } else {
        console.log(i + " es impar");
    }
}

console.log("-----------------------------------");
console.log("-----------------------------------");
console.log("-----------------------------------");

//Definimos un Array de String, en este caso de frutas
var frutas = ["manzana", "pera", "uva", "naranja"];

//Recorremos el Array, recordar que las listas empiezan del: 0, 1, 2...
for (var i = 0; i < frutas.length; i++) {
    console.log("Fruta: ", frutas[i]);
}

console.log("-----------------------------------");

//ForEach
frutas.forEach(function (fruta) {
    console.log("Fruta: ", fruta);
}
);
console.log("-----------------------------------");

//Version optimizada para listas mas pequeñas
for (var fruta of frutas) {
    console.log("Fruta: ", fruta);
}
console.log("-----------------------------------");

//Recorrer la funcion con MAP, y agregar cambios
var frutasMayusculas = frutas.map(function (fruta) {
    return fruta.toUpperCase();
});
console.log(frutasMayusculas);

console.log("-----------------------------------");

//Definir el Array
var personajes = ["Iron Man", "Thor", "Spider-Man", "Hulk"];

//Filtrar Personajes que tengo 4 caracteres
var personajesCortos = personajes.filter(function (filtro) {
    return filtro.length <= 4;
});
console.log(personajesCortos); 
console.log("-----------------------------------");