var characterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '$', '!', '(', ')'];
var generateButton = document.getElementById("gen-button");
var passwordText = document.getElementById("password-text");

var genRanPassword = function (min, max) {
    var passwordLength = Number(document.getElementById("password-length").value);
    var index = "";
    for (var i = 0; i < passwordLength; i++) {
        index += characterArr[Math.floor(Math.random() * (max - min)) + min];
    }
    passwordText.innerHTML = index;
}

var runPassword = function() {
    genRanPassword(0, characterArr.length - 1);
}

document.getElementById("password-length").addEventListener("change", runPassword);
