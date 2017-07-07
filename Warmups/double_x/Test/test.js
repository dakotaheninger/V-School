let chai = require("chai");

let assert = chai.assert;

let stringTest = require("../script.js");


describe("The string sorter", () =>{
    it("Should return true if the first instance of x is followed by an x", () =>{
        assert.equal(stringTest("ahvbeoeoifhxxoeihfaoeihdxoeihfdnxeoihdfleix"), true);
        assert.equal(stringTest("agadlfkugeiufgegfxxaleiufgedgxeiurgfeigxeifugeix"), true);
    });
    it("Should return false if the first instance of x is not followed by an x", () =>{
        assert.equal(stringTest("alaksjdgflkegfxlakudgfxalsuegflkdgxxkdjhfoeix"), false);
        assert.equal(stringTest("ldkufhejgfhdggxliugfjdgkjgxkugkjgdkjfgxxskghffegx"), false);
    })
})