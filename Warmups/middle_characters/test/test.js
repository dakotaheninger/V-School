let chai = require("chai");

let assert = chai.assert;

let midChar = require("../app.js").midChar;

describe("A middle character finder", ()=>{
    it("Should return the middle two characters of an even string", ()=>{
        assert.equal(midChar("ahedijhbey"), "ij");
        assert.equal(midChar("iehfnbiehfneinfdho"), "hf");
    });
    it("Should throw and error if the string is odd", ()=>{
        assert.throws(()=> {midChar("hejdnhghjknbh")}, "String is odd");
        assert.throws(()=> {midChar("jdhbvgftrdesdfrgyhu")}, "String is odd");
    });
    it("Should throw an error when given an empty string", ()=>{
        assert.throw(()=> {midChar("")}, "String is empty");
    });
});