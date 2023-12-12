<?php 
$con=mysqli_connect("localhost","infu324","123456","workflow"); 
$espec=$_GET["espec"];
$flujo = $_GET["flujo"];
$proceso = $_GET["proceso"];
$ciest=$_GET["ciest"];
$sec=$_GET["sec"];
$resultado = mysqli_query($con, "delete from mibd_cundir.especialidad where espec = '$espec' LIMIT 1");
header("Location: pantalla.php?flujo=$flujo&proceso=$proceso&ciest=$ciest&sec=$sec");
?>