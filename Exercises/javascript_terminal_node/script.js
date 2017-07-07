var number = prompt("Please enter a number 1 - 10");
while(number < 1 || number > 10 || number == ""){
  var number = prompt("Whoops! That doesnt meet the parameteres! Please enter a number 1 - 10");
}

var secondNumber = prompt("Please enter another number 11 - 20");
while(secondNumber < 11 || secondNumber > 20 || secondNumber == ""){
  var secondNumber = prompt("Whoops! That doesnt meet the parameteres! Please enter a number 11 - 20");
}

var total;
for(var i = number; i < secondNumber; i++){
    total += i + (i +1);
    console.log(total);
}




function addingNumber(a, b, c, d, e){
    
  var sentance = a + b + c + d + e + total;
      return sentance;
}

console.log(addingNumber("The total sum of adding all numbers between ", number, " and ", secondNumber, " is equal to "));