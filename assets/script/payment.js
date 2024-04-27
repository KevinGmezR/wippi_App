var seleccionarProducto = document.getElementById("productSelect");


let cuantos = document.getElementById("cantidad");
const dineroRecibido = document.getElementById("clientePaga");
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
var contenedorAll = document.getElementById("recibo");
    contenedorAll.display="none";
facturar.addEventListener('click',descargarPDF);
contenedorAll.display="inline-block";
var contenedorInfoPayment = document.getElementById("informacion_pago");
var contenedorTabla = document.getElementById('contenedor_tabla');
    contenedorTabla.style.display="none";

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
    contenedorAll.innerHTML="";
    cuerpoTabla.innerHTML="";
    recibidoText.innerHTML="0";
    devolverTxt.innerHTML ="0";
    TOTAL.innerText="0";
    dineroRecibido.value="";
}

const boton_añadir = document.getElementById("añadirP");
        boton_añadir.addEventListener('click', añadir);

 const totalString = document.getElementById("dinero");


// Variable global para almacenar la suma total
var sumaTotal = 0;

function añadir(){
    var On = (cantidadInpt.value>0)&&(productoInpt.value!="");
    var onlyProduct = (cantidadInpt.value<=0)&&(productoInpt.value!="");
    var onlyCant =(cantidadInpt.value>0)&&( productoInpt.value==="");
    
    if(On===true){
        insertarFila();
    }
    else if(onlyCant){
        alert("Ups! parece que se te olvido agregar un producto! :( ");
    }
    else if(onlyProduct){
        alert("Hey!, cuantos pedidos de " + productoInpt.value +" estas vendiendo?, se te olvido colocar la cantidad, por favor colocar.");
    }
    else{
        alert("No hay productos que agregar, por favor llena los datos para poder agregarlos");
    }
}
const productoInpt = document.getElementById("productSelect");
const cantidadInpt = document.getElementById("cantidad");
function insertarFila() {
    // Obtener datos


    // Obtener el cuerpo de la tabla
    var cuerpoTabla = document.getElementById("cuerpoTabla");

    // Crear una nueva fila y celdas
    var fila = document.createElement("tr");
    var celdaProducto = document.createElement("th");
    var celdaCodigo = document.createElement("td");
    var celdaCantidad = document.createElement("td");
    var celdaValor = document.createElement("td");

    // Definir variables para el valor y el código del producto
    var valorP, codigoP;

    switch (productoInpt.value) {
        case "Hamburguesa":
            valorP = 15000;
            codigoP = "HAM7071";
            break;
        case "Perro Caliente":
            valorP = 7000;
            codigoP = "PER1603";
            break;
        case "Picada Normal":
            valorP = 14000;
            codigoP = "PIC7642";
            break;
        case "Picada Familiar":
            valorP = 29900;
            codigoP = "PIC3488";
            break;
        case "Especial":
            valorP = 45000;
            codigoP = "ESP2447";
            break;
        
    }

    // Calcular el valor total
    var valorF = valorP * cantidadInpt.value;
    var valorFormateado = valorF.toLocaleString();

    // Agregar los valores a las celdas
    celdaProducto.textContent = productoInpt.value;
    celdaCodigo.textContent = codigoP;
    celdaCantidad.textContent = cantidadInpt.value;
    celdaValor.textContent = "$" + valorFormateado;

    // Agregar las celdas a la fila
    fila.appendChild(celdaProducto);
    fila.appendChild(celdaCodigo);
    fila.appendChild(celdaCantidad);
    fila.appendChild(celdaValor);

    // Agregar la fila al cuerpo de la tabla
    cuerpoTabla.appendChild(fila);

    // Sumar el valor al total global
    sumaTotal += valorF;

    // Mostrar la suma total en algún elemento de la interfaz de usuario
   
    totalString.textContent = sumaTotal.toLocaleString();

    // Limpiar los valores de los inputs
    productoInpt.value = "";
    cantidadInpt.value = "";
}

dineroRecibido.addEventListener('change',()=>{
    let comprobante_de_pago = dineroRecibido.value>0;

    function pago(){
        let cash = dineroRecibido.value*1;
        const recibidoCash = cash.toLocaleString();
        const vuelto = dineroRecibido.value - sumaTotal;
        if(comprobante_de_pago){
            recibidoText.innerHTML= recibidoCash;
            devolverTxt.innerHTML=vuelto.toLocaleString();
        }
    }
    pago();


    
})

