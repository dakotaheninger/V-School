//// FUNCTION TO RECEIVE NUMBER
//function isOdd(num1){
//// BOOLEAN
//var numIsOdd = true;
//// IF STATEMENT TO SEE IF NUMBER IS EVEN AND SET BOOLEAN
//if(num1 % 2 == 0){
//  numIsOdd = false;
//}
//// ELSE STATEMENT IF NUMBER IS NOT ODD AND SET BOOLEAN
//else {
//  numIsOdd = true;
//}
//// RETURN BOOLEAN
//return numIsOdd;
//}
//
//console.log(isOdd(8));


//// WRITE FUNCTION THAT ACCEPTS NUMBER
//function Negative(num){
//  var finalNumber = num;
//    // IF IT IS NOT NEGATIVE MAKE IT NEGATIVE
//  if(num > 0){
//    finalNumber = (num * -1);
//  }
//    //IF IT IS NEGATIVE DO NOTHING
//  return finalNumber;
//}
//console.log(Negative(-3))
////IF IT IS NEGATIVE DO NOTHING

//var number = [0,1,2,3,4,5,6,7,8,9];
//// FUNCTION THAT ACCEPTS ARRAY
//var ReverseArray = function(arr){
//  // REVERSE ARRAY
//  arr.reverse();
//  // RETURN ARRAY
//  return arr;
// }
//
//console.log(ReverseArray(number));

//var number = [0,1,2,3,4,5,6,7,8,9];
//var ReverseArray = function(arr){
//  var newArray = [];
//  for(var i = arr.length -1; i >= 0; i--){
//    newArray.push(arr[i]);
//  }
//  return newArray;
//}
//
//console.log(ReverseArray(number));


//var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a'];
//var vowel = ["a","e","i","o","u"];
//function VowelCount(astr, vstr){
//  var total = 0;
//  for(var i = 0; i < astr.length; i++){
//    for(var j = 0; j < vstr.length; j++){
//      if(astr[i] == vstr[j]){
//        total++;
//      }
//    }
//  }
//  return total;
//}
//
//console.log(VowelCount(alpha,vowel));