<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Série choisie</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	</head>
<body>
<main>
    <header><h1>"Série choisie"</h1></header>
	<div id="container" class="container post bg-white">
        <div id ="film" class="film_details">
			<input type="hidden" id="idFilm" value=
				<?php
				if (isset($_GET['id'])){
					$idFilm = json_encode($_GET['id']);
					echo $idFilm;
				}
				else{
					echo("Pas d'id");
				}
				?>/>
			<div id="poster" class="col-poster">
			
			</div>
			<div id="data" class="col-data">
			
			</div>
        </div>
		<div class="clear"></div>
        <div id="episode" class="content">
			<h2>"Saisons et épisodes"</h2>
            <div class="raw">
                
            </div>
        </div>
	</div>	
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script type="text/javascript" src="js/affiche_film.js"></script>
</main>
</body>
</html>