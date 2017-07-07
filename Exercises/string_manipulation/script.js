var firstString = prompt("Please enter a string");
while (firstString === "") {
    firstString = prompt("Please enter a string");
}

var secondString = prompt("Please enter another string");
while (secondString === "") {
    secondString = prompt("Please enter another string");
}

var firstOption = function (firstString, secondString) {
    var half = Math.round(firstString.length / 2);
    var secondHalf = firstString.substr(half, firstString.length);

    console.log(secondHalf);

    var secondHalfUpper = secondHalf.toUpperCase();

    console.log(secondHalfUpper);

    var secondHalfLength = secondHalf.length;

    console.log(secondHalfLength);

    var combinedString = secondHalf + " " + secondString;

    console.log(combinedString);
}

var secondOption = function (firstString, secondString) {

    console.log(firstString);

    var upperCase = firstString.toUpperCase();

    console.log(upperCase);

    var inputLength = firstString.length;

    console.log(inputLength);

    var half = Math.round(secondString.length / 2);
    var secondHalf = secondString.substr(half, secondString.length);

    var combinedString = firstString + " " + secondHalf;

    console.log(combinedString);
}

var thirdOption = function (firstString, secondString) {

    var half = Math.round(firstString.length / 2);
    var secondHalfFirst = firstString.substr(half, firstString.length);

    console.log(secondHalfFirst);

    var secondHalfUpper = secondHalfFirst.toUpperCase();

    console.log(secondHalfUpper);

    var secondHalfLength = secondHalfFirst.length;

    console.log(secondHalfLength);

    var half = Math.round(secondString.length / 2);
    var secondHalfSecond = secondString.substr(half, secondString.length);

    var combinedString = secondHalfFirst + " " + secondHalfSecond;

    console.log(combinedString);
}

var fourthOption = function (firstString, secondString) {

    console.log(firstString);

    var upperCase = firstString.toUpperCase();

    console.log(upperCase);

    var inputLength = firstString.length;

    console.log(inputLength);

    var combinedString = firstString + " " + secondString;

    console.log(combinedString);

}



if (firstString.length > 20 && secondString.length <= 20) {
    firstOption(firstString, secondString);


} else if (firstString.length <= 20 && secondString.length > 20) {
    secondOption(firstString, secondString);



} else if (firstString.length > 20 && secondString.length > 20) {
    thirdOption(firstString, secondString);


} else {
    fourthOption(firstString, secondString);
}



var indexStart = prompt(" " + firstString + ": choose the number of the character where you would like to start");
var indexEnd = prompt(" " + firstString + ": choose the number of the character where you would like to end");



function printString(start, end) {
    var chosenString = firstString.substr(start, end)
    console.log(chosenString);
}

printString(indexStart, indexEnd);
