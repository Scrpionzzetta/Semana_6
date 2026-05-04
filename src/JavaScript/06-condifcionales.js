

//Vamos a usar los IF
if(true){
    alert("Esto es un alert con un IF");
}


//Definimos las variables
let edad = 18;
let limiteEdad = 18;

//Hacemos nuestro primer if
if(edad >= limiteEdad){
    console.log("Mayor de edad");
}else{
    console.log("Menor de edad");
}


console.log("''''''''''''''''''''''''''''''''''''''");


//If anidados
if( edad >= limiteEdad ){
    console.log("Mayor de edad");
    
    if(edad == 20){
        console.log("El usuario tiene: 20 años");
    }else if(edad == 30){
        console.log("El usuario tiene: 30 años");
    }
    
}else{
    console.log("Menor de edad");
}
console.log("La edad es: ", edad);


console.log("''''''''''''''''''''''''''''''''''''''");
console.log("''''''''''''''''''''''''''''''''''''''");
console.log("''''''''''''''''''''''''''''''''''''''");



//Creamos otro if, usando el "Y" (&&)
if(edad >= limiteEdad && (edad <= (limiteEdad + 82))){
    
    console.log("Mayor de edad y menor de 100");
    //Agregamos el operador && (Y) y el Distinto !=
}else if(edad <= limiteEdad && edad != 2){
    console.log("Esta persdona es menor de edad y no tiene dos años");
}else{
    console.log("Es un puberto");
}


console.log("''''''''''''''''''''''''''''''''''''''");
console.log("''''''''''''''''''''''''''''''''''''''");
console.log("''''''''''''''''''''''''''''''''''''''");

//If con condicional "Ó"
if( (edad == 1) || (edad < limiteEdad) ){
    console.log("No puede comprar alcohol");
}else{
    console.log("Si puede comprar alcohol");
}
 