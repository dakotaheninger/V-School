//var time = 20;
//
//
//var runTimer = function(){
//    if(time > 0){
//    time--;
//        if(time < 10){
//            time = "0" + time;
//        } else {
//            time = time;
//        }
//    document.querySelector(".end").innerHTML = ":" + time;
//}  else {
//    clearInterval(interval);
//}
//}
//    
//var interval = setInterval(runTimer, 1000);

var time = [0, 0, 5];

var addZero = function (num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}
var currentTime = addZero(time[0]) + ":" + addZero(time[1]) + ":" + addZero(time[2]);

var runTimer = function (arr) {
    document.querySelector(".end").innerHTML = currentTime;
    if (time[0] > 0 || time[1] > 0 || time[2] > 0) {
        if (time[2] == 0 && time[1] > 0) {
            time[2] = 60;
            time[1]--;
        }
        if (time[1] == 0 && time[0] > 0) {
            time[1] = 60;
            time[0]--;
        }
        time[2]--;
        currentTime = addZero(time[0]) + ":" + addZero(time[1]) + ":" + addZero(time[2]);
    } else {
        clearInterval(interval);
        document.getElementsByTagName("BODY")[0].style.backgroundImage = "url(images/end%20of%20world.jpg)";
        document.querySelector(".end").innerHTML = "THE END OF THE WORLD HAS COME UPON US";
    }
}

var interval = setInterval(runTimer, 1000);
