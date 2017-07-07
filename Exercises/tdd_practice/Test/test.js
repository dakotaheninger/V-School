var chai = require("chai");

var assert = chai.assert;

var cal = require("../script.js");
var lastDigit = cal.lastDigit;
var stringTest = cal.stringTest;

describe("Test last digit", function(){
    it("Should return true if last two digits are equal", function(){
        assert.equal(lastDigit(33,43), true);
        assert.equal(lastDigit(24, 84), true);
    });
    it("Should return false if last two digits are not equal", function(){
        assert.equal(lastDigit(33, 55), false);
        assert.equal(lastDigit(44, 99), false);
    });
});


describe("Test String", function(){
    it("Should return string without first and last letter", function(){
        assert.equal(stringTest("hello"), "ell");
        assert.equal(stringTest("my name is dakota"), "y name is dakot");
    });
});