var randomNumber = 0;
var randomNumberGenerator = function (min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}

var type = "";
var enemyType = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
var typeGenerator = function () {
    randomNumberGenerator(0, 2);
    for (var i = 0; i < enemyType.length; i++) {
        type = enemyType[randomNumber]
    }
}


var hitPoints = 0;
var hitPointsGenerator = function () {
    if (type == enemyType[0]) {
        randomNumberGenerator(80, 100);
    } else if (type == enemyType[1]) {
        randomNumberGenerator(50, 79);
    } else {
        randomNumberGenerator(20, 49);
    }
    hitPoints = randomNumber;
}



var defensePoints = 0;
var defenseGenerator = function () {
    defensePoints = hitPoints * 3;
}



var enemyGenerator = function (type, hitpoints, defense) {
        this.type = type,
        this.hitpoints = hitpoints,
        this.defense = defense,
        this.print = function () {
            return "This " + this.type + " has a health of " + this.hitpoints + " points and a defense of " + this.defense + " points."
        }
}

var allEnemies = [];
for (var i = 0; i < 100; i++) {
    randomNumberGenerator();
    typeGenerator();
    hitPointsGenerator();
    defenseGenerator();
    var newEnemy = new enemyGenerator(type, hitPoints, defensePoints);
    allEnemies.push(newEnemy.print());
    
}
console.log(allEnemies);
