$(document).ready( function(){
    var self=this;
    
    //On determine une variable data pour la suite
    this.data=false;
    //On determine la cle qui permet de consulter l'API
    const API_KEY="7612d8c6fe88481c3e7ab73e53301a41";
    
    
    //Url pour faire de la récupération de données selon la doc https://developers.themoviedb.org/3/genres/get-movie-list
  
    //URL pour récupérer la liste des genres disponibles
    let genre_film="https://api.themoviedb.org/3/genre/movie/list?api_key="+API_KEY+"&language=fr";
    let list_film="https://api.themoviedb.org/3/discover/tv?api_key="+API_KEY+"&language=fr&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false";
    
    //On fait un test d'appel ajax pour consulter l'API avec une des URL ci dessous
    $.ajax({
        url : genre_film,
        success : function(pData,pResult){
            //Si on a un retour réussi
            if(pResult=="success") {
                //On affiche la data
                console.log(pData);
                //On initialise la data pour la suite
                self.data=pData;
                //Test pour parcourir les genres et les afficher
                for(var i in self.data.genres){
                    //$("#liste_genre").append("<div class='genre' id='"+self.data.genres[i].id+"'>"+self.data.genres[i].name+"</div>")
                    var div_genre = document.createElement('div');
                    div_genre.classList.add('genre');
                    div_genre.setAttribute( 'id' , self.data.genres[i].id );
                    var p_genre = document.createElement('p');
                    $("#liste_genre").append(div_genre);
                    div_genre.append(p_genre);
                    p_genre.innerHTML = self.data.genres[i].name;
                   
                }
            }
        }
    });
    
    ajaxGet(list_film, function (reponse){
        let films = JSON.parse(reponse);
        console.log(films.results);
        for(var i in films.results){

            var div_film = document.createElement('div');
            div_film.setAttribute( 'id' , films.results[i].id);
            div_film.classList.add('card');
            var div_liste_film = document.getElementById('liste_film');
            div_liste_film.appendChild(div_film);
            
            var div_body = document.createElement('div');
            div_film.append(div_body);
            div_body.classList.add('card-body');
            
            var titre_card = document.createElement('H5');
            titre_card.innerHTML= films.results[i].name;
            div_body.appendChild(titre_card);
            titre_card.classList.add('card-title');
            
            var p_film = document.createElement('p');
            p_film.classList.add('card-text');
            div_body.appendChild(p_film);
            p_film.innerHTML = films.results[i].overview;
            
            var a = document.createElement('a');
            a.classList.add("card-link");
            a.setAttribute('href', "film.php?id="+films.results[i].id);
            div_body.appendChild(a);
            a.innerHTML = 'Plus d\'info';
        }
    });
    
    
    // Exécute un appel AJAX GET
    // Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
    function ajaxGet(url, callback) {
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.addEventListener("load", function () {
            if (req.status >= 200 && req.status < 400) {
                // Appelle la fonction callback en lui passant la réponse de la requête
                callback(req.responseText);
            } else {
                console.error(req.status + " " + req.statusText + " " + url);
            }
        });
        req.addEventListener("error", function () {
            console.error("Erreur réseau avec l'URL " + url);
        });
        req.send(null);
    }
    
    
});