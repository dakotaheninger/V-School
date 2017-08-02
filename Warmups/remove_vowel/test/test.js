let chai = require("chai");

let assert = chai.assert;

let vowelRemoval = require("../index.js");

describe("A Vowel Remover", ()=>{
    it("Should return an object that contains the string with no vowels, and the string of the vowels removed", ()=>{
        assert.deepEqual(vowelRemoval("Hello it is a nice day"), {noVowels: "Hlltsncdy", vowels: "eoiiaiea"});
    })
});
