//Calculadora de la edad de la mascota

function calcularEdad() {
    //esto es para obtener el nombre de la mascota
    let nombre = document.getElementById("nombreMascota").value;

    //ahora hay que obtener la edad  de la mascota
    let edad = document.getElementById("edadMascota").value;
    
    //console.log(typeof(edad)); //esto es para ver el tipo de variable que es (en este caso es line de texto "string")
    edad = Number(edad);
    let mensaje = "";
    //si se cumple lo que esta entre parentesis se ejecuta lo que va entre las llaves
    if(edad > 0 && edad < 50){
        //Calcular la edad humana de la mascota
        let edadHumana = edad * 7;

    //Crear el mensaje para mostrar
        mensaje = `${nombre} tiene ${edad} años, que equivalen a ${edadHumana} años humanos`;
    }else{
        mensaje = "Los datos introducidos no son correctos";
    }
    document.getElementById("resultado").textContent = mensaje;
    
}

//fin

//Calculadora del precio son iva

function calcularPrecio() {
    let nomCliente = document.getElementById("nombreCliente").value;
    let precio = document.getElementById("precioSinIVA").value;
    let cbSelec = document.getElementById("IVAred").checked;
    precio = Number(precio);
    mens = "";
    let IVA = 21;
    let IVAReducido = 10;
    let importe;
    
    if(precio >= 0){
        if(cbSelec){
            importe = precio + (precio*IVAReducido/100);
            mens = `${nomCliente} paga ${precio} euros, que serán ${importe} euros con IVA reducido`;
        }else{
            importe = precio + (precio*IVA/100);
            mens = `${nomCliente} paga ${precio} euros, que serán ${importe} euros con IVA`;
        }
    }else{
        mens = "Los valores introducidos deben ser positivos"
    }
    document.getElementById("result").textContent = mens;
}

//fin

//Calculadora de precio sin IVA

function calc() {
    let precioconIVA = document.getElementById("conIVA").value;
    let cbSelect = document.getElementById("IVA10").checked;
    precioconIVA = Number(precioconIVA);
    mens = "";
    let IVA = 21;
    
    if(precioconIVA >= 0){
        if(cbSelect){
            IVA = 10;
        }
        let valFin = precioconIVA - (precioconIVA*IVA/100);
        valFin = valFin.toFixed(2);
        mens = `El precio sin IVA es ${valFin}`;
        
    }else{
        mens = "Los valores introducidos deben ser positivos"
    }
    document.getElementById("valFin").textContent = mens;
}

//fin

//calculadora

function sumar() {
    let numero1 = Number(document.getElementById("no1").value);
    let numero2 = Number(document.getElementById("no2").value);
    let resultado = numero1 + numero2;
    document.getElementById("respuesta").textContent = resultado;
}
function restar() {
    let numero1 = Number(document.getElementById("no1").value);
    let numero2 = Number(document.getElementById("no2").value);
    let resultado = numero1 - numero2;
    document.getElementById("respuesta").textContent = resultado;
}
function multiplicar() {
    let numero1 = Number(document.getElementById("no1").value);
    let numero2 = Number(document.getElementById("no2").value);
    let resultado = numero1 * numero2;
    document.getElementById("respuesta").textContent = resultado;
}
function dividir() {
    let numero1 = Number(document.getElementById("no1").value);
    let numero2 = Number(document.getElementById("no2").value);
    let resultado = numero1 / numero2;
    document.getElementById("respuesta").textContent = resultado;
}

function limpiar() { 
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
    document.getElementById("respuesta").textContent = ""; //aque es .textContent por que el id esta en la etiqueta p que es parrafo
}
// fin