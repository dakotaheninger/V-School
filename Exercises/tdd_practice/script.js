var lastDigit = function(a, b) {
    var isSame = true;
    var first = a % 10;
    var second = b % 10;
    if(first == second){
        isSame = true;
    } else {
        isSame = false;
    }
    return isSame;
}

var stringTest = function(str) {
    return str.substr(1, str.length - 2);

}


module.exports = {
    lastDigit: lastDigit,
    stringTest: stringTest
}



