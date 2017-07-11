let chai = require("chai");

let assert = chai.assert;


let pTest = require("../app.js").pTest;


describe("A Parentheses Test", ()=>{
    it("Should return true if all parentheses have an opening and closing tag", ()=>{
        assert.equal(pTest("(aet5(eded(a(abad)4rg)4tyy^)e#@!)3"), true);
        assert.equal(pTest("(33ff)(@#s)efge(45$)adfe(%$^)DGEed($%gg)4D($Rg)"), true);
    });
    it("Should return false if a parentheses does not have an opening or a closing tag", ()=>{
        assert.equal(pTest("(E55%(ADF3(dffe$)%$$)"), false);
        assert.equal(pTest(")(#$$RR)(Adfefe%$)($%GG)("), false);
        assert.equal(pTest("((dljkfhe&^*))aldihfe*)((eoifhe*)"), false);
        assert.equal(pTest("(((()))()))"), false);
    });
});