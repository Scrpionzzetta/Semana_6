
//Definimos una variable numero
var numero = 10;

//Utilizamos el fot para incrementar en 1 cada numero
for (var i = 1; i <= numero; i++) {
    console.log("Numero: ", i);
}
console.log("-----------------------------------");

for (var i = 10; i >= 1; i--) {
    imprime = ("Numero: " + i);
    console.log(imprime);
}
console.log("-----------------------------------");
console.log("-----------------------------------");

//Buscamos el numero par, pero notar que estamos sumando 2
for (var i = 2; i <= numero; i += 2) {
    console.log("Par: ", i);
}
console.log("-----------------------------------");





console.log("-----------------------------------");
console.log("-----------------------------------");
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





var frutas = ["manzana", "pera", "uva", "naranja"];
//ForEach
frutas.forEach(function (fruta) {
    console.log("Fruta con ForEach: ", fruta);
}
);
console.log("-----------------------------------");










var ucm = ["Iron", "Hulk", "Thor", "Gru"];
//Version optimizada para listas mas pequeñas
for (var i of ucm) {
    console.log("Personajes: ", i);
}
console.log("-----------------------------------");









//Recorrer la funcion con MAP, y agregar cambios
var ucmMayusculas = ucm.map(function (ucm) {
    return ucm.toUpperCase();
});
console.log(ucmMayusculas);






console.log("-----------------------------------");

//Definir el Array
var bandas = ["Adema", "AC/DC", "Angra", "As lie day"];

//Filtrar bandas que tengo 5 caracteres
var bandasCortas = bandas.filter(function (filtro) {
    return filtro.length <= 5;
});
console.log(bandasCortas);





console.log("-----------------------------------");