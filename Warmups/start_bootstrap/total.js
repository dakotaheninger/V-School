var goombaInputValue = document.getElementById("goomba-input").value;
var bobOmbInputValue = document.getElementById("bob-omb-input").value;
var cheepCheepInputValue = document.getElementById("cheep-cheep-input").value;
var goombaInput = document.getElementById("goomba-input");
var bobOmbInput = document.getElementById("bob-omb-input");
var cheepCheepInput = document.getElementById("cheep-cheep-input");
var totalGoomba = document.getElementById("total-goomba");
var totalBobOmb = document.getElementById("total-bob-omb");
var totalCheepcheep = document.getElementById("total-cheep-cheep");
var goombaCapt = document.getElementById("goomba-capt");
var bobOmbCapt = document.getElementById("bob-omb-capt");
var cheepCheepCapt = document.getElementById("cheep-cheep=capt");

var changeGoombaCapt = function() {
    console.log("hello");
    var goombaTotal = 12;
    goombaTotal++;
    totalGoomba.innerHTML = goombaTotal;
}
console.log("hello");
goombaInput.addEventListener("click", changeGoombaCapt);