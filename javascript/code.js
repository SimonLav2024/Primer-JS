alert ("Hola mundo ostiassss jeje");

//let es una variable como var en css 
let nombre = "Simon";

console.log(nombre);

nombre = "Pepe"; //el texto se debe de poner entre comillas, si meto un numero entre comillas sera tratado como texto

console.log(nombre);

let precio = 36;
console.log("el precio es:" + precio);
precio = precio * 1.1; //los decimales se ponen con puntos no comas y los numeros se ponen sin comillas
console.log("precios actualizados:" + precio);

//const es algo parecido al let como declaracion de variables pero esto se pone cuando no quieres que esa variable sea alterada
const apellido = "Lavdorenko";
console.log (apellido);
//si yo ahora pongo otra vez la variable apellido y le pongo otra asignacion no va a funcionar por que el mismo navegador me dira que es una constate que no se puede alterar

let nom = "Pepe ";
let ape = "Martinez";
let nombreCompleto = nom + ape;
console.log(nombreCompleto);

let esFinde = true; //basicamente puede poner true o false alguna variable
console.log(esFinde);

let cantidad1 = 7;
let cantidad2 = 2;
console.log(cantidad1 % cantidad2); //si ponermos el porcentaje queda el modulo de la division osea que divide esas dos variables y si es una cantidad no exacta lo hace con la exacta mas proxima y deja el valor que queda asta la cantidad exacta
console.log(cantidad1 < cantidad2); //puedes poner mayor o menor o igual o desigual (!=) y te sale en el navegador si es verdadero o falso

let planta1 = "cactus";
let planta2 = "cactus";
console.log(planta1 == planta2); // == es que le estas preguntando si son iguales esas dos variables

let esMayor = false;
let tieneCarnet = false; 
let puedeConducir = esMayor && tieneCarnet;
console.log("Puede conducir? " + puedeConducir);
// && es una "y" en el sentido de que se tienen que cumplir las condiciones que tu pones en la variable

let esFinde1 = false;
let esVerano = true;
let voydepaseo = esFinde1 || esVerano;
console.log("Voy de paseo? " + voydepaseo);
// basicamente || significa "or" el otro es "and" y este es "or" el or es falso si todas son falsas 

let verdadero = true;
console.log(!verdadero); // la "!" es "not" es negacion

let texto = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
console.log(texto.length); //esto es para saber los caracteres incluyendo espacios que hay en una cadena o un texto

console.log(texto.toLowerCase()); // poner todas en minuscula y hay que poner los parentesis porque es una funcion
console.log(texto.toUpperCase()); // te los pone todo en mayuscula
