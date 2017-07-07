

document.getElementById("search").addEventListener("click", function(){
    var xhr  = new XMLHttpRequest();
    var input = document.getElementById("pokemon-name").value;
    var inputLowerCase = input.toLowerCase();
    xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/" + inputLowerCase);
    xhr.send();
    
    xhr.onreadystatechange = function() {
        var DONE = 4;
        var OK = 200;
        if(xhr.readyState == DONE){
            if(xhr.status == OK){
                var pokemon = JSON.parse(xhr.responseText);
                document.getElementById("name").innerHTML = "Name: " + input;
                document.getElementById("id").innerHTML = "<p> ID: " + pokemon.id + "</p>";
                document.getElementById("height").innerHTML = "<p> Height: " + pokemon.height + " ft.</p>";
                document.getElementById("weight").innerHTML = "<p> Weight: " + pokemon.weight + " lbs.</p>";
//                console.log(pokemon.sprites.back_default);
                document.getElementsByTagName("body")[0].style.backgroundImage = "url("+ pokemon.sprites.front_shiny + ")";
                document.querySelector(".pokemon-box").style.backgroundImage = "url(images/pokemon.png)";
                document.querySelector(".pokemon-box").style.backgroundColor = "rgba(0,0,0,0.6)";
                
    ;        } else {
                console.log("Error: " + xhr.status);
            }
        }
    }
});


