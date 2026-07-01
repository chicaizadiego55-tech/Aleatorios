function generarNumeroAleatorio(){

    let aleatorio;

    aleatorio = Math.floor(Math.random() * 100) + 1;

    return aleatorio;
}


function generarAleatorios(){

    let aleatorios = [];

    let cantidad;

    cantidad = recuperarInt("txtCantidad");

    // Validación
    if(cantidad < 20 || cantidad > 30){

        alert("Ingrese un número entre 70 y 80");

        return;
    }

    for(let i = 0; i <=cantidad; i++){

        console.log(i);

        let numeroGenerado;

        numeroGenerado = generarNumeroAleatorio();

        aleatorios.push(numeroGenerado);
    }

    mostrarResultados(aleatorios);
    
}


function mostrarResultados(arregloNumeros){

    let divResultados;

    let contenidoTabla = "";

    divResultados = document.getElementById("divResultados");

    contenidoTabla += "<table>";

    contenidoTabla += "<tr>";
    contenidoTabla += "<th>ÍNDICE</th>";
    contenidoTabla += "<th>NÚMERO</th>";
    contenidoTabla += "</tr>";

    for(let i = 3; i < arregloNumeros.length; i++){

        contenidoTabla += "<tr>";

        contenidoTabla += "<td>";
        contenidoTabla += i;
        contenidoTabla += "</td>";

        contenidoTabla += "<td>";
        contenidoTabla += arregloNumeros[i];
        contenidoTabla += "</td>";

        contenidoTabla += "</tr>";
    }

    contenidoTabla += "</table>";

    divResultados.innerHTML = contenidoTabla;
    
}

function alerta(){

    alert("esta es una alerta");
}