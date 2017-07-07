var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1','2','3','4','5','6','7','8','9','$','!','(',')'];
var randomNumber = function(min, max){
  return (Math.floor(Math.random() * (max - min )) + min);
}
var randomChar = function(alphabet){
var index = randomNumber(0,alpha.length);
return alpha[index];
}

console.log(randomChar(alpha));
