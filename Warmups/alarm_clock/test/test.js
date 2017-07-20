let chai = require("chai");

let assert = chai.assert;

let talkingTime = require("../app.js").numToWord;

describe("A Talking Alarm Clock", ()=>{
    it("Should return the time in words", ()=>{
        assert.equal(talkingTime("00:00"), "twelve A.M.");
        assert.equal(talkingTime("1:1"), "one oh one A.M.");
        assert.equal(talkingTime("05:46"), "five forty-six A.M.");
        assert.equal(talkingTime("12:03"), "twelve oh three P.M.");
        assert.equal(talkingTime("14:05"), "two oh five P.M.");
        assert.equal(talkingTime("23:09"), "eleven oh nine P.M.");
        assert.equal(talkingTime("4:00"), "four A.M.");
        assert.equal(talkingTime("17:00"), "five P.M.");
    });
    it("Should throw an error if not formatted correctly", ()=>{
        assert.throw(()=>{talkingTime("9999")}, "Please enter a valid input");
        assert.throw(()=>{talkingTime("Hello")}, "Please enter a valid input");
        assert.throw(()=>{talkingTime("Hell:00")}, "Please enter a valid input");
        assert.throw(()=>{talkingTime("9p:0p")}, "Please enter a valid input");
    });
    it("Should throw an error if any numbers are not in a time range", ()=>{
        assert.throw(()=>{talkingTime("24:00")}, "Please enter a valid input");
        assert.throw(()=>{talkingTime("-3:08")}, "Please enter a valid input");
        assert.throw(()=>{talkingTime("15:-7")}, "Please enter a valid input");
        assert.throw(()=>{talkingTime("14:60")}, "Please enter a valid input");
    })
});