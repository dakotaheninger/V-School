var input = "hello its me i was wondering if after";
var check = "a";
var numbers = [80,84,75,83,74,93,85,84,84,93,88,85,6,78]
var loopString = function(str){
    for(var i = 0; i < str.length; i++){
        console.log(str[i]);
    }
}

loopString(input);

var firstInstance = function(str, a){
  var indexPosition = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] == a){
      indexPosition = i;
      break;
    } else {
      indexPosition = "That letter does not exist in this sentance";
    }
  }
  return indexPosition;
}

console.log(firstInstance(input, check));

var findFortyTwo = function(arr){
var place = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == 42){
      place = i;
      break;
    } else {
      place = "42 is not in this list";
    }
  }
  return place;
}

console.log(findFortyTwo(numbers));

var smallestNumber = function(arr){
  var lastNumber = 0;
  var smallestNumber = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < smallestNumber){
      smallestNumber = arr[i];
    } 
    lastNumber = arr[i];
    }
  
    return smallestNumber;
  }
console.log(smallestNumber(numbers));