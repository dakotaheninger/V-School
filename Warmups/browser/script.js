var output = document.getElementById("output");
var reset = document.getElementById("reset");
var log = document.getElementById("log");
var input = document.getElementById("input");

var currentCount = 0;
var counter = function(){
    currentCount++;
    output.innerHTML = currentCount;
}

output.addEventListener("click", counter);

var resetButton = function(){
    for(var i = 1; i <= 3; i++){
        document.getElementById("log" + i).innerHTML = "";
    }
    currentCount = 0;
    output.innerHTML = currentCount;
}

reset.addEventListener("click", resetButton);

var totalLog = 1;
var logNumber = function(){
    if(totalLog < 3){
        document.getElementById("log" + totalLog).innerHTML = currentCount;
        totalLog++
    } else {
        document.getElementById("log" + totalLog).innerHTML = currentCount;
        totalLog = 1;
    }
}


log.addEventListener("click", logNumber);

