var chai = require("chai");

var assert = chai.assert;


var temp = require("../script.js");
var palindrome = temp.palindrome;

describe("A Palindrome", function(){
    it("Should return true if statement reads the same forward as it does backwards", function(){
        assert.equal(palindrome("race car"), true);
        assert.equal(palindrome("Star Rats!"), true);
        assert.equal(palindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"), true);
    });
    it("Should return false if statement does not read the same forward as it does backwards", function(){
        assert.equal(palindrome("hello"), false);
        assert.equal(palindrome("palindrom"), false);
    })
});