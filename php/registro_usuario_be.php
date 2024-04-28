<?php

    include './conexion_be.php';

 $nombre_completo= $_POST['fullName'];
 $correo_registrado=$_POST['email'];
 $contraseña=$_POST['password'];
 $tipo_negocio=$_POST["Generico"];

 $query = "INSERT INTO usuarios_wipii(Nombre_completo, Email, clave) 
        VALUES('$nombre_completo','$correo_registrado','$contraseña')";

$ejecutar = mysqli_query($conexion,$query);