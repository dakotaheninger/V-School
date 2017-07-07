var palindrome = function (str) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    isPalindrome = true;
    var strLowerCase = str.toLowerCase();
    var newStringArr = [];
    for (var i = 0; i < strLowerCase.length; i++) {
        for (var x = 0; x < alphabet.length; x++) {
            if (strLowerCase[i] == alphabet[x]) {
                newStringArr.push(strLowerCase[i]);

            }
        }
    }
    var newReverseStringArr = newStringArr.slice();
    newReverseStringArr.reverse();
    var newString = newStringArr.join("");
    var newReverseString = newReverseStringArr.join("");
    if (newString == newReverseString) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }
    return isPalindrome;
}



module.exports = {
    palindrome: palindrome
}
