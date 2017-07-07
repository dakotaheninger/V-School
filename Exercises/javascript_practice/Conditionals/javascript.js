var travel = document.getElementById("travel");
var who = document.getElementById("who");
var number = document.getElementById("number");
var which = document.getElementById("which");

var names = ["Sarah", "Dakota", "Ben", "Kacie", "Caleb", "Jacob", "Spencer", "Dan", "Chris"];

var whoIsTraveling = function () {
    for (var i = 0; i < names.length; i++) {
        if (names[i] == "Jacob") {
            who.innerHTML += "<li>" + names[i] + ": " + "You can't leave the country" + "</li>";
        } else if (names[i] == "Dakota") {
            who.innerHTML += "<li>" + names[i] + ": " + "Please don't come back" + "</li>";
        } else {
            who.innerHTML += "<li>" + names[i] + ": " + "Have a nice trip" + "</li>";
        }
    }
}
var isTravelButtonClicked = false;

var runTravelButton = function () {
    if (isTravelButtonClicked == false) {
        console.log("In the run button");
        whoIsTraveling();
        isTravelButtonClicked = true;
    }

}

travel.addEventListener("click", runTravelButton);


var a = 15;
var b = 10

var isNumberButtonClicked = false;

var whichNumberIsBigger = function () {
    if (a > b) {
        which.innerHTML = a + " is greater than " + b;
    } else if (b > a) {
        which.innerHTML = b + " is greater than " + a;
    } else {
        which.innerHTML = a + " is equal to " + b;
    }
}

var runNumberButton = function () {
    if (isNumberButtonClicked == false) {
        whichNumberIsBigger();
        isNumberButtonClicked = true;
    }
}
number.addEventListener("click", runNumberButton);
