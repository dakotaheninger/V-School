//var assert = function(actual, expected){
//  if(actual != expected){
//    throw {actual: actual, expected: expected};
//  } else {
//    console.log("Test Passed", {actual: actual, expected: expected});
//  }
//}
//
//
//var describe = function(message, testFunc) {
//    console.log(message);
//    try{
//        testFunc();
//    } catch(err) {
//        console.log("Test Group Failed", err);
//}
//}
//
//
//
//var add = function(a,b){
//    return a + b;
//}
//
//var subtract = function(a,b){
//    return a - b;
//}
//
//
//describe("Test Calculator", function(){
//    assert(add(2,3), 5);
//    assert(subtract(2,3), 1);
//});


//var assert = function (actual, expected) {
//    if (actual != expected) {
//        throw {
//            actual: actual,
//            expected: expected
//        };
//    } else {
//        console.log("Test Passed", {
//            actual: actual,
//            expected: expected
//        });
//    }
//}
//
//
//var describe = function (message, testFunc) {
//    console.log(message);
//    try {
//        testFunc();
//    } catch (err) {
//        console.log("Test Group Failed", err);
//    }
//}
//
//
//var add = function (a, b) {
//    return a + b;
//}
//
//var subtract = function (a, b) {
//    return a - b;
//}
//
//var multiply = function (a, b) {
//    return a * b;
//}
//
//var divide = function (a, b) {
//    return a / b;
//}
//
//
//var testAssets = function () {
//    assert(add(4, 6), 10);
//    assert(subtract(6, 4), 2);
//    assert(multiply(2, 2), 4);
//    assert(divide(4, 2), 2);
//}
//
//describe("Test Calculator", testAssets());


var assert = function(actual, expected){
    if(actual != expected){
        throw {actual: actual, expected: expected};
    } else {
        console.log("Test Passed", {actual: actual, expected: expected});
    }
}

var describe = function(message, testFunc){
    console.log(message)
    try {
        testFunc();
    } catch(err) {
        console.log("Test Group Failed", err);
    }
}

var Player = function(name, health, inventory) {
    this.name = name;
    this.health = health || 100;
    this.inventory = inventory || [];
    this.takeDamage = function(dam) {
        this.health -= dam;
    }
    this.healDamage = function(dam) {
        this.health += dam;
    }
    this.addItem = function(item) {
        this.inventory.push(item)
    }
}

var testAttributes = function() {
    var player = new Player("Dakota");
    assert(player.name, "Dakota");
    assert(player.health, 100);
    assert(player.inventory.length, 0);
}

var testMethods = function() {
    var player = new Player("Dakota");
    player.takeDamage(30);
    assert(player.health, 70);
    player.healDamage(25);
    assert(player.health, 95);
    player.addItem("Sword");
    assert(player.inventory.length, 1);
}

describe("Test Character has Attributes", testAttributes);

describe("Test Character Methods", testMethods);






