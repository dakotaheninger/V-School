let chai = require("chai");

let assert = chai.assert;

let fizzBuzz = require("../app.js").fizzBuzz;

describe("FizzBuzz", () => {
    it("Should return an array of the number with either fizz, buzz, or fizzbuzz next to it", () => {
        assert.deepEqual(fizzBuzz(20), [1, 2, "Fizz", 4, "Buzz",  "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]);
    });
});