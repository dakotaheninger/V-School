var readlineSync = require("readline-sync");

var softAttacks = ["punch", "hit", "slap", "kick"];
var hardAttacks = ["kill", "shoot", "stab"];
var movement = ["go", "move", "walk", "travel", "run", "leave", "get away"];
var takeOptions = ["grab", "take", "retrieve", "pickup", "pick-up", "pick up", "get"];
var clipObjects = ["clip", "magazine"];
var gunObjects = ["gun", "pistol", "firearm"];
var gunLoadOptions = ["load", "cock", "jack"];
var isGunTaken = false;
var isClipTaken = false;
var isGameActive = true;
var isGunLoaded = false;



console.log("You wake up.");
console.log("Standing over you is a zombie with a knife.");
console.log("You look to the left and see a pistol clip.");
console.log("You look to the right and see an empty gun.");
console.log("What do you do?");


while (isGameActive == true) {
    var beginningMove = readlineSync.question(">");
    var beginningMoveLowerCase = beginningMove.toLowerCase();
    var beginningMoveArr = beginningMoveLowerCase.split(" ");
    if (softAttacks.indexOf(beginningMoveArr[0]) >= 0) {
        console.log("Your weak " + beginningMoveArr[0] + " doesnt affect his undead form.");
    } else if (hardAttacks.indexOf(beginningMoveArr[0]) >= 0) {
        if (isGunLoaded == false && isGunTaken == false || isClipTaken == false) {
            console.log("With what? Freakin rookie");
        } else if (isGunLoaded == false && isGunTaken == true && isClipTaken == true) {
            console.log("You might want to load the gun first? Do they not teach this stuff where your'e from?");
        } else if (isGunLoaded == true) {
            console.log("You aim your gun at the zombies head and pull the trigger. The zombies head explodes and he crumples to the ground next to you.");
            console.log("Congratulations. You survived. For now.");
            isGameActive = false;
        }
    } else if (movement.indexOf(beginningMoveArr[0]) >= 0) {
        console.log("There is still a zombie with a knife standing over you genius. Remember him?");
    } else if (takeOptions.indexOf(beginningMoveArr[0]) >= 0) {
        if (beginningMoveArr.includes("clip")) {
            console.log("Clip Taken");
            isClipTaken = true;
        } else if (beginningMoveArr.includes("gun")) {
            console.log("Gun Taken");
            isGunTaken = true;
        } else if (beginningMoveArr.includes("knife")) {
            console.log("You try to take the zombies knife and accidentaly slice your hand open. You try with your other hand and slice it open too. You are really bad at disarming people, and the undead I guess. He stabs you to death and begins feasting on your brains.");
            isGameActive = false;
        } else {
            console.log("There isn't one of those around.");
        }
    } else if (gunLoadOptions.indexOf(beginningMoveArr[0]) >= 0) {
        if (isGunLoaded == true) {
            console.log("You already loaded the gun remember?");
        } else if (isGunTaken == true && isClipTaken == true) {
            console.log("The gun is loaded");
            isGunLoaded = true;
        } else if (isGunTaken == false && isClipTaken == false) {
            console.log("What are you trying to load? You don't have anything. I hope this zombie eats you.");
        } else if (isGunTaken == false) {
            console.log("You can't load a clip into a gun that you don't have.");
        } else if (isClipTaken == false) {
            console.log("You can't load a gun without a clip.");
        }
    } else if (beginningMoveArr.includes("nothing")) {
        console.log("You did nothing and the zombie stabbed you to death. He is now feasting on your brains.");
        isGameActive = false;
    } else if (beginningMoveArr.includes("look")) {
        console.log("The zombie is still standing over you. For some reason he hasn\'t killed you yet. Maybe take this opportunity to kill him?");
    } else {
        console.log("I don\'t understand that command");
    }
}
