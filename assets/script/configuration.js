const loadBar = document.getElementById("LoadBar");
const inputs = document.querySelectorAll('input');
const botones = document.querySelectorAll('.nextConfig');
const typeProduct = document.querySelectorAll('.ofrece');
const imgProduct = document.querySelectorAll('.imgTypeN');
const MENSAJE_INTERMEDIO =  document.getElementById("mensajeConfiguration");


const seccionCreateUser = document.getElementById("createUser");
const seccionTypeN = document.getElementById("negocioInfo");
const sucursal = document.getElementById("sucursal");
const sucursalNumbers = document.getElementById("sucursalN");
const sucursalNames = document.getElementById("sucursalNames");
const finishConfig = document.getElementById("imgTypeNe");
const ancoresCharged = document.querySelectorAll('.lineProceso');
const spanSeparadoresA = document.querySelectorAll('.separadorA');

var medidas = "53 X 44";

ancoresCharged[0].style.display="none";
ancoresCharged[1].style.display="none";
ancoresCharged[2].style.display="none";

spanSeparadoresA[0].style.display="none";
spanSeparadoresA[1].style.display="none";


seccionCreateUser.style.display="block";
seccionTypeN.style.display="none";
sucursal.style.display="none";
sucursalNumbers.style.display="none";
sucursalNames.style.display="none";
finishConfig.style.display="none";


const typeAcount = document.querySelectorAll('.typeAccountInpt');

 typeAcount[0].addEventListener('click',()=>{
    loadBar.style.width="99.7%";
    seccionCreateUser.style.display="none";

    setTimeout(() => {
        document.getElementById("mensajeUser").innerHTML= inputs[0].value+" Compra seguro con wipii";

        document.getElementById("mensajeUser").style.opacity="1";
        document.getElementById("mensajeUser").style.animationDuration="infinite";
        document.getElementById("mensajeUser").style.animation="letras";
        document.getElementById("mensajeUser").style.animationDuration="2.5s";
        document.getElementById("mensajeUser").style.animationIterationCount="linear";
    }, 0);
    setInterval(() => {
        window.location.href="./index.html";
    }, 2600);
 })

 typeAcount[1].addEventListener('click',()=>{

        seccionCreateUser.style.display="none";
    loadBar.style.width="50%";
    seccionTypeN.style.display="flex";
    seccionTypeN.style.flexDirection="column";
    seccionTypeN.style.justifyContent="center";
    seccionTypeN.style.alignItems="center";
   
    
    spanSeparadoresA[0].style.display="inline-block";
    spanSeparadoresA[1].style.display="inline-block";
    ancoresCharged[1].style.display="inline-block";
    ancoresCharged[2].style.display="inline-block";
 })

const employeds = document.getElementsByName('empleados');
employeds[0].addEventListener('click',()=>{
    loadBar.style.width="75%";
    ancoresCharged[0].style.display="inline-block";
    ancoresCharged[1].style.display="inline-block";
    spanSeparadoresA[0].style.display="inline-block";
    spanSeparadoresA[1].style.display="inline-block";

    seccionTypeN.style.display="none";
    finishConfig.style.display="flex";
    finishConfig.style.flexDirection="column";
    finishConfig.style.justifyContent="center";
    finishConfig.style.alignItems="center";
});
let empleadosSelects; /* Guarda el valor seleccionado de empleados que tiene el negocio*/
let comprobarSelect="false";
employeds[1].addEventListener('click',()=>{
   empleadosSelects=employeds[1].value;
   console.log(empleadosSelects);
   comprobarSelect="true";
});
employeds[2].addEventListener('click',()=>{
    empleadosSelects=employeds[2].value;
    console.log(empleadosSelects);
    comprobarSelect="true";
});
employeds[3].addEventListener('click',()=>{
    empleadosSelects=employeds[3].value;
    console.log(empleadosSelects);
    comprobarSelect="true";
    console.log(comprobarSelect);
});
blockIfnotSelect();
function blockIfnotSelect(){
        botones[0].addEventListener('click',()=>{
            switch (comprobarSelect){
                case "true":
                    loadBar.style.width="80%";
                    seccionTypeN.style.display="none";
                    sucursal.style.display="flex";
                    sucursal.style.flexDirection="column";
                    sucursal.style.justifyContent="center";
                    sucursal.style.alignItems="center";
                break;
                case "false":
                    alert("selecciona una respuesta para continuar");
                break;
            }
        })
}

