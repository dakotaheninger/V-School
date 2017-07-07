var boxes = document.getElementsByClassName("box");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");

var turnBlue = function () {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "blue";
    }
};

var turnRed = function () {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "red";
    }
}

var turnYellow = function() {
    for(var i = 0; i <boxes.length; i++) {
        boxes[i].style.backgroundColor = "yellow";
    }
}

var turnGreen = function() {
    for(var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "green";
    }
}

var turnOrange = function() {
    for(var i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = "orange";
    }
}

var keyNumber = 0;
var keyStrokeIdentifier = function() {
    if(event.which == 66){
        turnBlue();
    } else if(event.which == 71) {
        turnGreen();
    } else if(event.which == 79) {
        turnOrange();
    } else if(event.which == 82) {
        turnRed();
    } else if(event.which == 89) {
        turnYellow();
    }
}

window.addEventListener("keydown",keyStrokeIdentifier);

first.addEventListener("mouseover", turnBlue);
second.addEventListener("mouseover", turnBlue);
third.addEventListener("mouseover", turnBlue);
fourth.addEventListener("mouseover", turnBlue);

first.addEventListener("mouseup", turnYellow);
second.addEventListener("mouseup", turnYellow);
third.addEventListener("mouseup", turnYellow);
fourth.addEventListener("mouseup", turnYellow);

first.addEventListener("mousedown", turnRed);
second.addEventListener("mousedown", turnRed);
third.addEventListener("mousedown", turnRed);
fourth.addEventListener("mousedown", turnRed);

first.addEventListener("dblclick", turnGreen);
second.addEventListener("dblclick", turnGreen);
third.addEventListener("dblclick", turnGreen);
fourth.addEventListener("dblclick", turnGreen);

window.addEventListener("scroll", turnOrange);
window.addEventListener("scroll", turnOrange);
window.addEventListener("scroll", turnOrange);
window.addEventListener("scroll", turnOrange);
