let str = "Hello (from the (otherside) i must have) called a thousand times";
// // let parenthesesReverse = (str) =>{
// while (str.includes("(")) {
    let indexParOne = 0;
    let indexParTwo = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            indexOne = i + 1;

        } else if(str[i] === ")"){
            indexTwo = i;
            break;
        }

    }
    let newStr = str.slice(indexOne, indexTwo);
    let reverseString = newStr.split("").reverse().join("");
    console.log(reverseString);
    console.log(str);
// }


// let first = false;
// let second = false;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(" && str[i + 1] === "(") {
//         first = true;
//     } else if (str[i] === ")" && str[i + 1] === ")") {
//         second = true;
//     }
//
// }
// if (first === true) {
//     let newArr = str.split("(");
//     let newStr = newArr[2];
//     let secondArr = newStr.split(")");
//     let secondStr = secondArr[0];
//     let thirdStr = secondArr[1];
//     let secondStrSplit = secondStr.split("");
//     let thirdStrSplit = thirdStr.split("");
//     let secondStrReverse = secondStrSplit.reverse();
//     let thirdStrReverse = thirdStrSplit.reverse();
//     let secondStrJoin = secondStrReverse.join("");
//     let thirdStrJoin = thirdStrReverse.join("");
//     let finalSentence = `${newArr[0]}((${secondStrJoin}) ${thirdStrJoin})${secondArr[2]}`;
//     console.log(finalSentence);
// } else if (second === true) {
//     let newArr = str.split("(");
//     let secondStr = newArr[1];
//     let newStr = newArr[2];
//     let secondArr = newStr.split(")");
//     let thirdStr = secondArr[0];
//     let secondStrSplit = secondStr.split("");
//     let thirdStrSplit = thirdStr.split("");
//     let secondStrReverse = secondStrSplit.reverse();
//     let thirdStrReverse = thirdStrSplit.reverse();
//     let secondStrJoin = secondStrReverse.join("");
//     let thirdStrJoin = thirdStrReverse.join("");
//     let finalSentence = `${newArr[0]}(${secondStrJoin} (${thirdStrJoin}))${secondArr[2]}`;
//     console.log(finalSentence);
// } else {
//     let newArr = str.split("(");
//     let newStr = newArr[1];
//     let secondArr = newStr.split(")");
//     let secondStr = secondArr[0];
//     let secondStrSplit = secondStr.split("");
//     let reverseArr = secondStrSplit.reverse();
//     let joinStr = reverseArr.join("");
//     let finalSentence = `${newArr[0]}(${joinStr})${secondArr[1]}`;
//     //     return finalSentence;
// }
//
// // };


// module.exports = parenthesesReverse;







