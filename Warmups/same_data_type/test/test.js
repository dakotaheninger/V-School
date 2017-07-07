let chai = require("chai");

let assert = chai.assert;

let dataCompare = require("../app.js").dataCompare;


describe("A data comparison", () =>{
    it("Should return true if the data types are equal", ()=>{
        assert.equal(dataCompare([[1,2,3], [4,5,6], [7,8,9]]), true);
        assert.equal(dataCompare([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]), true);
    });
    it("Should return false if the data types are not equal", ()=>{
        assert.equal(dataCompare([[1,2,3], ["a", "b", "c"], [true, false, false]]), false);
        assert.equal(dataCompare([["a", "b", "c"], [1,2,3], [true, false, "a"]]), false);
    });
});