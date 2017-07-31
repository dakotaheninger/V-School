let readlineSync = require("readline-sync");

console.log(`This is the Game of Threes.
When you play the Game of Threes, you win, or you die.`);

let userInput = readlineSync.question(`Enter any number.
 >`);


let gameOfThrees = (num) => {
    let newNum = parseInt(num);
    console.log(newNum);
    while (newNum !== 1) {
        if (newNum % 3 === 0) {
            newNum = newNum / 3;
            console.log(newNum);
        } else {
            if ((newNum - 1) % 3 === 0) {
                newNum = newNum - 1;
                console.log(newNum);
                newNum = newNum / 3;
                console.log(newNum)
            } else {
                newNum = newNum + 1;
                console.log(newNum);
                newNum = newNum / 3;
                console.log(newNum);
            }
        }
    }
};


gameOfThrees(userInput);