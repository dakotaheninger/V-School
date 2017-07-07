function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log(add(22, 43));


function largestNumber(numberOne, numberTwo, numberThree) {
    var biggestNumber;
    if (numberOne > numberTwo && numberOne > numberThree) {
        biggestNumber = numberOne;
    } else if (numberTwo > numberOne && numberTwo > numberThree) {
        biggestNumber = numberTwo;
    } else {
        biggestNumber = numberThree;
    }
    return biggestNumber;
}
console.log(largestNumber(12, 33, 76));

function isEvenOrOdd(onlyNumber) {
    var isEven;
    var isOdd;
    if (onlyNumber % 2 == 0) {
        isEven = "Even";
        return isEven;
    } else {
        isOdd = "Odd";
        return isOdd;
    }
}

console.log(isEvenOrOdd(52));

function longString(onlyString) {
    var splitString = onlyString.split("");
    if (splitString.length <= 20) {
        var joinString = splitString.join("");
        var doubleString = joinString + " " + joinString;
        return doubleString;
    } else {
        var halfString = "";
        for(var i = 0; i < (splitString.length / 2); i++){
            halfString += splitString[i];}
        return halfString;
            
    }
}

console.log(longString("hello. its me. i was wondering if after all these years you'd like to meet"))

function fibonacciNumbers(n){
    var lastNumber = 0;
    var currentNumber = n;
    var newNumber = 0;
    var total = 0;
    var sentance = "";
    
    for(var i = 0; i < n; i++){
      lastNumber = currentNumber;
      currentNumber = newNumber;
      newNumber = currentNumber + lastNumber;
      total += newNumber;
      sentance += newNumber.toString() + "  ";
    }
  return sentance + total;
  
}
console.log(fibonacciNumbers(10));

function quadraticFormula(a,b,c){
  var positiveX = ((-b + (Math.sqrt(b * b) - 4 * a * c))/2 * a);
  var negativeX = ((-b - (Math.sqrt(b * b) - 4 * a * c))/2 *a);
  return [positiveX, negativeX];
  }

console.log(quadraticFormula(2,3,5));

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
