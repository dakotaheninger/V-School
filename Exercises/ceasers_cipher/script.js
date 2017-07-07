var buttonClick = document.getElementById("button-click");
var finalEncryption = document.getElementById("final-encryption");
var buttonDecrypt = document.getElementById("button-decrypt");
var finalDecryption = document.getElementById("final-decryption")




//*****ENCRYPTION NUMBERS*****
//******************************
//******************************    

var encryptNumbers = [];
var lettersToNumbers = function () {
    var sentanceInput = document.getElementById("original-input").value;
    var allNumbers = 0;
    for (var i = 0; i < sentanceInput.length; i++) {
        allNumbers = sentanceInput.charCodeAt(i);
        encryptNumbers.push(allNumbers.toString());
    }
    console.log(encryptNumbers);
    return encryptNumbers;

}

buttonClick.addEventListener("click", lettersToNumbers);









//***********CHANGE NUMBER**********
//**********************************
//**********************************

var newNumber = 0;
var newStr = [];
var numbersChange = function () {
    var numberInput = parseInt(document.getElementById("number-input").value);
    if (numberInput >= 26) {
        numberInput = (numberInput % 26)
    }
    for (var i = 0; i < encryptNumbers.length; i++) {
        if (parseInt(encryptNumbers[i]) >= 97 && parseInt(encryptNumbers[i]) <= 122) {

            if (parseInt(encryptNumbers[i]) <= 122 - numberInput) {
                newNumber = (parseInt(encryptNumbers[i]) + numberInput);
                newStr.push(newNumber.toString());
            } else {
                newNumber = ((parseInt(encryptNumbers[i]) - 26) + numberInput);
                newStr.push(newNumber.toString());
            }
        } else {
            newStr.push(encryptNumbers[i]);
        }
    }
    return newStr;
}



//***********BACK TO LETTERS***********
//*************************************
//*************************************

buttonClick.addEventListener("click", numbersChange);

var finalSentance = "";
var numbersToLetters = function () {
    newStr.join(" ");
    for (var i = 0; i < newStr.length; i++) {

        finalSentance += String.fromCharCode(newStr[i]);

    }
    finalEncryption.innerHTML = finalSentance;
}

buttonClick.addEventListener("click", numbersToLetters);








//*****DECRYPTION NUMBERS*****
//******************************
//******************************    

var decryptedNumbers = [];
var decryptNumbers = function () {
    var allNumbers = 0;
    for (var i = 0; i < finalSentance.length; i++) {
        allNumbers = finalSentance.charCodeAt(i);
        decryptedNumbers.push(allNumbers.toString());
    }

    return decryptedNumbers;

}

buttonDecrypt.addEventListener("click", decryptNumbers);









//***********CHANGE NUMBER**********
//**********************************
//**********************************

var newDecryptNumber = 0;
var newDecryptStr = [];
var numbersDecryptChange = function () {
    var numberInput = parseInt(document.getElementById("number-input").value);
    if (numberInput >= 26) {
        numberInput = (numberInput % 26)
    }
    for (var i = 0; i < decryptedNumbers.length; i++) {
        if (parseInt(decryptedNumbers[i]) >= 97 && parseInt(decryptedNumbers[i]) <= 122) {

            if (parseInt(decryptedNumbers[i]) >= 97 + numberInput) {
                newDecryptNumber = (parseInt(decryptedNumbers[i]) - numberInput);
                newDecryptStr.push(newDecryptNumber.toString());
            } else {
                newDecryptNumber = ((parseInt(decryptedNumbers[i]) + 26) - numberInput);
                newDecryptStr.push(newDecryptNumber.toString());
            }
        } else {
            newDecryptStr.push(decryptedNumbers[i]);
        }
    }
    return newDecryptStr;
}

buttonDecrypt.addEventListener("click", numbersDecryptChange);
//
//
//
////***********BACK TO LETTERS***********
////*************************************
////*************************************
//
//
//
var finalDecryptSentance = "";
var decryptLetters = function () {
    newDecryptStr.join(" ");
    for (var i = 0; i < newDecryptStr.length; i++) {

        finalDecryptSentance += String.fromCharCode(newDecryptStr[i]);

    }
    finalDecryption.innerHTML = finalDecryptSentance;
}

buttonDecrypt.addEventListener("click", decryptLetters);



