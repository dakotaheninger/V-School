var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop();
console.log("Vegetables: ", vegetables);


fruit.shift();
console.log("Fruit: ", fruit);


var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex);

fruit.push(orangeIndex);
console.log(fruit);


var vegetableLength = vegetables.length;
console.log(vegetableLength);


vegetables.push(vegetableLength);
console.log(vegetables);


var food = fruit.concat(vegetables);
console.log(food);


food.splice(4, 2);
console.log(food);


food.reverse();
console.log(food);

var nums = [2, 4, 6, 9, 10 , 54, 32, 12, 45];
var newNums = nums.map(function(item){
  return (item + 1);
})
console.log(newNums);

var names = ["Dakota", "Raeni", "Keely", "Erik", "Cody", "Erin"];
var newNames = names.map(function(item){
  return {Name: item};
})
console.log(newNames);

