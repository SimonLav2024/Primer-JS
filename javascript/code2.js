function calcularEdad() {
    //esto es para obtener el nombre de la mascota
    let nombre = document.getElementById("nombreMascota").value;

    //ahora hay que obtener la edad  de la mascota
    let edad = document.getElementById("edadMascota").value;
    
    //console.log(typeof(edad)); //esto es para ver el tipo de variable que es (en este caso es line de texto "string")
    edad = Number(edad);

    //Calcular la edad humana de la mascota
    let edadHumana = edad * 7;

    //Crear el mensaje para mostrar
    let mensaje = `${nombre} tiene ${edad} años, que equivalen a ${edadHumana} años humanos`;

    document.getElementById("resultado").textContent = mensaje;
}

function calcularPrecio() {
    let nomCliente = document.getElementById("nombreCliente").value;
    let precio = document.getElementById("precioSinIVA").value;
    precio = Number(precio);
    let precioConIVA = precio + 21%(precio);
    let mens = `${nomCliente} paga ${precio} euros, que serán ${precioConIVA} euros con IVA`;
    document.getElementById("result").textContent = mens;
}