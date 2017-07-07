var foods = ["Steak", "Ice Cream", "Mac and Cheese", "Pizza", "Cheeseburger"];
  
var newSentance = "";
var reverseSentance = foods.reverse();

var object = reverseSentance.map(function(item){
  var newWord = item.split("");
  var reverseWord = newWord.reverse();
  var joinWord = reverseWord.join("");
  newSentance += joinWord;
  return joinWord;
})

console.log(object);


 reverseSentance.forEach(function(item){
         var splitString = item.split("");
         var reverseWord = splitString.reverse();
         var joinWord = reverseWord.join("");
         newSentance += joinWord + " ";
         return joinWord;
 
  
 })
 
 console.log(newSentance);


 var students = ["ksarah", "kspencer", "kwyatt"];
 var output = students.map(function(item){
   return {name: item};
 })
 console.log(output);