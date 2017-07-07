var chai = require("chai");
var assert = chai.assert;


//IMPORT CODE 
//***********
//***********

var cal = require("../script.js");
var add = cal.add;
var sub = cal.sub;
var mult = cal.mult;
var div = cal.div;
var mod = cal.mod;


describe("A Calculator", function(){
    it("should return the sum of two numbers", function(){
        assert.equal(add(2,2), 4);
        assert.equal(add(-1,-1), -2);
    });
    it("should return the difference of two numbers", function(){
        assert.equal(sub(5,3), 2);
        assert.equal(sub(6,9), -3);
    });
    it("should return the product of two numbers", function(){
        assert.equal(mult(2,4), 8);
        assert.equal(mult(3,6), 18);
    });
    it("should return the quotient of two numbers", function(){
        assert.equal(div(8,2), 4);
        assert.equal(div(9,3), 3);
    });
    it("should return the modules of two numbers", function(){
        assert.equal(mod(8,2), 0);
        assert.equal(mod(9,2), 1);
    })
});

