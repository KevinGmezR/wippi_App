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
const facturar = document.getElementById("facturarBtn");
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

facturar.addEventListener('click',descargarPDF);

var contenedorInfoPayment = document.getElementById("informacion_pago");
var contenedorTabla = document.getElementById('contenedor_tabla');
    contenedorTabla.style.display="none";
var contenedorAll = document.getElementById("recibo");
function descargarPDF() {
    contenedorTabla.style.transition="all 300ms";
    contenedorTabla.style.display="flex";
    contenedorTabla.style.flexDirection="column";
    contenedorTabla.style.justifyContent="center";
    contenedorTabla.style.alignItems="center";
    var tabla = document.getElementById('productos_comprados');
    var payment = document.getElementById("infoPayment");
    
    // Clonar la tabla y agregarla al contenedor
    var informacionClonada = payment.cloneNode(true);
        contenedorInfoPayment.innerHTML='';
        contenedorInfoPayment.appendChild(informacionClonada);
    var tablaClonada = tabla.cloneNode(true);
    contenedorTabla.innerHTML = '';
    contenedorTabla.appendChild(tablaClonada);
    

    // Generar el PDF
    html2pdf()
        .from(contenedorAll)
        .toPdf()
        .get('pdf')
        .then(function (pdf) {
            // Abrir el PDF en una nueva ventana
            window.open(pdf.output('bloburl'), '_blank');

            limpiarTabla()
        });
}

function limpiarTabla() {
    var cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";
}