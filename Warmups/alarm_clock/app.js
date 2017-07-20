let converter = require("number-to-words");

let numToWord = (str) => {
    let newSentence = "";
    splitString = str.split(":");
    if (splitString.length !== 2 || splitString[0] < 0 || splitString[0] > 23 || splitString[1] < 0 || splitString[1] > 59) {
        throw "Please enter a valid input"
    } else if (splitString.length === 2 && isNaN(parseInt(splitString[0])) || isNaN(splitString[1])) {
        throw "Please enter a valid input"
    } else {
        if (parseInt(splitString[0]) === 0) {
            newSentence += `twelve `;
            if (parseInt(splitString[1]) <= 9 && parseInt(splitString[1]) > 0) {
                newSentence += `oh ${converter.toWords(splitString[1])} A.M.`;
            } else if (parseInt(splitString[1]) === 0) {
                return "twelve A.M.";
            } else {
                newSentence += `${converter.toWords(splitString[1])} A.M.`;
            }
        } else if (parseInt(splitString[0]) > 0 && parseInt(splitString[0]) <= 12) {
            newSentence += `${converter.toWords(splitString[0])} `;
            if (parseInt(splitString[0]) === 12) {
                if (parseInt(splitString[1]) === 0) {
                    newSentence += `P.M.`
                } else if (parseInt(splitString[1]) <= 9 && parseInt(splitString[1]) > 0) {
                    newSentence += `oh ${converter.toWords(splitString[1])} P.M.`;
                } else {
                    newSentence += `${converter.toWords(splitString[1])} P.M.`;
                }
            } else {
                if (parseInt(splitString[1]) === 0) {
                    newSentence += `A.M.`
                } else if (parseInt(splitString[1]) <= 9) {
                    newSentence += `oh ${converter.toWords(splitString[1])} A.M.`;
                } else {
                    newSentence += `${converter.toWords(splitString[1])} A.M.`;
                }
            }
        } else if (parseInt(splitString[0]) > 12 && parseInt(splitString[0]) < 24) {
            let newTime = parseInt(splitString[0]) - 12;
            newSentence += `${converter.toWords(newTime)} `;
            if (parseInt(splitString[1]) === 0) {
                newSentence += `P.M.`
            } else if (parseInt(splitString[1]) <= 9) {
                newSentence += `oh ${converter.toWords(splitString[1])} P.M.`;
            } else {
                newSentence += `${converter.toWords(splitString[1])} P.M.`;

            }
        }
    }
    return newSentence;
};




module.exports = {
    numToWord
};