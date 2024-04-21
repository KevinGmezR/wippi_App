const user = document.getElementById("user");
const password = document.getElementById("password");
const verPass = document.getElementById("viewPass");
const ocultarPass = document.getElementById("hiddenPass");
const ingresar = document.getElementById("entrarBtn");
const cargando = document.getElementById("cargando");
const cuadro = document.getElementById("loginBox");
const saludo = document.getElementById("loginTrue");
const mensajeInicio = document.querySelector('.textWelcome');

ocultarPass.style.display="none";
saludo.style.display="none";
mensajeInicio.style.display="none";

ingresar.addEventListener('click',()=>{
    const DATA ={
        username:user.value,
        contraseña:password.value
    };
    document.querySelector('.username').innerHTML=user.value;
    cuadro.style.display="none";
    saludo.style.display="flex"
    saludo.style.animationName="changeColors";
    saludo.style.animationDuration= "2.5s";
    saludo.style.animationTimingFunction="linear";
    mensajeInicio.style.display="inline";
    mensajeInicio.style.animationName="textAnimation";
    mensajeInicio.style.animationDelay="2.5s";
    mensajeInicio.style.animationDuration= "1.5s";
    setTimeout(()=>{mensajeInicio.innerHTML="Sr. " + user.value +" Estamos cargando tu negocio"},4100);
    setTimeout(()=>{window.location.href="./configuration.html"},10000)
})








function verPassword(){
    password.type="text";
    verPass.style.display="none";
    ocultarPass.style.display="inline-block";
}
function ocultarPassword(){
    password.type="password";
    verPass.style.display="inline-block";
    ocultarPass.style.display="none";
}
user.addEventListener('change',()=>{
    userIngresado.usuario=user.value;
})
password.addEventListener('change',()=>{
    userIngresado.clave=password.value;
})

verPass.addEventListener('click',verPassword);
ocultarPass.addEventListener('click',ocultarPassword);




