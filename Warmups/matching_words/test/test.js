let chai = require("chai");

let assert = chai.assert;

let matchingWords = require("../index.js").matchingWords;

describe("A matching word filter", () => {
    it("Should return the words that appear more than once in a string", () => {
        assert.deepEqual(matchingWords("hello its me hello how are you today its me"), ["hello", "its", "me"]);
        assert.deepEqual(matchingWords("well today i went to go to the store today"), ["today", "to"]);
    });
    it("Should return there are no matching words if there are no repeating words", () => {
        assert.equal(matchingWords("how are you doing today"), "There are no repeating words in this string");
        assert.equal(matchingWords("it has been a wonderful day so far"), "There are no repeating words in this string");
    });
});