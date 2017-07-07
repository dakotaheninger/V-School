let chai = require("chai");

let assert = chai.assert;

let factorFinder = require("../app.js").factorFinder;

describe("A Factor Finder", ()=>{
    it("Should return the number of factors", ()=>{
        assert.equal(factorFinder(10), 4);
        assert.equal(factorFinder(25), 3);
    });
    it("Should return prime if the number only has two factors", ()=>{
        assert.equal(factorFinder(7), "prime");
        assert.equal(factorFinder(11), "prime");
    });
});