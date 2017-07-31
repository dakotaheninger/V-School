let readlineSync = require("readline-sync");

// let cal = require("./cal");
//
// let add = cal.add;
// let sub = cal.sub;
// let mult = cal.mult;
// let div = cal.div;
// let mod = cal.mod;
//
// let menu = `[+] Please select whether you would like to:
// [A]dd
// [S]ubtract
// [M]ultiply
// [D]ivide
// [R]emainder
// [Q]uit`;
//
//
// console.log(`
// [+] Welcome to my Calculator
//
// `);
//
// console.log(menu);
//
//
// let userInput = readlineSync.question(`
// > `).toLowerCase();
// console.log(userInput);
//
// while (userInput !== "q") {
//     if (userInput !== "q") {
//         console.log(`[+] Please enter the first number
//     `);
//         let num1 = parseInt(readlineSync.question(`> `));
//         console.log(`[+] Please enter the second number
//     `);
//         let num2 = parseInt(readlineSync.question(`> `));
//         if (userInput === "a") {
//             console.log(add(num1, num2));
//             console.log(menu);
//             userInput = readlineSync.question(`> `).toLowerCase();
//         } else if (userInput === "s") {
//             console.log(sub(num1, num2));
//             console.log(menu);
//             userInput = readlineSync.question(`> `).toLowerCase();
//         } else if (userInput === "m") {
//             console.log(mult(num1, num2));
//             console.log(menu);
//             userInput = readlineSync.question(`> `).toLowerCase();
//         } else if (userInput === "d") {
//             console.log(div(num1, num2));
//             console.log(menu);
//             userInput = readlineSync.question(`> `).toLowerCase();
//         } else if (userInput === "r") {
//             console.log(mod(num1, num2));
//             console.log(menu);
//             userInput = readlineSync.question(`> `).toLowerCase();
//         } else if (userInput === "q") {
//             console.log("Goodbye!");
//             break;
//         }
//     } else {
//         console.log("Please select a valid input based on the first letter of the command");
//     }
// }
let gridNumber = 0;

let genGrid = (num) => {
    let grid = [];
    gridNumber = num;
    for (let i = 0; i < num; i++) {
        grid.push([]);
        for (let x = 0; x < num; x++) {
            grid[i].push("0");
        }
    }
    return grid
};
console.log(`[+] How big would you like the grid?
`);
let gridSize = parseInt(readlineSync.question(`> `));

let grid = genGrid(gridSize);
console.log(grid);

console.log(`
[+] Please enter the X coordinate for the space you would like to change
`);
let xCoord = parseInt(readlineSync.question(`> `)) - 1;
if (xCoord > gridNumber - 1 || xCoord < 0) {
    console.log("Not a valid entry");
} else {
    console.log(`[+] Please enter the Y coordinate for the space you would like to change
`);
    let yCoord = (gridNumber - parseInt(readlineSync.question(`> `)));
    if (yCoord > gridNumber || yCoord < 0) {
        console.log("Not a valid entry");
    } else {
        console.log(`[+] Please enter the character you would like to replace it with
`);
        let newLetter = readlineSync.question(`> `);
        grid[yCoord].splice(xCoord, 1, newLetter);
        console.log(grid);
    }
}









