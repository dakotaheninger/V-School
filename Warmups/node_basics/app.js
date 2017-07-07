var readlineSync = require("readline-sync");
//var name = readlineSync.question("What is your name? ");
//var age = readlineSync.question("What is your age? ");
//var color = readlineSync.question("What is your favorite color? ");
//
//
//var newName = name;
//if(name.length > 20){
//    var halfway = (name.length / 2)
//    for(var i = 0; i < halfway; i++){
//        newName = name.slice(-halfway);
//        }
//    console.log("Hello: " + newName.toUpperCase());
//    console.log("Your name is " + name.length + " characters long");
//} else {
//    console.log("Hello: " + newName.toUpperCase());
//    console.log("Your name is " + name.length + " characters long");
//}
//
//var newAge = age;
//if(age.length > 20){
//    var halfway = (age.length / 2)
//    for(var i = 0; i < halfway; i++){
//        newAge = age.slice(-halfway);
//        }
//    console.log("Happy late birthday for the last " + newAge + " years");
//} else {
//    console.log("Happy late birthday for the last " + newAge + " years");
//
//}
//
//var newColor = color;
//if(color.length > 20){
//    var halfway = (color.length / 2)
//    for(var i = 0; i < halfway; i++){
//        newColor = color.slice(-halfway);
//        }
//    console.log("If you were " + newColor + " then people would call you " + newColor + " " + newName);
//} else {
//    console.log("If you were " + newColor + " then people would call you " + newColor + " " + newName);
//}
//
//
var sentance = readlineSync.question("Write out a sentance! ");
//
//var newSentance = "";
//if(sentance.length > 20){
//    var halfway = (sentace.length / 2)
//    newSentance = sentance.slice(-halfway);
//} else {
//    newSentance = sentance
//}

var indexStart = parseInt(readlineSync.question("Your Sentance was \"" + sentance + "\". Pick the number of the letter where you want to start saving your sentance! "));


var newSentance = sentance.slice((indexStart - 1), sentance.length - 1);
console.log(newSentance);















//console.log(color.toUpperCase() + " is a very pretty color");











//var fs = require("fs");




//var newSentance = "";
//var antiCaps = function(str){
//for(var i = 0; i < str.length; i++){
//  var c = str[i];
//  if(c == c.toUpperCase()){
//    newSentance += c.toLowerCase();
//  } else if(c == c.toLowerCase()){
//    newSentance += c.toUpperCase();
//  } else {
//    newSentance += c;
//  }
//  }
//    return newSentance;
//}
//
//fs.readFile("text.txt", "utf8", function(err, data){
//    console.log(antiCaps(data));
//})

//var fizzBuzz = function(num){
//    for(var i = 0; i <= num; i++){
//        if(i % 3 == 0 && i % 5 == 0){
//            console.log("FizzBuzz");
//        } else if(i % 3 == 0){
//            console.log("Fizz");
//        } else if(i % 5 == 0){
//            console.log("Buzz");
//        } else {
//            console.log(i);
//        }
//}
//}
//
//fizzBuzz(60); 