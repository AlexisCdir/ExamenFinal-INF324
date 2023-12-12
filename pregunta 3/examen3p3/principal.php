<?php
	include 'conexion.php';
	
	$pdo = new Conexion();

	//Listar registros y consultar registro
	if($_SERVER['REQUEST_METHOD'] == 'GET')
	{
		if (isset($_GET["ci"]))
		{
			$sqlp="SELECT * FROM alumno where ci=:ci";
			$sql = $pdo->prepare($sqlp);
			$sql->bindValue(':ci', $_GET["ci"]);
			$sql->execute();
			$sql->setFetchMode(PDO::FETCH_ASSOC);
			echo json_encode($sql->fetchAll());
			header("HTTP/1.1 200 hay datos");		
			exit;		
		}
		else
		{
			$sqlp="SELECT * FROM alumno";
			$sql = $pdo->prepare($sqlp);
			$sql->execute();
			$sql->setFetchMode(PDO::FETCH_ASSOC);
			echo json_encode($sql->fetchAll());
			header("HTTP/1.1 200 hay datos");
			exit;		
		}
			
	}
	
	//Insertar registro
	if($_SERVER['REQUEST_METHOD'] == 'POST')
	{
		$sqlp="insert into alumno values(:ci,:nombre,:paterno,:celular)";
		$sql = $pdo->prepare($sqlp);
		$sql->bindValue(':ci', $_GET["ci"]);
		$sql->bindValue(':nombre', $_GET["nombre"]);
		$sql->bindValue(':paterno', $_GET["paterno"]);
		$sql->bindValue(':celular', $_GET["celular"]);
		$sql->execute();
		echo json_encode('Realizado');
		header("HTTP/1.1 200 ejecucion correcta");
		exit;
	}
	
	if($_SERVER['REQUEST_METHOD'] == 'PUT')
	{		
		$sqlp="update alumno set nombre=:nombre, paterno=:paterno, celular=:celular  where ci=:ci";
		$sql = $pdo->prepare($sqlp);
		$sql->bindValue(':ci', $_GET["ci"]);
		$sql->bindValue(':nombre', $_GET["nombre"]);
		$sql->bindValue(':paterno', $_GET["paterno"]);
		$sql->bindValue(':celular', $_GET["celular"]);
		$sql->execute();
		echo json_encode('Realizado');
		header("HTTP/1.1 200 ejecucion correcta");
		exit;
	}
	
	if($_SERVER['REQUEST_METHOD'] == 'DELETE')
	{
		$sqlp="delete from alumno where ci=:ci";
		$sql = $pdo->prepare($sqlp);
		$sql->bindValue(':ci', $_GET["ci"]);
		$sql->execute();
		echo json_encode('Realizado');
		header("HTTP/1.1 200 ejecucion correcta");
		exit;
	}
	
	header("HTTP/1.1 400 Bad Request");
?>