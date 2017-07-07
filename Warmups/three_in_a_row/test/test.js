let chai = require("chai");

let assert = chai.assert;

let tripleFinder = require("../app.js").tripleFinder;

describe("The filter", ()=>{
    it("Should return true if the string has 3 of the same numbers in a row", ()=>{
        assert.equal(tripleFinder([1,2,3,4,5,6,7,8,6,5,4,7,4,3,4,4,4,5,7,2,8,9,0,5,4,3]), true);
        assert.equal(tripleFinder([3,5,6,7,3,4,8,9,5,4,2,1,1,1,5,6,7,9,8,4,4,5,3,2,1,4]), true);
    });
    it("Should return false if the string does not have 3 of the same number in a row", ()=>{
        assert.equal(tripleFinder([1,2,3,4,5,3,2,4,6,7,8,9,6,5,4,4,3,1,2,5,7,8,5,3,2,3]), false);
        assert.equal(tripleFinder([5,6,3,7,7,4,3,2,1,1,4,6,9,8,0,0,5,3,4,2,3,2,5,6,8,9]), false);
    })
});

