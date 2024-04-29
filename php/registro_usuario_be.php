<?php

$servidor="bpd1rhxzil86jzvoxlbu-mysql.services.clever-cloud.com";
$puerto = "3306";
$usuario="uhwver45bn3o1mac";
$clave="2SFUl7IjeZbybfGDKa7w";
$baseDeDatos="bpd1rhxzil86jzvoxlbu";

$enlace=mysqli_connect($servidor, $usuario, $clave, $baseDeDatos, $puerto);

?>
<?php 

if(isset($_POST["registroBtn"])){
    $usuario = $_POST ["user"];
    $nombre = $_POST["name"];
    $apellidos = $_POST["lastName"];
    $email = $_POST["email"];
    $contraseña = $_POST["password"];
    $tipo = $_POST["tipo_user"];
    $cel = $_POST["celular"];

    $insertarDatos = "INSERT INTO usuario VALUES('','$usurio','$nombre','$apellidos','$email','$contraseña','$tipo','$cel')";

    $ejecutarInsertar = mysqli_query($enlace,$insertarDatos);
}



?>