
//Definimos dos variables numericas
let x = 2;
let y = 4;


//Mostramos el valoer de cada variable
console.log("La variable X tiene un valor de: ", x);
console.log("La variable Y tiene un valor de: ", y);

console.log("-------------------------------------");

//Realizamos operaciones matematicas
console.log("El resultado de sumar X e Y es : ", x + y);
console.log("El resultado de restar X e Y es : ", x - y);
console.log("El resultado de multiplicar X e Y es : ", x * y);
console.log("El resultado de dividir X e Y es : ", x / y);


console.log("-------------------------------------");

//Definimos variables con valor Boolean
let t = true;
let f = false;

//Mostramos el valor de las variables t y f
console.log("La valor de t es: ", t);
console.log("La valor de f es: ", f);

console.log("-------------------------------------");

//Comparativa de valores boleanos
console.log("Si comparamos true con true nos da: ", t == t);
console.log("Si comparamos true con false nos da: ", t == f);
console.log("Si comparamos false con false nos da: ", f == t);

console.log("-------------------------------------");

// Comprobar una u otra
console.log("Si elegimos entre true y true nos da: ", t || t);
console.log("Si elegimos entre true y false nos da: ", t || f);
console.log("Si elegimos entre false y false nos da: ", f || f);

console.log("-------------------------------------");

// Cumplir dos condiciones
console.log("Si elegimos entre true y true nos da: ", t && t);
console.log("Si elegimos entre true y false nos da: ", t && f);
console.log("Si elegimos entre false y false nos da: ", f && f);

console.log("-------------------------------------");

// Distinto
console.log("Si elegimos entre true y true nos da: ", t != t);
console.log("Si elegimos entre true y false nos da: ", t != f);
console.log("Si elegimos entre false y false nos da: ", f != f);