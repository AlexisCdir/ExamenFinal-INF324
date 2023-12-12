<?php 
	if($_SESSION["mensajota"] == 'valido') {
?>
<div id="about" class="about">
	<div class="container">
		<div class="row d_flex">
			<div class="col-md-7">
				<div class="titlepage">
					<h2>Su solicitud de Certificado de Egreso se ha realizado con exito</h2>
					<br>
					<h1>A concluido el proceso de solicitud</h1>
					<ul style="font-size: 18px">
					    <p>Puede pasar por ventanilla 1 de Kardex para recoger una copia impresa y firmada de su certificado</p>
					</ul>
					<br>
				</div>
<div style = 'margin-left:40%;margin-top:10%'><a href='fin.inscribe.php' class='read_more'>ACEPTAR!</a></div>

			</div>

		</div>
	</div>
</div>

<?php
	}else{
?>
<div id="about" class="about">
	<div class="container">
		<div class="row d_flex">
			<div class="col-md-7">
				<div class="titlepage">
					<h2>Su inscripcion a temporada ha sido RECHAZADA!</h2>
					<br>
					<h1>Pase por Kardex para mas informacion</h1>
					<ul style="font-size: 18px">
					    <p>Horario de atencion: 8am a 12pm - 2pm a 6pm</p>
					</ul>
					<br>
				</div>
<div style = 'margin-left:40%;margin-top:10%'><a href='fin.inscribe.php' class='read_more'>ACEPTAR!</a></div>

			</div>

		</div>
	</div>
</div>
<?php
	}
?>