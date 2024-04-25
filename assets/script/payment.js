var seleccionarProducto = document.getElementById("productSelect");

let precioUnid;
let cuantos = document.getElementById("cantidad");
let valorProducto;
const TOTAL = document.getElementById("dinero");
const recibidoText = document.getElementById("recibidoDiner");
const devolverTxt = document.getElementById("Dar");
let devolver;






const ABRIR = document.getElementById("nuevaVenta");
const CERRAR = document.getElementById("cerrarVentana");
const ventana = document.getElementById("cuadro_de_venta");
CERRAR.addEventListener('click',()=>{
    
    ventana.style.left="-100px";
    ventana.style.opacity="0"
    setTimeout(() => {
        ventana.style.display="none";
    }, 1000);
    
})
ABRIR.addEventListener('click',()=>{

    ventana.style.display="flex";
    ventana.style.opacity="0";
    setTimeout(() => {
        ventana.style.transition="500ms";
        ventana.style.left="50%";
        ventana.style.opacity="1";
    }, 1);
    
})