const sucursalPlace = document.getElementsByName("sucursal"); /* En esta variable se guarda la seleccion sobre si tiene o no tiene sucursal el negocio (Es decir espacio fisico[Restaurantes,oficinas,sedes,etc])*/

sucursalPlace[0].addEventListener('click',()=>{
    loadBar.style.width="99%";
    sucursal.style.display="none";
    sucursalNumbers.style.display="flex"
    sucursalNumbers.style.flexDirection="column"
    sucursalNumbers.style.justifyContent="center"
    sucursalNumbers.style.alignItems="center"
})
sucursalPlace[1].addEventListener('click',()=>{
    sucursal.style.display="none";
    loadBar.style.width="99.7%";
    finishConfig.style.display="flex";
    finishConfig.style.flexDirection="column";
    finishConfig.style.justifyContent="center";
    finishConfig.style.alignItems="center";

})


botones[1].addEventListener('click',()=>{
   
    sucursalNumbers.style.display="none"
    loadBar.style.width="95%";
    finishConfig.style.display="none";
    sucursalNames.style.display="flex";
    sucursalNames.style.flexDirection="column";
    sucursalNames.style.justifyContent="center";
    sucursalNames.style.alignItems="center";

    
})

botones[2].addEventListener('click',()=>{
    sucursalNames.style.display="none"
    finishConfig.style.display="flex";
    finishConfig.style.flexDirection="column";
    finishConfig.style.justifyContent="center";
    finishConfig.style.alignItems="center";
})


document.getElementById("finishConfig").addEventListener('click',()=>{
    window.location.href="./index.html"
});

/*seleccionar tipo de negocio*/

const restaurante = imgProduct[0];
const Servicios = imgProduct[1];
const otros = imgProduct[2];

restaurante.addEventListener('click',()=>{
    typeProduct[0].style.borderRadius="15px";
    typeProduct[0].style.boxShadow="2px 2px 5px #003a5c65, -2px -2px 5px #808080";
    typeProduct[0].style.border="2px solid #31578f";
    typeProduct[0].style.backgroundColor="#cecece";

    typeProduct[1].style.borderRadius="15px";
    typeProduct[1].style.boxShadow="none";
    typeProduct[1].style.border="none";
    typeProduct[1].style.backgroundColor="transparent";

    typeProduct[2].style.borderRadius="15px";
    typeProduct[2].style.boxShadow="none";
    typeProduct[2].style.border="none";
    typeProduct[2].style.backgroundColor="transparent";
});
Servicios.addEventListener('click',()=>{
    typeProduct[0].style.borderRadius="15px";
    typeProduct[0].style.boxShadow="none";
    typeProduct[0].style.border="none";
    typeProduct[0].style.backgroundColor="transparent";

    typeProduct[1].style.borderRadius="15px";
    typeProduct[1].style.boxShadow="2px 2px 5px #003a5c65, -2px -2px 5px #808080";
    typeProduct[1].style.border="2px solid #31578f";
    typeProduct[1].style.backgroundColor="#cecece";

    typeProduct[2].style.borderRadius="15px";
    typeProduct[2].style.boxShadow="none";
    typeProduct[2].style.border="none";
    typeProduct[2].style.backgroundColor="transparent";
});
otros.addEventListener('click',()=>{
    typeProduct[0].style.borderRadius="15px";
    typeProduct[0].style.boxShadow="none";
    typeProduct[0].style.border="none";
    typeProduct[0].style.backgroundColor="transparent";

    typeProduct[1].style.borderRadius="15px";
    typeProduct[1].style.border="";
    typeProduct[1].style.boxShadow="none";
    typeProduct[1].style.border="none";
    typeProduct[1].style.backgroundColor="transparent";

    typeProduct[2].style.borderRadius="15px";
    typeProduct[2].style.boxShadow="2px 2px 5px #003a5c65, -2px -2px 5px #808080";
    typeProduct[2].style.border="2px solid #31578f";
    typeProduct[2].style.backgroundColor="#cecece";
});