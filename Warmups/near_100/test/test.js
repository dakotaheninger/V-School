let chai = require("chai");

let assert = chai.assert;

let near100 = require("../script.js").near100;


describe("This Calculator", () => {
    it("Should return true if within 10 of 100 or 200", () => {
        assert.equal(near100(95), true);
        assert.equal(near100(105), true);
        assert.equal(near100(198), true);
        assert.equal(near100(203), true);
    });
    it("Should return false if not within 10 of 100 or 200", () => {
        assert.equal(near100(54), false);
        assert.equal(near100(132), false);
        assert.equal(near100(180), false);
        assert.equal(near100(211), false);
    });
});


