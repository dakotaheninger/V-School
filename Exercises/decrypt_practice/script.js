var words = require("an-array-of-english-words")
var funWords = words;



var firstSentance = "pnxxjx kwtr rd gfgjsx fwj ymj gjxy";
var newSentance = firstSentance.split(" ");
 
var firstWord = newSentance[0];

var alphabet = "abcdefghijklmnopqrstuvwxyz";

var possibleWord = "";

var allPossibleWords = [];

var onePossibleWord = "";



for (var x = 0; x < 26; x++) {
    for (var i = 0; i < firstWord.length; i++) {
        var indexNumber = alphabet.indexOf(firstWord[i]);
        if (indexNumber - x < 0) {
            indexNumber += 26;
        }
        possibleWord += alphabet[indexNumber - x];
    }
    allPossibleWords.push(possibleWord);
    possibleWord = "";
}

var correctWord = "";
for (var i = 0; i < allPossibleWords.length; i++) {
    for (var x = 0; x < funWords.length; x++) {
        if (allPossibleWords[i] == funWords[x]) {
            correctWord = funWords[x];
        }
    }
}

var newIndex = 0;
var firstLetter = correctWord[0];
for (var i = 0; i < firstLetter.length; i++) {
    for (var x = 0; x < alphabet.length; x++) {
        if (firstLetter == alphabet[x]) {
            newIndex = x;
        }
    }
}

var firstWordFirstLetterIndex = 0;
var firstLetterFirstWord = firstWord[0];
for (var i = 0; i < firstLetterFirstWord.length; i++) {
    for (var x = 0; x < alphabet.length; x++) {
        if (firstLetterFirstWord == alphabet[x]) {
            firstWordFirstLetterIndex = x;
        }
    }
}

var completeShift = firstWordFirstLetterIndex - newIndex;
var allIndexNumbers = [];
for (var i = 0; i < firstSentance.length; i++) {
    for (var x = 0; x < alphabet.length; x++) {
        if (firstSentance[i] == alphabet[x]) {
            x.toString();
            allIndexNumbers.push(x);


        }
    }
}
newIndexNumbers = []
for (var i = 0; i < allIndexNumbers.length; i++) {
    var currentIndex = (allIndexNumbers[i] - completeShift);
    if (currentIndex < 0) {
        currentIndex += 26;
    }
    newIndexNumbers.push(currentIndex);
}

var eachWord = "";
var finalSentance = [];
for(var i = 0; i < newIndexNumbers.length; i++){
    eachWord += alphabet[newIndexNumbers[i]];
    
}  
finalSentance.push(eachWord);
console.log(finalSentance);


