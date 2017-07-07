axios.get("http://api.vschool.io:6543/hitlist.json").then(function (response) {
    document.getElementById("skinny-text").innerHTML = response.data[0].name;
    document.getElementById("skinny").style.backgroundImage = "url(" + response.data[0].image + ")";
    document.getElementById("bugs-text").innerHTML = response.data[1].name;
    document.getElementById("bugs").style.backgroundImage = "url(" + response.data[1].image + ")";
    document.getElementById("rebecca-text").innerHTML = response.data[2].name;
    document.getElementById("rebecca").style.backgroundImage = "url(" + response.data[2].image + ")";
    document.getElementById("six-text").innerHTML = response.data[3].name;
    document.getElementById("six").style.backgroundImage = "url(" + response.data[3].image + ")";
    document.getElementById("ewok-text").innerHTML = response.data[4].name;
    document.getElementById("ewok").style.backgroundImage = "url(" + response.data[4].image + ")";
    document.getElementById("jabba-text").innerHTML = response.data[5].name;
    document.getElementById("jabba").style.backgroundImage = "url(" + response.data[5].image + ")";
    document.getElementById("vegetables-text").innerHTML = response.data[6].name;
    document.getElementById("vegetables").style.backgroundImage = "url(" + response.data[6].image + ")";
}).catch(function (err) {
    console.log(err);
})



//var createHitbox = function (name, image) {
//    var colMd4 = document.createElement("div");
//    colMd4.setAttribute("class", "col-md-4");
//    colMd4.setAttribute("id", "hit-box");
//    colMd4.style.backgroundImage = "url(" + image + ")";
//    
//    
//    var nameBox = document.createElement("p");
//    nameBox.setAttribute("class", "bad-text");
//    nameBox.innerHTML = name;
//    
//    colMd4.appendChild(nameBox);
//
//
//    
//
//
//    document.querySelector("#hitlist").appendChild(colMd4)
//
//}

//createHitbox("Dakota", "http://static.dnaindia.com/sites/default/files/2015/07/27/359539-clip-art-bugs-bunny-397350.jpg");



var killSkinny = function() {
    var skinny = document.getElementById("skinny");
    skinny.style.filter = "grayscale(0%)";
    skinny.style.opacity = "0.2";
    skinny.style.backgroundImage = "url(images/skull.png)";
    skinny.style.backgroundColor = "red";
}

document.getElementById("skinny").addEventListener("click", killSkinny);



var killBugs = function() {
    var bugs = document.getElementById("bugs");
    bugs.style.filter = "grayscale(0%)";
    bugs.style.opacity = "0.2";
    bugs.style.backgroundImage = "url(images/skull.png)";
    bugs.style.backgroundColor = "red";
}

document.getElementById("bugs").addEventListener("click", killBugs);



var killRebecca = function() {
    var rebecca = document.getElementById("rebecca");
    rebecca.style.filter = "grayscale(0%)";
    rebecca.style.opacity = "0.2";
    rebecca.style.backgroundImage = "url(images/skull.png)";
    rebecca.style.backgroundColor = "red";
}

document.getElementById("rebecca").addEventListener("click", killRebecca);



var killSix = function() {
    var six = document.getElementById("six");
    six.style.filter = "grayscale(0%)";
    six.style.opacity = "0.2";
    six.style.backgroundImage = "url(images/skull.png)";
    six.style.backgroundColor = "red";
}

document.getElementById("six").addEventListener("click", killSix);



var killEwok = function() {
    var ewok = document.getElementById("ewok");
    ewok.style.filter = "grayscale(0%)";
    ewok.style.opacity = "0.2";
    ewok.style.backgroundImage = "url(images/skull.png)";
    ewok.style.backgroundColor = "red";
}

document.getElementById("ewok").addEventListener("click", killEwok);



var killJabba = function() {
    var jabba = document.getElementById("jabba");
    jabba.style.filter = "grayscale(0%)";
    jabba.style.opacity = "0.2";
    jabba.style.backgroundImage = "url(images/skull.png)";
    jabba.style.backgroundColor = "red";
}

document.getElementById("jabba").addEventListener("click", killJabba);



var killVegetables = function() {
    var vegetables = document.getElementById("vegetables");
    vegetables.style.filter = "grayscale(0%)";
    vegetables.style.opacity = "0.2";
    vegetables.style.backgroundImage = "url(images/skull.png)";
    vegetables.style.backgroundColor = "red";
}

document.getElementById("vegetables").addEventListener("click", killVegetables);



