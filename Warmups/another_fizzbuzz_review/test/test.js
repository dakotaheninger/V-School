let chai = require("chai");

let assert = chai.assert;

let fizzBuzz = require("../index.js");


describe("FizzBuzz", ()=>{
    it("Should return a fizzbuzz array", ()=>{
        assert.deepEqual(fizzBuzz(20), [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz"])
    });
});