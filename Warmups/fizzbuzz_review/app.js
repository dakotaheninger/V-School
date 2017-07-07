let fizzBuzz = (num) => {
    let current = "";
    let newArr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            current = "FizzBuzz";
            newArr.push(current);
        } else if (i % 3 === 0) {
            current = "Fizz";
            newArr.push(current);
        } else if (i % 5 === 0) {
            current = "Buzz";
            newArr.push(current);
        } else {
            newArr.push(i);
        }

    }
    return newArr;
};

module.exports = {
    fizzBuzz
};