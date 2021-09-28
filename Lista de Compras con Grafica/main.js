
var total = [];


function agregar1(){
    var botonElement = document.getElementById("boton1");
    var pElement = document.getElementById("tablet");
    
    var contador = 0;
    botonElement.onclick = function () {
        contador++;
        pElement.textContent = contador;
        var los3 = parseInt(document.getElementById('num1').value);
        total.push(los3);
    }
}

function agregar2(){
    var botonElement = document.getElementById("boton2");
    var pElement = document.getElementById("mouse");

    var contador = 0;
    botonElement.onclick = function () {
        contador++;
        pElement.textContent = contador;
        var los3 = parseInt(document.getElementById('num2').value);
        total.push(los3);
    }
}

function agregar3(){
    
    var botonElement = document.getElementById("boton3");
    var pElement = document.getElementById("monitor");

    var contador = 0;
    botonElement.onclick = function () {
        contador++;
        pElement.textContent = contador;
        var los3 = parseInt(document.getElementById('num3').value);
        total.push(los3);
    }
}

function agregar4(){

    var botonElement = document.getElementById("boton4");
    var pElement = document.getElementById("teclado");

    var contador = 0;
    botonElement.onclick = function () {
        contador++;
        pElement.textContent = contador;
        var los3 = parseInt(document.getElementById('num4').value);
        total.push(los3);
    }
}

///////////////////////////


function calcular(){
    
    let monitor = document.getElementById("monitor");
    let monitorValue = parseInt(monitor.innerHTML);

    let mouse = document.getElementById("mouse");
    var mouseValue = parseInt(mouse.innerHTML);

    let teclado = document.getElementById("teclado");
    let tecladoValue = parseInt(teclado.innerHTML);

    let tablet = document.getElementById("tablet");
    let tabletValue = parseInt(tablet.innerHTML);
    
    
    let sum =0;

    for (let index = 0; index < total.length; index++) {
        sum += total[index];
    }

    document.getElementById('resultado').value = sum;

//////////////////////////////////////

    
////////////////////////////////////////

    let miCanvas = document.getElementById("grafica").getContext("2d");

    var chart = new Chart(miCanvas,{
        type:"bar",
        data:{
            labels:["Tablet","Mouse","Monitor", "Teclado"],
            datasets:[
                {
                    label:"Objetos Comprados",
                    backgroundColor:"rgba(211,93,100, 5.2)",//color de fondo
                    borderColor: "rgba(211,93,110, 1)",//color de borde
                    data:[tabletValue,mouseValue,monitorValue,tecladoValue]
                }
            ]
        }
    });
}
////////////////////////////////