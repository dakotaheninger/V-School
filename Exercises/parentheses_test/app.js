let pTest = (str) => {
    str = str.split("");
    newStr = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] == "(" || str[i] == ")"){
            newStr.push(str[i]);
        }
    }
    let isCorrect = false;
    for (var i = 0; i < newStr.length + 1; i++) {
        if (newStr[0] == ")") {
            return false;
        } else if (newStr.length == 1) {
            return false;
        } else if (newStr[newStr.length - 1] == "(") {
            return false;
        } else if(newStr[i] == ")") {
            newStr.splice((i - 1), 2);
            i = 0;

        }
        isCorrect = true;


    }
    return isCorrect;
};



module.exports = {
    pTest
};

