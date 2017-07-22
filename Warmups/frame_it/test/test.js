let chai = require("chai");

let assert = chai.assert;

let frame = require("../app.js").frame;

describe("A Frame", ()=>{
    it("Should frame any string in a multidimensional array", ()=>{
        assert.deepEqual(frame("hello"), [["*","*","*","*","*"], ["h","e","l","l","o"], ["*","*","*","*","*"]]);
        assert.deepEqual(frame("game of thrones"), [["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"], ["g","a","m","e"," ","o","f"," ","t","h","r","o","n","e","s"], ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]])
    });
});