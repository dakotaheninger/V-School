var addition = document.getElementById("add");
var subract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var modulus = document.getElementById("modulus");
var division = document.getElementById("division");
var resultadd = document.getElementById("resultadd");
var resultsub = document.getElementById("resultsub");
var resultmult = document.getElementById("resultmult");
var resultmod = document.getElementById("resultmod");
var resultdiv = document.getElementById("resultdiv");








var total = 0;
var addTwoNumbers = function () {
    var firstadd = document.getElementById("num1").value;
    var secondadd = document.getElementById("num2").value;
    total = parseInt(firstadd) + parseInt(secondadd);
    resultadd.innerHTML = total;
}



addition.addEventListener("click", addTwoNumbers);

var subTwoNumbers = function () {
    var firstsub = document.getElementById("num1").value;
    var secondsub = document.getElementById("num2").value;
    total = parseInt(firstsub) - parseInt(secondsub);
    resultsub.innerHTML = total;
}

subract.addEventListener("click", subTwoNumbers)

var multTwoNumbers = function () {
    var firstmult = document.getElementById("num1").value;
    var secondmult = document.getElementById("num2").value;
    total = parseInt(firstmult) * parseInt(secondmult);
    resultmult.innerHTML = total;
}



multiply.addEventListener("click", multTwoNumbers);

var divTwoNumbers = function () {
    var firstdiv = document.getElementById("num1").value;
    var seconddiv = document.getElementById("num2").value;
    total = parseInt(firstdiv) / parseInt(seconddiv);
    resultdiv.innerHTML = Math.floor(total);
}



division.addEventListener("click", divTwoNumbers);

var modTwoNumbers = function () {
    var firstmod = document.getElementById("num1").value;
    var secondmod = document.getElementById("num2").value;
    total = parseInt(firstmod) % parseInt(secondmod);
    resultmod.innerHTML = total;
}



modulus.addEventListener("click", modTwoNumbers);