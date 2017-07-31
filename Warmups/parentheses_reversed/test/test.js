let chai = require("chai");

let assert = chai.assert;

let parenthesesReverse = require("../index.js");

describe("A Parentheses Reverser", () => {
    it("Should reverse the string inside of the parentheses", () => {
        assert.equal(parenthesesReverse("Hello from the (otherside) i must have called a thousand times"), "Hello from the (edisrehto) i must have called a thousand times");

    })
});