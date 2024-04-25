var seleccionarProducto = document.querySelector('select');

let precioUnid;
let cuantos = document.getElementById("cantidad");
let valorProducto;
const TOTAL = document.getElementById("dinero");
let precioAll;
const recibidoText = document.getElementById("recibidoDiner");
const devolverTxt = document.getElementById("Dar");
let devolver;
function precios(){
    var valorGuardado;
    let recibido;
    switch(seleccionarProducto.value){
        case "0":
            valorGuardado=alert("Por favor Elige un producto!");
        break;
        case "1":
            valorGuardado=14000;
            recibido=document.getElementById("recibido").value;
        break;
        case "3":
            valorGuardado=50000;
            recibido=document.getElementById("recibido").value;
        break;
        case "4":
            valorGuardado=18000;
            recibido=document.getElementById("recibido").value;
        break;
        case "5":
            valorGuardado=150000;
            recibido=document.getElementById("recibido").value;
        break;
    }
  precioUnid =parseInt(valorGuardado);
  precioAll=precioUnid*cuantos.value;
  TOTAL.innerHTML=precioAll;
  valorGuardado=precioAll;
    recibidoText.innerHTML=recibido;
    devolver= recibido - precioAll;
    devolverTxt.innerHTML =devolver;
    console.log(precioUnid);
}
function precioPlato(){
let valorGuardado;
    switch(seleccionarProducto.value){
        case "0":
            valorGuardado=alert("Por favor Elige un producto!");
        break;
        case "1":
            valorGuardado=14000;
            recibido=document.getElementById("recibido").value;
        break;
        case "2":
            valorGuardado=50000;
            recibido=document.getElementById("recibido").value;
        break;
        case "3":
            valorGuardado=18000;
            recibido=document.getElementById("recibido").value;
        break;
        case "4":
            valorGuardado=150000;
            recibido=document.getElementById("recibido").value;
        break;
        case "5":
            valorGuardado=5000;
            recibido=document.getElementById("recibido").value;
        break;
    }
    TOTAL.innerHTML=valorGuardado;
}
function precio_por_cantidad(){
    let valorGuardado;
    let recibido;
        switch(seleccionarProducto.value){
            case "0":
                valorGuardado=alert("Por favor Elige un producto!");
            break;
            case "1":
                valorGuardado=14000;
                recibido=document.getElementById("cantidad").value;
            break;
            case "2":
                valorGuardado=50000;
                recibido=document.getElementById("cantidad").value;
            break;
            case "3":
                valorGuardado=18000;
                recibido=document.getElementById("cantidad").value;
            break;
            case "4":
                valorGuardado=150000;
                recibido=document.getElementById("cantidad").value;
            break;
            case "5":
                valorGuardado=5000;
                recibido=document.getElementById("cantidad").value;
            break;
        }
        
        TOTAL.innerHTML=valorGuardado * recibido;
    }