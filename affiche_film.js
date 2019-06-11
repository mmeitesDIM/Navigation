$(document).ready(function(){
    
	
    var img = document.createElement('img');
	var film_poster = document.getElementById('poster');
	film_poster.appendChild(img);
	var film = document.getElementById('film');
	film.appendChild(film_poster);
	var titre_film = document.createElement('H1');
	var data = document.getElementById('data');
	data.appendChild(titre_film);
	var p = document.createElement('p');
	data.appendChild(p);
	
	
	var episode = document.getElementById('episode');
	var p_saison =  document.createElement('p');
	episode.appendChild(p_saison);
	var container = document.getElementById('container');
	container.appendChild(film);
	container.appendChild(episode);
	
	var idRecuperee = document.getElementById('idFilm').value;
	const API_KEY="7612d8c6fe88481c3e7ab73e53301a41";
	
	var filmChoisi = "https://api.themoviedb.org/3/tv/"+idRecuperee+"?api_key="+API_KEY+"&language=fr"
	console.log(filmChoisi);
	const getFilmInfoasync = async function () {
		try {
			const response = await fetch(filmChoisi);
			if (response.ok) {
					const jsonData = await response.json();
					console.log(jsonData);
					img.setAttribute( 'src' , "http://image.tmdb.org/t/p/w185/"+jsonData['poster_path']);
					titre_film.innerHTML= jsonData['name'];
					p.innerHTML = jsonData['overview'];
					p.innerHTML +='Genre: ';
					p.innerHTML += jsonData.genres[0]['name'];
					p_saison.innerHTML="";
					var j;
					for(let i in jsonData.seasons){
						j = i+1;
						p_saison.innerHTML += "Saison " + j ;
						p_saison.innerHTML += ", nombre d\'episode :" ;
						p_saison.innerHTML += jsonData.seasons[i]['episode_count'];
						p_saison.innerHTML += "----"
					}
					
				} else {
					console.error('server response : ' + response.status);
				}
		} catch (error) {
			console.error(error);
		}
	}
	var infoFilm = getFilmInfoasync();

});