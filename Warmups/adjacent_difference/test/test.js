let chai = require("chai");

let assert = chai.assert;

let adjTest = require("../app.js").adjTest;



describe("Adjacent Tester", ()=>{
    it("Should return the 3 longest adjacent strings in an array", ()=>{
        assert.deepEqual(adjTest(["this", "is", "an", "array"]), ["is", "an", "array"]);
        assert.deepEqual(adjTest(["hello", "from", "the", "otherside"]), ["from", "the", "otherside"]);
        assert.deepEqual(adjTest(["hello", "its", "me"]), ["hello", "its", "me"]);
        assert.deepEqual(adjTest(["hola", "como", "esta", "door", "from", "this"]), ["hola", "como", "esta"]);
        assert.deepEqual(adjTest(["today", "is", "the", "day", "that", "jacob", "will", "bestow", "upon", "us", "the", "wisdom", "of", "react"]), ["jacob", "will", "bestow"]);
    });
    it("Should throw an error if less than 3 strings", ()=>{
        assert.throw(()=> {adjTest(["oh", "hello"])}, "Array does not have 3 or more strings");
        assert.throw(()=> {adjTest(["well", "hello"])}, "Array does not have 3 or more strings");
    });
    it("Should throw an error if all strings are empty", ()=>{
        assert.throw(()=> {adjTest(["", "", "", ""])}, "All strings in this array are empty");
        assert.throw(()=> {adjTest(["", "", "", "", "", ""])}, "All strings in this array are empty");
    });
});