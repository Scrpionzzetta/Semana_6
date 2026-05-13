//Funcion anonima Simple
(function() {
    console.log("Este código se ejecuta solo y no contamina el scope global.");
})();



//Crear una funcion anonima que sume 3 numeros
//eje1
(function() {
    console.log(1+2+3);
})();


//eje1
let a = 1;
let b = 2;
let c = 3;

(function() {
    console.log(a+b+c);
})();
