var add = function(a,b) {
    return a + b;
}

var sub = function(a,b) {
    return a - b;
}

var mult = function(a,b){
    return a * b;
}

var div = function(a,b){
    return a / b;
}

var mod = function(a , b){
    return a % b;
}

var cal = {
    add: add,
    sub: sub,
    mult: mult,
    div: div,
    mod: mod
}

module.exports = cal;




