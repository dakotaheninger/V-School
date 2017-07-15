let chai = require("chai");

let assert = chai.assert;

let repeat = require("../app.js").repeat;


describe("A Repeat Function", ()=>{
    it("Should repeat the string based on the number of times we input", ()=>{
        assert.equal(repeat("Hello", 4), "HelloHelloHelloHello");
        assert.equal(repeat("Okay", 2), "OkayOkay");
    });
    it("Should return false if the number is less than 0", ()=>{
        assert.throw(()=>{repeat("Okay", 0)}, "Please pick a number greater than 0");
        assert.throw(()=>{repeat("Yes", -3)}, "Please pick a number greater than 0")
    });
});