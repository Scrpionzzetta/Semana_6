

// La función principal: Ella tiene el mensaje, pero no sabe qué hacer con él.
function obtenerMensaje(callback) {
    const texto = "¡Clase de JS terminada!";
    callback(texto); // Le pasa el texto a la función que tú le envíes
}

// Opción A: Solo imprimirlo
obtenerMensaje((m) => console.log(m));

// Opción B: Alertarlo (aparece una ventana en el navegador)
obtenerMensaje((m) => alert(m));








// Función principal (El Cerebro)
function calculadora(a, b, operacion) {
    return operacion(a, b); 
}

// Aquí definimos las "instrucciones" (callbacks) sobre la marcha:
const suma = calculadora(10, 5, (x, y) => x + y);
const resta = calculadora(10, 5, (x, y) => x - y);
const multi = calculadora(10, 5, (x, y) => x * y);

console.log("Suma: " + suma);   // 15
console.log("Resta: " + resta); // 5
console.log("Multi: " + multi); // 50















// Definición: "procesarEntrada" es la función principal
function procesarEntrada(callback) {
    let nombre = "Usuario"; 
    
    // Aquí es donde "llamamos de vuelta" a la función que recibimos
    callback(nombre); 
}

// Ejecución: Aquí creamos la callback (la flecha) y se la pasamos
procesarEntrada((n) => {
    console.log("Callback ejecutado para: " + n);
});









const numeros = [1, 2, 3, 4, 5];

// Función principal que recorre el array
function operarConNumeros(lista, accion) {
    for (let n of lista) {
        accion(n); // Ejecutamos la "accion" que nos manden
    }
}

// Caso A: Queremos imprimir el doble
operarConNumeros(numeros, (num) => {
    console.log("El doble de " + num + " es " + (num * 2));
});

console.log("---");

// Caso B: Queremos saber si son pares
operarConNumeros(numeros, (num) => {
    if (num % 2 === 0) {
        console.log(num + " es par");
    }
});








function formatearNombre(nombre, apellido, callback) {
    return callback(nombre, apellido);
}

// Ejemplo 1: Formato para una lista de asistencia (Apellido, Nombre)
const listaAsistencia = formatearNombre("Daniel", "Scarlazzetta", (n, a) => {
    return a.toUpperCase() + ", " + n;
});

// Ejemplo 2: Formato para un diploma (Nombre Apellido)
const diploma = formatearNombre("Daniel", "Scarlazzetta", (n, a) => {
    return "Don/Doña " + n + " " + a;
});

console.log(listaAsistencia); // SCARLAZZETTA, Daniel
console.log(diploma);         // Don/Doña Daniel Scarlazzetta









function procesarEntrada(callback) {
    console.log("1. El sistema está preparando los datos...");
    let nombre = "Daniel"; 
    
    console.log("2. Los datos están listos. Llamando a la callback...");
    callback(nombre);
}

// Aquí tú decides qué pasa al final del proceso
procesarEntrada((n) => {
    console.log("3. ¡Hola " + n + "! Los datos se guardaron con éxito.");
});x 











//Callback que valida información

// Función principal: recibe un dato y una función que decide si es válido
function validarDato(dato, callback) {
if (callback(dato)) {
console.log("Dato válido: " + dato);
} else {
console.log("Dato inválido: " + dato);
}
}

//valida si el número es mayor a 10
validarDato(15, (n) => n > 10); // válido
validarDato(5, (n) => n > 10); // inválido 










//Callback que transforma texto

// Función principal: recibe un texto y una función que lo modifica
function transformarTexto(texto, callback) {
   return callback(texto);
}

// Callback 1: convertir a mayúsculas
const mayus = transformarTexto("hola mundo", (t) => t.toUpperCase());

// Callback 2: agregar signos
const exclamacion = transformarTexto("hola mundo", (t) => "¡¡" + t + "!!");

console.log(mayus);        // HOLA MUNDO
console.log(exclamacion);  // ¡¡hola mundo!!







//Callback ejecutado varias veces (contador)

// Función principal: repite una acción varias veces
function repetirAccion(veces, callback) {
for (let i = 1; i <= veces; i++) {
callback(i);
}
}

// Callback: mostrar número de repetición
repetirAccion(3, (num) => {
console.log("Ejecución número: " + num);
}); 






// EJEMPLO 4: Simulación simple de proceso (más "real")

// Función principal: simula un proceso de compra
function procesarCompra(producto, callback) {
console.log("Procesando compra de: " + producto);

// Aquí se ejecuta lo que queremos hacer después
callback(producto);
}

// Callback 1: mostrar mensaje de éxito
procesarCompra("Notebook", (p) => {
console.log("Compra realizada con éxito: " + p);
});

console.log("---");

// Callback 2: generar boleta
procesarCompra("Notebook", (p) => {
console.log("Generando boleta para: " + p);
}); 










// EJEMPLO AVANZADO: Procesador con múltiples callbacks (filtrar + transformar + acción final)

// Función principal: recibe una lista y 3 callbacks
function procesarDatos(lista, filtro, transformador, accionFinal) {
let resultado = [];

for (let elemento of lista) {

// 1. Primero decidimos si el elemento pasa el filtro
if (filtro(elemento)) {

// 2. Luego transformamos el elemento
let transformado = transformador(elemento);

// 3. Guardamos el resultado
resultado.push(transformado);
}
}

// 4. Finalmente ejecutamos una acción con todos los resultados
accionFinal(resultado);
}


// Lista de números
const numeros = [1, 2, 3, 4, 5, 6];


// EJECUCIÓN: Aquí está lo complejo 
// Estamos pasando 3 callbacks distintos al mismo tiempo

procesarDatos(
numeros,

// Callback 1: FILTRO (solo números pares)
(n) => n % 2 === 0,

// Callback 2: TRANSFORMADOR (multiplicar por 10)
(n) => n * 10,

// Callback 3: ACCIÓN FINAL (mostrar resultados)
(resultado) => {
console.log("Resultado final:");
for (let r of resultado) {
console.log(r);
}
}
); 
