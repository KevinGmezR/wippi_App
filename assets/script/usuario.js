const usuario = document.getElementById("nameUser").value;
const email = document.getElementById("correo").value;

const texto_tipo_usuario = document.getElementById("tipousuario");

texto_tipo_usuario.innerHTML="¿que tipo de cuenta desea crear " + usuario;
